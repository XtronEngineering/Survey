# Xtron MSME Deep-Discovery Survey v6.0

A comprehensive, bilingual (Marathi + English) digital survey platform for MSME manufacturers. Built with Node.js/Express backend, Supabase database, and responsive HTML5 frontend.

## 📋 Overview

**Xtron MSME Deep-Discovery Survey** is a feature discovery tool designed to understand manufacturing SME needs across:
- 9 survey sections
- 75 questions covering firmographics, customer behavior, feature priorities, modules, and AI insights
- 3 respondent roles: Owner, Manager, Operator
- Role-specific question visibility
- Multi-language support (Marathi & English)
- Offline capability with localStorage persistence
- Real-time data collection to Supabase

## 🚀 Features

✅ **Bilingual Interface** — Marathi + English toggle  
✅ **Role-Based Surveys** — Different questions for O/M/P roles  
✅ **Forced Ranking** — Module prioritization without "all important"  
✅ **Deep-Dive Modules** — 6 module explorations with AI, integration, WTP questions  
✅ **Offline Support** — Survey progress saved to localStorage  
✅ **Auto-Submit** — Responses automatically POST to Supabase on completion  
✅ **Data Resolution** — Numeric answers converted to human-readable labels  
✅ **Progress Tracking** — Real-time progress bar and question counter  
✅ **Export Options** — Download responses as JSON or CSV  
✅ **Phone Validation** — 10-digit phone number validation  

## 📁 Project Structure

```
Survey/
├── backend/
│   ├── server.js                 # Express app, routes, Supabase client
│   ├── questionsData.js          # 75 questions + 9 sections data
│   ├── supabase-setup.sql        # Database schema & RLS policies
│   ├── package.json              # Node dependencies
│   ├── .env                       # Environment variables (not in repo)
│   └── START-SERVER.bat          # Windows batch to start server
│
├── frontend/
│   └── Xtron_MSME_Survey_v6_Digital_Form Final 5.html
│                                  # Single-page HTML survey
│
├── .gitignore                     # Git ignore rules
└── README.md                      # This file
```

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js v5
- **Database:** Supabase (PostgreSQL + JSONB)
- **Auth:** Service Role Key (backend), Anonymous Key (frontend)
- **Frontend:** Vanilla HTML5, CSS3, JavaScript ES5
- **Data Client:** @supabase/supabase-js v2

## 📦 Installation

### Prerequisites
- Node.js 14+
- Supabase project (free tier OK)
- Git

### 1. Clone Repository
```bash
git clone https://github.com/XtronEngineering/Survey.git
cd Survey
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Environment Configuration

Create `.env` file in `backend/` folder:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
PORT=3000
```

**Get credentials from Supabase:**
1. Go to Project Settings → API
2. Copy "Project URL" → `SUPABASE_URL`
3. Copy "Service Role Secret Key" → `SUPABASE_SERVICE_ROLE_KEY`

### 4. Database Setup

Run SQL migration in Supabase SQL Editor:

```sql
-- Create survey_responses table
CREATE TABLE IF NOT EXISTS survey_responses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  respondent_role TEXT NOT NULL,
  sector TEXT,
  duration_min INTEGER,
  consent_given BOOLEAN DEFAULT true,
  respondent_name TEXT,
  respondent_phone TEXT,
  responses JSONB NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_survey_submitted_at ON survey_responses(submitted_at DESC);
CREATE INDEX idx_survey_respondent_role ON survey_responses(respondent_role);
CREATE INDEX idx_survey_sector ON survey_responses(sector);

-- Enable RLS
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Anonymous INSERT only
CREATE POLICY "Allow anonymous INSERT" ON survey_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- RLS Policy: Service role full access
CREATE POLICY "Allow service role full access" ON survey_responses
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');
```

### 5. Start Backend

```bash
npm start
# Server runs on http://localhost:3000
```

### 6. Open Frontend

Open `frontend/Xtron_MSME_Survey_v6_Digital_Form Final 5.html` in a browser.

## 📡 API Endpoints

### POST `/api/survey/submit`

Submit completed survey response.

**Request Body:**
```json
{
  "role": "O",
  "respondent_role": "O",
  "sector": "Electronics / Foundry",
  "duration_min": 15,
  "consent_given": true,
  "respondent_name": "John Doe",
  "respondent_phone": "9876543210",
  "responses": {
    "A1": 2,
    "B1": [0, 1, 3],
    "C1": [2, 3, 5]
  }
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Survey response saved successfully",
  "id": "uuid-here"
}
```

**Validation Rules:**
- `role` or `respondent_role` required (values: O, M, P)
- `responses` required (non-empty object)
- `respondent_phone` optional; if provided, must be exactly 10 digits
- `respondent_name` optional; empty strings converted to null

### GET `/api/survey/stats`

Get survey statistics by role (requires admin authentication).

