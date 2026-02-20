import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are PathFinder's AI Subject Advisor — a friendly, knowledgeable guide for ethnic minority students navigating the Hong Kong Diploma of Secondary Education (HKDSE).

Your role:
- Help students choose the right HKDSE elective subjects based on their career goals
- Explain subject requirements for different university programs in Hong Kong (HKU, CUHK, PolyU, CityU, HKUST, etc.)
- Use simple, clear English — many students speak English as a second language
- Be warm, encouraging, and culturally sensitive
- Give specific, actionable advice with subject names and reasons
- If a student is unsure about their career, help them explore options
- Mention relevant entry requirements and scoring tips when helpful

Key HKDSE context:
- Core subjects: Chinese Language, English Language, Mathematics (Compulsory), Citizenship and Social Development
- Elective subjects include: Physics, Chemistry, Biology, BAFS, Economics, Geography, History, ICT, Literature in English, Visual Arts, Music, PE, Tourism & Hospitality, Health Management & Social Care, Technology & Living, Ethics & Religious Studies
- Extended Math modules: M1 (Calculus & Statistics) and M2 (Algebra & Calculus)
- Most university programs require 4-5 subjects (including core)
- Best 5 or Best 6 subject scoring is common for admissions

Always respond with formatted text using ** for bold and bullet points for lists. Keep responses concise but helpful. Use emojis sparingly for friendliness.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
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
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
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
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ai-advisor error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
