import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickPrompts = [
  "I want to be an engineer",
  "I want to be a nurse",
  "I want to study business",
  "What are the easiest electives?",
];

const Advisor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm your AI Subject Advisor. Tell me about your dream career, and I'll help you pick the right HKDSE subjects. What do you want to be?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const msg = text || input;
    if (!msg.trim()) return;

    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Simulated response for now — will connect to AI backend
    setTimeout(() => {
      const response = getSimulatedResponse(msg);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-screen">
      <PageHeader title="AI Subject Advisor" subtitle="Get personalized HKDSE guidance" />

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "gradient-primary text-primary-foreground rounded-br-md"
                    : "bg-card shadow-card text-card-foreground rounded-bl-md"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-card shadow-card rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </motion.div>
        )}

        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="bg-warm text-warm-foreground text-xs font-medium px-3 py-2 rounded-xl hover:shadow-soft transition-all"
              >
                <Sparkles className="w-3 h-3 inline mr-1" />
                {prompt}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card/90 backdrop-blur-lg px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+4.5rem)]">
        <div className="flex gap-2 max-w-lg mx-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your career goal..."
            className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center disabled:opacity-50 transition-opacity"
          >
            <Send className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

function getSimulatedResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("engineer")) {
    return "Great choice! 🛠️ For engineering, you'll want:\n\n• **Physics** (essential)\n• **Mathematics Extended (M2)** (highly recommended)\n• **Chemistry** (useful for chemical/materials eng.)\n• **ICT** (for computer/software eng.)\n\nMost HK universities require Physics + M1/M2 for engineering programs. Shall I explain any of these subjects in more detail?";
  }
  if (lower.includes("nurse") || lower.includes("nursing")) {
    return "Wonderful! 🏥 For nursing, consider:\n\n• **Biology** (essential)\n• **Chemistry** (recommended)\n• **Health Management & Social Care** (helpful)\n• **Mathematics** (standard level is fine)\n\nHKU and PolyU both offer nursing programs. Would you like to know the entry requirements?";
  }
  if (lower.includes("business")) {
    return "Smart thinking! 💼 For business studies:\n\n• **BAFS (Business, Accounting & Financial Studies)**\n• **Economics**\n• **Mathematics Extended (M1)** (for finance)\n• **ICT** (for digital business)\n\nWould you like to know about specific universities?";
  }
  return "That's an interesting goal! Could you tell me more specifically what career you're interested in? For example: doctor, engineer, designer, teacher, social worker, etc. The more specific, the better I can help! 🎯";
}

export default Advisor;
