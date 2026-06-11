const SUPABASE_URL = "https://jtnqsbgrdbonxhlkaikn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bnFzYmdyZGJvbnhobGthaWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjIyODQsImV4cCI6MjA5NDczODI4NH0.DNP0OmIN0p0uPlxnDUwx3wfuGyePjgtARkS214tr6Eo";

export const supabaseUrl = SUPABASE_URL;

export async function fetchGallery() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/Gallery?select=*&order=created_at.desc`,
    {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Gallery ma'lumotlarini yuklab bo'lmadi");
  return res.json();
}
