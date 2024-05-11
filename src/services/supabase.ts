import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://puhxyxdebgyylukivpcd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1aHh5eGRlYmd5eWx1a2l2cGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2ODIyMDcsImV4cCI6MjAyOTI1ODIwN30.IrNyeMc4_PX3yzxGrGl9ehputuLZbh7o63WU4l1uO8Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