**Response:**
```json
{
  "total_responses": 42,
  "by_role": {
    "Owner": 15,
    "Manager": 18,
    "Operator": 9
  }
}
```

### GET `/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## 🗄️ Database Schema

### survey_responses Table

| Column | Type | Nullable | Default | Notes |
|--------|------|----------|---------|-------|
| id | UUID | NO | uuid_generate_v4() | Primary key |
| respondent_role | TEXT | NO | — | Owner, Manager, or Operator |
| sector | TEXT | YES | NULL | Manufacturing sector |
| duration_min | INTEGER | YES | NULL | Survey duration in minutes |
| consent_given | BOOLEAN | YES | true | Consent flag |
| respondent_name | TEXT | YES | NULL | Full name of respondent |
| respondent_phone | TEXT | YES | NULL | 10-digit phone number |
| responses | JSONB | NO | — | Full survey responses with labels |
| submitted_at | TIMESTAMPTZ | YES | NOW() | Submission timestamp |
| created_at | TIMESTAMPTZ | YES | NOW() | Record creation timestamp |

## 🎯 Survey Structure

### Sections (9 total)

| Code | Title | Questions | Notes |
|------|-------|-----------|-------|
| A | Firmographics & Setup | 6 | Who you are |
| B | Customer Behaviour | 8 | How you work today |
| C | Core Features | 14 | Dashboard, integration, offline, voice, etc. |
| D | Module Priority | 1 | Forced ranking of 6 modules |
| M | Module Deep-Dives | 26 | 6 modules × features/AI/integration/WTP |
| E | AI Business Manager | 8 | Heart of the product |
| F | CRM & Collaboration | 5 | Team tools |
| G | Security & Compliance | 2 | Data protection |
| H | Feedback & Next Steps | 1 | Final thoughts |

**Total: 75 questions**

## 🔐 Security

- **Row Level Security (RLS):** Anonymous users can only INSERT
- **Service Role Key:** Backend uses service role for all operations (bypasses RLS for server writes)
- **Environment Variables:** Credentials in `.env` (not committed)
- **Phone Validation:** Validates 10-digit format
- **Input Sanitization:** All user inputs validated/sanitized before insert

## 🚀 Development

### Backend Development

```bash
cd backend

# Install dependencies
npm install

# Start with auto-reload (requires nodemon)
npm install -D nodemon
npx nodemon server.js

# Or start normally
npm start
```

### Frontend Development

Edit `frontend/Xtron_MSME_Survey_v6_Digital_Form Final 5.html` directly. Open in browser and use localStorage for local testing.

### Adding New Questions

Edit `backend/questionsData.js`:
1. Add question object to `QUESTIONS_DATA.questions` array
2. Follow existing structure (id, type, options, section, decisive, etc.)
3. Run `npm start` to load new data

### Response Data Format

Responses are automatically resolved to human-readable format:

**Before (raw):**
```json
{
  "A1": 3,
  "B1": [0, 1, 3]
}
```

**After (stored in Supabase):**
```json
{
  "A1": { "index": 3, "en": "Electronics / Foundry", "mr": "इलेक्ट्रॉनिक्स / फाउंड्री" },
  "B1": [
    { "index": 0, "en": "Daily", "mr": "दैनिक" },
    { "index": 1, "en": "Weekly", "mr": "साप्ताहिक" },
    { "index": 3, "en": "Monthly", "mr": "मासिक" }
  ]
}
```

## 🧪 Testing

### Test Data Submission

Use curl or Postman:

```bash
curl -X POST http://localhost:3000/api/survey/submit \
  -H "Content-Type: application/json" \
  -d '{
    "role": "O",
    "responses": {"A1": 1, "A2": 2},
    "respondent_name": "Test User",
    "respondent_phone": "9876543210"
  }'
```

### Expected Response
```json
{
  "success": true,
  "message": "Survey response saved successfully",
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

## 📊 Viewing Data

In Supabase Dashboard:
1. Go to SQL Editor
2. Run: `SELECT * FROM survey_responses ORDER BY submitted_at DESC;`
3. View responses with resolved labels

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Find process using port
netstat -ano | findstr :3000

# Kill process (Windows)
taskkill /PID <PID> /F
```

### Supabase Connection Error
- Verify `.env` has correct URL and key
- Check Supabase project is active
- Verify RLS policies are in place

### Survey Not Submitting
- Check browser console (F12) for errors
- Verify backend is running
- Check network tab to see request/response

### Phone Validation Failing
- Must be exactly 10 digits
- Only numeric (no spaces, dashes allowed but removed for validation)

## 📝 License

Proprietary — Xtron Engineering

## 👥 Contributing

Internal development. Reach out to Xtron Engineering for collaboration.

## 📞 Support

For issues or questions, contact the development team.

---

**Last Updated:** June 2024  
**Version:** v6.0 (Feature Insight Edition)
