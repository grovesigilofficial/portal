console.log("GroveSigilOfficial active.");

const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.__env;
const supabase = SUPABASE_URL && SUPABASE_ANON_KEY
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const btn = document.getElementById("testBtn");
const result = document.getElementById("result");

btn.addEventListener("click", async () => {
  if (!supabase) {
    result.textContent = "Supabase not connected — check env.js";
    return;
  }
  try {
    // Example query — replace "test_table" with a real table in your DB
    const { data, error } = await supabase.from("test_table").select("*").limit(1);
    if (error) throw error;
    result.textContent = "✅ Connection successful. Check console for data.";
    console.log(data);
  } catch (err) {
    result.textContent = "❌ Connection failed — " + err.message;
    console.error(err);
  }
});
