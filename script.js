// ==============================
// GroveSigilOfficial Portal Script
// ==============================
console.log("GroveSigilOfficial active.");

// Initialize Supabase securely using environment variables
const supabaseUrl = window.__env?.SUPABASE_URL;
const supabaseAnonKey = window.__env?.SUPABASE_ANON_KEY;

// Create Supabase client (this assumes the Supabase library is loaded)
const supabase = supabaseUrl && supabaseAnonKey
  ? supabase.createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Example test: check if connected
if (supabase) {
  console.log("✅ Supabase connected:", supabaseUrl);
} else {
  console.error("❌ Supabase not connected — check environment variables.");
}
