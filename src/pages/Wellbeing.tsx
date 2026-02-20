import { motion } from "framer-motion";
import { Heart, Star, MapPin, Clock, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const therapists = [
  {
    name: "Dr. Priya Mehta",
    specialty: "Youth Anxiety & Cultural Adjustment",
    languages: ["English", "Hindi", "Urdu"],
    rating: 4.9,
    location: "Kowloon",
    available: true,
  },
  {
    name: "Dr. Samuel Limbu",
    specialty: "Academic Stress & Family Dynamics",
    languages: ["English", "Nepali"],
    rating: 4.8,
    location: "Wan Chai",
    available: true,
  },
  {
    name: "Ms. Maria Santos",
    specialty: "Social Isolation & Self-esteem",
    languages: ["English", "Tagalog"],
    rating: 4.7,
    location: "Online",
    available: false,
  },
  {
    name: "Dr. Amir Khan",
    specialty: "Cross-cultural Identity",
    languages: ["English", "Urdu", "Punjabi"],
    rating: 4.9,
    location: "Central",
    available: true,
  },
];

const Wellbeing = () => {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader title="Therapist Connect" subtitle="Find your right-fit professional" />

      <div className="px-4 max-w-lg mx-auto">
        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-hero rounded-2xl p-4 mb-5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm text-foreground mb-1">
                Book a free 30-min intro call
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Try a low-commitment session with any therapist before committing. All professionals here understand ethnic minority experiences in HK.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Therapist list */}
        <div className="space-y-3">
          {therapists.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-heading font-semibold text-sm text-foreground">{t.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.specialty}</p>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                  <span className="font-semibold text-foreground">{t.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {t.languages.map((lang) => (
                  <span key={lang} className="bg-warm text-warm-foreground text-[10px] font-medium px-2 py-0.5 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {t.available ? "Available" : "Next week"}
                  </span>
                </div>
                <button className={`flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  t.available
                    ? "gradient-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  Book <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;
