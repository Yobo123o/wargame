import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Load env from apps/worker/.env.local (relative to this file)
dotenv.config({ path: new URL("../.env.local", import.meta.url) });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.log("Loaded env?", {
        SUPABASE_URL: !!SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY: !!SUPABASE_SERVICE_ROLE_KEY,
    });
    throw new Error(
        "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in apps/worker/.env.local"
    );
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
});

async function main() {
    console.log("worker online:", new Date().toISOString());

    // This will error until you actually create a "healthcheck" table — that's OK.
    const { data, error } = await supabase
        .from("healthcheck")
        .select("*")
        .limit(1);

    console.log("healthcheck:", { data, error });
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});