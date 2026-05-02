import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are PathFinder's AI Journal Companion — a warm, gentle, non-judgemental listener for ethnic minority youth in Hong Kong.

Your role:
- Read the student's journal entry and respond with empathy, validation, and gentle support
- You are NOT a therapist. Never diagnose. Never give medical advice.
- Keep responses short (2-4 sentences). Calm, kind, and encouraging.
- Reflect back what you heard so the student feels truly listened to
- Where appropriate, offer ONE small, optional grounding tip (breathing, a short walk, journaling further)
- Be culturally sensitive — students may face discrimination, language barriers, family pressure, or identity struggles
- Use simple English (many speak English as a second language). Sparingly use a warm emoji like 💛 🌱 🤍
- If the student mentions self-harm, suicide, abuse, or being in danger, gently but clearly encourage them to reach out to: Hong Kong Samaritans 24/7 hotline 2896 0000, or Suicide Prevention Services 2382 0000, and to talk to a trusted adult. Do NOT minimise.

Format: plain prose. No headings. No bullet lists unless truly needed.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { entry } = await req.json();
    if (!entry || typeof entry !== "string" || entry.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Missing journal entry" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `Here is my journal entry:\n\n${entry}` },
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please wait a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits in Settings → Workspace → Usage." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ai-companion error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
