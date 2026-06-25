-- Create survey_responses table in Supabase
-- Copy and paste this in Supabase SQL Editor and run it

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

ALTER TABLE survey_responses
  ADD COLUMN IF NOT EXISTS respondent_name TEXT,
  ADD COLUMN IF NOT EXISTS respondent_phone TEXT;

-- Create indexes for faster queries
CREATE INDEX idx_survey_submitted_at ON survey_responses(submitted_at DESC);
CREATE INDEX idx_survey_respondent_role ON survey_responses(respondent_role);
CREATE INDEX idx_survey_sector ON survey_responses(sector);

-- Enable RLS (Row Level Security)
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Allow anonymous INSERT only (for anonymous users)
CREATE POLICY "Allow anonymous INSERT" ON survey_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- RLS Policy: Deny anonymous SELECT, UPDATE, DELETE
-- (These are implicitly denied when RLS is enabled and no policy allows them)

-- RLS Policy: Allow service role to SELECT for statistics and admin access
CREATE POLICY "Allow service role full access" ON survey_responses
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');
