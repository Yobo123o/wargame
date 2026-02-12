import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

/**
 * Server-only Supabase client.
 * NEVER import this from a client component.
 */
export function createSupabaseServerClient() {
    return createClient(url, serviceRoleKey, {
        auth: { persistSession: false },
    });
}