import { createClient } from '@supabase/supabase-js';

export function initializeSupabaseClient() {
    const supabaseClient = createClient(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
    `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
    );
    return supabaseClient;
}