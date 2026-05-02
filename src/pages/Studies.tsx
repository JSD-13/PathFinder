import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Search, Globe } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { SUBJECTS, LANGUAGES, type LangCode } from "@/data/syllabus";

// Extra subjects without detail pages yet — shown as "coming soon".
const extraSubjects = [
  { slug: "mathematics-m1", name: "Mathematics (M1)", category: "Mathematics", emoji: "📊", concepts: 30 },
  { slug: "mathematics-m2", name: "Mathematics (M2)", category: "Mathematics", emoji: "∑", concepts: 35 },
  { slug: "bafs", name: "BAFS", category: "Humanities", emoji: "💼", concepts: 32 },
  { slug: "geography", name: "Geography", category: "Humanities", emoji: "🌍", concepts: 26 },
  { slug: "history", name: "History", category: "Humanities", emoji: "📜", concepts: 24 },
  { slug: "english", name: "English Language", category: "Core", emoji: "🇬🇧", concepts: 20 },
];

const Studies = () => {
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState<LangCode>("en");

  const available = SUBJECTS.map((s) => ({
    slug: s.slug,
    name: s.name,
    category: s.category,
    emoji: s.emoji,
    concepts: s.concepts.length,
    available: true,
  }));
  const all = [
    ...available,
    ...extraSubjects.map((s) => ({ ...s, available: false })),
  ];
  const filtered = all.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen pb-24">
      <PageHeader title="Syllabus Hub" subtitle="Key concepts in your language" />

      <div className="px-4 max-w-lg mx-auto">
        {/* Language selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang.code)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedLang === lang.code
                  ? "gradient-secondary text-secondary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Globe className="w-3 h-3" />
              {lang.label}
            </button>
          ))}
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search subjects..."
            className="w-full bg-card rounded-xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {filtered.map((subject, i) => {
            const inner = (
              <>
                <span className="text-2xl mb-2 block">{subject.emoji}</span>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-0.5">{subject.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {subject.available ? `${subject.concepts} key concepts` : "Coming soon"}
                </p>
                <div className={`mt-2 flex items-center gap-1 ${subject.available ? "text-primary" : "text-muted-foreground"}`}>
                  <BookOpen className="w-3 h-3" />
                  <span className="text-[10px] font-medium">{subject.available ? "Start learning" : "In development"}</span>
                </div>
              </>
            );
            const className = `bg-card rounded-2xl p-4 shadow-card transition-all text-left ${
              subject.available ? "hover:shadow-elevated hover:-translate-y-0.5" : "opacity-60"
            }`;
            return (
              <motion.div
                key={subject.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {subject.available ? (
                  <Link to={`/studies/${subject.slug}`} className={`${className} block`}>{inner}</Link>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Studies;
