import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Globe, ChevronDown } from "lucide-react";
import { getSubject, LANGUAGES, type LangCode } from "@/data/syllabus";

const Subject = () => {
  const { slug } = useParams<{ slug: string }>();
  const subject = slug ? getSubject(slug) : undefined;
  const [lang, setLang] = useState<LangCode>("en");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!subject) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-24">
        <p className="text-foreground font-heading font-semibold mb-2">Subject not found</p>
        <Link to="/studies" className="text-primary text-sm">← Back to Syllabus Hub</Link>
      </div>
    );
  }

  const isRTL = lang === "ur";

  return (
    <div className="min-h-screen pb-24" dir={isRTL ? "rtl" : "ltr"}>
      <div className="gradient-primary px-4 pt-8 pb-6 rounded-b-3xl shadow-elevated">
        <Link to="/studies" className="inline-flex items-center gap-1 text-primary-foreground/90 text-xs font-medium mb-3">
          <ArrowLeft className="w-3.5 h-3.5" /> Syllabus Hub
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{subject.emoji}</span>
          <div>
            <h1 className="font-heading font-bold text-xl text-primary-foreground leading-tight">{subject.name}</h1>
            <p className="text-[11px] text-primary-foreground/80 uppercase tracking-wide">{subject.category}</p>
          </div>
        </div>
        <p className="text-xs text-primary-foreground/90 leading-relaxed mt-2">{subject.description[lang]}</p>
      </div>

      <div className="px-4 max-w-lg mx-auto mt-4">
        {/* Language selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide" dir="ltr">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                lang === l.code
                  ? "gradient-secondary text-secondary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Globe className="w-3 h-3" />
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 mb-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-heading font-semibold text-sm text-foreground">Key concepts</h2>
        </div>

        <div className="space-y-3">
          {subject.concepts.map((c, i) => {
            const open = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full text-start px-4 py-3 flex items-center justify-between gap-3"
                >
                  <span className="font-heading font-semibold text-sm text-foreground">{c.title[lang]}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-4 pb-4"
                  >
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.summary[lang]}</p>
                    <ul className="space-y-1.5">
                      {c.keyPoints[lang].map((point, pi) => (
                        <li key={pi} className="flex gap-2 text-xs text-foreground leading-relaxed">
                          <span className="text-primary font-bold shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {subject.concepts.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-6">More content coming soon.</p>
        )}
      </div>
    </div>
  );
};

export default Subject;
