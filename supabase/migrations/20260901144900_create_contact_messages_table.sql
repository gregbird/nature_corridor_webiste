/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, sender's name)
  - `email` (text, sender's email for replies)
  - `role` (text, self-described role: ecologist, project, funder, landowner, other)
  - `message` (text, the message body)
  - `honeypot` (text, hidden anti-spam field — any non-empty value marks spam)
  - `sent` (boolean, whether the notification email was successfully delivered)
  - `created_at` (timestamptz, when the message was submitted)

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated INSERT only (public contact form, no login required).
- No SELECT/UPDATE/DELETE for anon or authenticated — messages are private to operators.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  role text NOT NULL,
  message text NOT NULL,
  honeypot text DEFAULT '',
  sent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
