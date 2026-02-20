import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, Globe } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const subjects = [
  { name: "Physics", category: "Science", emoji: "⚡", concepts: 42 },
  { name: "Chemistry", category: "Science", emoji: "🧪", concepts: 38 },
  { name: "Biology", category: "Science", emoji: "🧬", concepts: 45 },
  { name: "Mathematics (Core)", category: "Mathematics", emoji: "📐", concepts: 50 },
  { name: "Mathematics (M1)", category: "Mathematics", emoji: "📊", concepts: 30 },
  { name: "Mathematics (M2)", category: "Mathematics", emoji: "∑", concepts: 35 },
  { name: "Economics", category: "Humanities", emoji: "💰", concepts: 28 },
  { name: "BAFS", category: "Humanities", emoji: "💼", concepts: 32 },
  { name: "Geography", category: "Humanities", emoji: "🌍", concepts: 26 },
  { name: "History", category: "Humanities", emoji: "📜", concepts: 24 },
  { name: "ICT", category: "Technology", emoji: "💻", concepts: 36 },
  { name: "English Language", category: "Core", emoji: "🇬🇧", concepts: 20 },
];

const languages = ["English", "اردو", "हिन्दी", "नेपाली", "Tagalog"];

const Studies = () => {
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState("English");

  const filtered = subjects.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-24">
      <PageHeader title="Syllabus Hub" subtitle="Key concepts in your language" />

      <div className="px-4 max-w-lg mx-auto">
        {/* Language selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedLang === lang
                  ? "gradient-secondary text-secondary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Globe className="w-3 h-3" />
              {lang}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search subjects..."
            className="w-full bg-card rounded-xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Subject grid */}
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((subject, i) => (
            <motion.button
              key={subject.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all hover:-translate-y-0.5 text-left"
            >
              <span className="text-2xl mb-2 block">{subject.emoji}</span>
              <h3 className="font-heading font-semibold text-sm text-foreground mb-0.5">{subject.name}</h3>
              <p className="text-xs text-muted-foreground">{subject.concepts} key concepts</p>
              <div className="mt-2 flex items-center gap-1 text-primary">
                <BookOpen className="w-3 h-3" />
                <span className="text-[10px] font-medium">Start learning</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studies;
