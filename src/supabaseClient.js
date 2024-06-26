import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) console.error('VITE_SUPABASE_URL is not defined')
if (!supabaseAnonKey) console.error('VITE_SUPABASE_ANON_KEY is not defined')

export const supabase = createClient(supabaseUrl, supabaseAnonKey)