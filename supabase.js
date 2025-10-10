import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// 🔥 Daddy, insert your Supabase project keys here
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
