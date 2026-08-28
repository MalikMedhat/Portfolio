-- Supabase schema for the portfolio contact form.
-- Run this in the Supabase SQL editor, then set VITE_SUPABASE_URL and
-- VITE_SUPABASE_ANON_KEY in a local .env file.

create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Allow anyone to insert a message (anonymous submissions).
alter table public.contact_messages enable row level security;

create policy "Allow anonymous inserts"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Only authenticated owners can read.
create policy "Allow owners to read"
  on public.contact_messages
  for select
  to authenticated
  using (true);
