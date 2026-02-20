import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenLine, Sparkles, Calendar, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const prompts = [
  "What made you smile today? 😊",
  "What's one thing you're grateful for?",
  "What's been on your mind lately?",
  "Describe a small win you had today.",
];

interface JournalEntry {
  id: number;
  text: string;
  date: string;
  aiResponse?: string;
}

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);
  const [aiThinking, setAiThinking] = useState(false);

  const handleSubmit = () => {
    if (!currentText.trim()) return;
    const entry: JournalEntry = {
      id: Date.now(),
      text: currentText,
      date: new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
    };
    setEntries((prev) => [entry, ...prev]);
    setCurrentText("");
    setShowPrompt(false);

    // Simulate AI response
    setAiThinking(true);
    setTimeout(() => {
      setEntries((prev) =>
        prev.map((e) =>
          e.id === entry.id
            ? {
                ...e,
                aiResponse: "Thank you for sharing that. 💛 Remember, it's okay to feel this way. Would you like to try a quick breathing exercise? Inhale for 4 counts, hold for 4, exhale for 4.",
              }
            : e
        )
      );
      setAiThinking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pb-24">
      <PageHeader title="Mindful Journal" subtitle="Your private space to reflect" />

      <div className="px-4 max-w-lg mx-auto">
        {/* Writing area */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl shadow-card p-4 mb-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <PenLine className="w-4 h-4 text-primary" />
            <span className="font-heading font-semibold text-sm text-foreground">Today's entry</span>
          </div>

          {showPrompt && (
            <div className="mb-3 space-y-2">
              <p className="text-xs text-muted-foreground">Need a prompt? Try one:</p>
              <div className="flex flex-wrap gap-1.5">
                {prompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentText(p + " ")}
                    className="bg-warm text-warm-foreground text-[10px] font-medium px-2.5 py-1.5 rounded-lg hover:shadow-soft transition-all"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          <textarea
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            placeholder="Write your thoughts here..."
            rows={4}
            className="w-full bg-muted rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
          />

          <div className="flex justify-between items-center mt-3">
            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI companion will respond gently
            </span>
            <button
              onClick={handleSubmit}
              disabled={!currentText.trim()}
              className="gradient-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-xl disabled:opacity-50 transition-opacity"
            >
              Save entry
            </button>
          </div>
        </motion.div>

        {/* AI thinking indicator */}
        {aiThinking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 mb-4 px-2"
          >
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-xs text-muted-foreground">AI companion is reading...</span>
          </motion.div>
        )}

        {/* Past entries */}
        <AnimatePresence>
          {entries.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl shadow-card p-4 mb-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{entry.date}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-2">{entry.text}</p>
              {entry.aiResponse && (
                <div className="bg-warm rounded-xl p-3 mt-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3 h-3 text-secondary" />
                    <span className="text-[10px] font-semibold text-warm-foreground">AI Companion</span>
                  </div>
                  <p className="text-xs text-warm-foreground leading-relaxed">{entry.aiResponse}</p>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {entries.length === 0 && !aiThinking && (
          <div className="text-center py-8">
            <p className="text-sm text-muted-foreground">Your journal entries will appear here.</p>
            <p className="text-xs text-muted-foreground mt-1">Everything is private and just for you. 🔒</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;
