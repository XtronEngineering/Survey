const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { QUESTIONS_DATA } = require('./questionsData');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ════════════════════════════
// PHONE VALIDATION
// ════════════════════════════
function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  // Remove spaces and hyphens, check if remaining is exactly 10 digits
  const cleaned = phone.replace(/[\s-]/g, '');
  return /^\d{10}$/.test(cleaned);
}

// ════════════════════════════
// RESOLVE RESPONSES — Convert numeric indices to human-readable labels
// ════════════════════════════
function resolveResponses(rawResponses) {
  const resolved = {};
  
  if (!rawResponses || typeof rawResponses !== 'object') return resolved;
  
  for (const [qid, value] of Object.entries(rawResponses)) {
    // Skip undefined or null values
    if (value === undefined || value === null) continue;
    
    // Find question definition
    const q = QUESTIONS_DATA.questions.find(q => q.id === qid);
    if (!q) {
      resolved[qid] = value; // Keep as-is if question not found
      continue;
    }

    // Handle single-select questions
    if (q.type === 'single' && q.options && q.options[value]) {
      resolved[qid] = {
        index: value,
        mr: q.options[value].mr,
        en: q.options[value].en
      };
    }
    // Handle multi-select questions
    else if (q.type === 'multi' && Array.isArray(value) && q.options) {
      resolved[qid] = value.map(i => ({
        index: i,
        mr: q.options[i]?.mr || '',
        en: q.options[i]?.en || ''
      }));
    }
    // Handle ranked questions
    else if (q.type === 'rank' && Array.isArray(value) && q.options) {
      resolved[qid] = value.map((i, r) => ({
        rank: r + 1,
        index: i,
        mr: q.options[i]?.mr || '',
        en: q.options[i]?.en || ''
      }));
    }
    // Handle scale questions (numeric values)
    else if (q.type === 'scale' && typeof value === 'number') {
      resolved[qid] = value;
    }
    // Handle text questions
    else if (q.type === 'text' || q.type === 'textarea') {
      resolved[qid] = value;
    }
    // Fallback: keep original value
    else {
      resolved[qid] = value;
    }
  }
  
  return resolved;
}

function buildSurveyInsertPayload({ respondent_role, sector, duration_min, consent_given, respondent_name, respondent_phone, responses }) {
  return {
    respondent_role,
    sector: sector || null,
    duration_min: typeof duration_min === 'number' ? duration_min : null,
    consent_given: consent_given !== false,
    respondent_name: respondent_name && respondent_name.trim() ? respondent_name.trim() : null,
    respondent_phone: respondent_phone && respondent_phone.trim() ? respondent_phone.trim() : null,
    responses,
    submitted_at: new Date().toISOString(),
  };
}

function stripLegacyUnsupportedFields(payload) {
  const sanitized = { ...payload };
  delete sanitized.respondent_name;
  delete sanitized.respondent_phone;
  return sanitized;
}

async function insertSurveyResponse(payload) {
  const primaryResult = await supabase
    .from('survey_responses')
    .insert([payload])
    .select();

  if (!primaryResult.error) {
    return primaryResult;
  }

  const message = primaryResult.error?.message || '';
  if (/column .* does not exist|unknown column/i.test(message)) {
    const fallbackPayload = stripLegacyUnsupportedFields(payload);
    return await supabase
      .from('survey_responses')
      .insert([fallbackPayload])
      .select();
  }

  return primaryResult;
}

// ════════════════════════════
// CORS MIDDLEWARE
// ════════════════════════════
const corsOptions = {
  origin: ['https://xtronmsmesurvey.vercel.app', 'https://xtronmsmesurvey.netlify.app', 'http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 3600
};

app.use(cors(corsOptions));

// ════════════════════════════
// BODY PARSER MIDDLEWARE
// ════════════════════════════
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

// ════════════════════════════
// HEALTH CHECK ENDPOINTS
// ════════════════════════════
app.get('/', (req, res) => {
  res.json({ status: 'Xtron Survey Backend is live', timestamp: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Submit survey response
app.post('/api/survey/submit', async (req, res) => {
  try {
    // Accept both old 'role' field (for backward compatibility) and new 'respondent_role'
    const roleCode = req.body.respondent_role || req.body.role || null;
    const { sector, duration_min, consent_given, responses, respondent_name, respondent_phone } = req.body;

    // Validation: role code must be present and valid
    if (!roleCode || !['O', 'M', 'P'].includes(roleCode)) {
      return res.status(400).json({ 
        error: 'Missing or invalid respondent_role. Must be O, M, or P.',
        received: roleCode
      });
    }

    // Map short codes to full role names for database
    const roleMap = { 'O': 'Owner', 'M': 'Manager', 'P': 'Operator' };
    const respondent_role = roleMap[roleCode];

    // Validation: responses must be a non-empty object
    if (!responses || typeof responses !== 'object' || Object.keys(responses).length === 0) {
      return res.status(400).json({ 
        error: 'Missing or empty responses object (required)'
      });
    }

    // Validation: phone number if provided — must be exactly 10 digits
    if (respondent_phone && respondent_phone.trim() !== '') {
      if (!isValidPhone(respondent_phone)) {
        return res.status(400).json({ 
          error: 'Invalid phone number format. Must be exactly 10 digits.'
        });
      }
    }

    // Resolve responses: convert indices to human-readable labels
    const resolvedResponses = resolveResponses(responses);

    // Prepare data for database
    const surveyData = buildSurveyInsertPayload({
      respondent_role,
      sector,
      duration_min,
      consent_given,
      respondent_name,
      respondent_phone,
      responses: resolvedResponses,
    });

    // Insert into Supabase using service role key
    const { data, error } = await insertSurveyResponse(surveyData);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ 
        error: 'Failed to save survey response',
        details: error.message 
      });
    }

    // Return 201 Created with success response
    res.status(201).json({
      success: true,
      message: 'Survey response saved successfully',
      id: data && data.length > 0 ? data[0].id : null
    });

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      details: err.message 
    });
  }
});

// Get survey statistics (optional - for dashboard)
app.get('/api/survey/stats', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('survey_responses')
      .select('respondent_role, id', { count: 'exact' });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const stats = {
      total_responses: data.length,
      by_role: {}
    };

    data.forEach(row => {
      if (row.respondent_role) {
        stats.by_role[row.respondent_role] = (stats.by_role[row.respondent_role] || 0) + 1;
      }
    });

    res.json(stats);
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: err.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong',
    message: err.message 
  });
});

// ════════════════════════════
// START SERVER
// ════════════════════════════
app.listen(PORT, () => {
  console.log(`✓ Survey Backend Server running on port ${PORT}`);
  console.log(`✓ Supabase connected: ${supabaseUrl}`);
  console.log(`✓ API endpoint: /api/survey/submit`);
  console.log(`✓ Health check: / or /api/health`);
  console.log(`✓ CORS enabled for: https://xtronmsmesurvey.vercel.app, https://xtronmsmesurvey.netlify.app`);
});

module.exports = {
  buildSurveyInsertPayload,
  stripLegacyUnsupportedFields,
  resolveResponses,
  isValidPhone,
};
