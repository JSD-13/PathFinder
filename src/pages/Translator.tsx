import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Languages, ArrowRight, Upload, Globe } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const commandTerms = [
  { term: "Discuss", simple: "Talk about different ideas, give reasons for and against", urdu: "بحث کریں" },
  { term: "Analyse", simple: "Break it down into parts and explain each one", urdu: "تجزیہ کریں" },
  { term: "Evaluate", simple: "Say if something is good or bad, and why", urdu: "جائزہ لیں" },
  { term: "Explain", simple: "Make it clear, say how and why", urdu: "وضاحت کریں" },
  { term: "Describe", simple: "Say what it looks like or what happens", urdu: "بیان کریں" },
  { term: "Compare", simple: "Say how things are the same and different", urdu: "موازنہ کریں" },
  { term: "Justify", simple: "Give strong reasons to support your answer", urdu: "جواز دیں" },
  { term: "Outline", simple: "Give the main points, not too much detail", urdu: "خلاصہ" },
];

const Translator = () => {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-24">
      <PageHeader title="Past Paper Translator" subtitle="Understand exam questions clearly" />

      <div className="px-4 max-w-lg mx-auto">
        {/* Upload section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl shadow-card p-5 mb-5 text-center"
        >
          <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-3">
            <Upload className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-heading font-semibold text-foreground mb-1">Upload a past paper question</h3>
          <p className="text-xs text-muted-foreground mb-3">Take a photo or upload an image of the question</p>
          <button className="gradient-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-xl shadow-soft hover:shadow-elevated transition-all">
            <Upload className="w-4 h-4 inline mr-1.5" />
            Upload image
          </button>
          <p className="text-[10px] text-muted-foreground mt-2">Coming soon with AI — will connect to backend</p>
        </motion.div>

        {/* Command terms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Languages className="w-4 h-4 text-secondary" />
            <h2 className="font-heading font-bold text-sm text-foreground">Command Terms Dictionary</h2>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Tap any term to see what the exam really wants you to do:
          </p>

          <div className="space-y-2">
            {commandTerms.map((item, i) => (
              <motion.button
                key={item.term}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                onClick={() => setSelectedTerm(selectedTerm === item.term ? null : item.term)}
                className="w-full bg-card rounded-xl p-3 shadow-card hover:shadow-elevated transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="gradient-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-md">
                      {item.term}
                    </span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-foreground">{item.simple}</span>
                  </div>
                </div>

                {selectedTerm === item.term && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 pt-2 border-t border-border"
                  >
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3 h-3 text-primary" />
                      <span className="text-xs text-muted-foreground">Urdu:</span>
                      <span className="text-sm font-medium text-foreground" dir="rtl">{item.urdu}</span>
                    </div>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Translator;
