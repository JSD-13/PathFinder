import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Heart, Users, FileText, PenLine } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <section className="gradient-hero px-4 pt-[env(safe-area-inset-top)] pb-6">
        <div className="pt-6 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">PF</span>
            </div>
            <span className="font-heading font-bold text-foreground">PathFinder</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-2xl leading-tight text-foreground mb-2"
          >
            Navigate your future,{" "}
            <span className="text-primary">your way.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground leading-relaxed mb-4"
          >
            Your personal guide to HKDSE success and wellbeing — in your language.
          </motion.p>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            src={heroImage}
            alt="PathFinder compass illustration representing academic and personal growth"
            className="w-full max-w-xs mx-auto rounded-2xl animate-float"
          />
        </div>
      </section>

      {/* Academic Pillar */}
      <section className="px-4 mt-6 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mb-3"
        >
          <div className="w-6 h-6 rounded-md gradient-primary flex items-center justify-center">
            <BookOpen className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <h2 className="font-heading font-bold text-base text-foreground">My Studies</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3">
          <FeatureCard
            icon={MessageCircle}
            title="AI Subject Advisor"
            description="Tell us your dream career and get personalized HKDSE subject recommendations."
            to="/advisor"
            gradient="primary"
            delay={0.5}
          />
          <FeatureCard
            icon={BookOpen}
            title="Syllabus Hub"
            description="Key concepts explained in simple English and your community language."
            to="/studies"
            gradient="primary"
            delay={0.6}
          />
          <FeatureCard
            icon={FileText}
            title="Past Paper Translator"
            description="Translate exam questions and command terms instantly."
            to="/translator"
            gradient="primary"
            delay={0.7}
          />
        </div>
      </section>

      {/* Wellbeing Pillar */}
      <section className="px-4 mt-8 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2 mb-3"
        >
          <div className="w-6 h-6 rounded-md gradient-secondary flex items-center justify-center">
            <Heart className="w-3.5 h-3.5 text-secondary-foreground" />
          </div>
          <h2 className="font-heading font-bold text-base text-foreground">My Wellbeing</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3">
          <FeatureCard
            icon={Heart}
            title="Therapist Connect"
            description="Find culturally-aware professionals and book a low-commitment first chat."
            to="/wellbeing"
            gradient="secondary"
            delay={0.9}
          />
          <FeatureCard
            icon={PenLine}
            title="Mindful Journal"
            description="Write down your thoughts with an optional AI companion for gentle support."
            to="/journal"
            gradient="secondary"
            delay={1.0}
          />
          <FeatureCard
            icon={Users}
            title="Community Events"
            description="Discover social events and meet people who understand your journey."
            to="/events"
            gradient="accent"
            delay={1.1}
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
