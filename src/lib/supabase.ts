const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(url && anonKey);

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function saveContactMessage(payload: ContactMessage): Promise<void> {
  if (!isSupabaseConfigured) {
    throw new Error("Contact form is not connected to a database yet.");
  }
  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(url as string, anonKey as string);
  const { error } = await supabase.from("contact_messages").insert([payload]);
  if (error) throw error;
}
