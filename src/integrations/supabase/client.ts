// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://upjwhysuqimjpdanplcv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwandoeXN1cWltanBkYW5wbGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzkzMDksImV4cCI6MjA2MDIxNTMwOX0.nBALkC0wWUKHK2o-cvh524nupdX0Rw6m6hTSst3zdqQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);