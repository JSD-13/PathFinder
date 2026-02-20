import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  gradient: "primary" | "secondary" | "accent";
  delay?: number;
}

const gradientMap = {
  primary: "gradient-primary",
  secondary: "gradient-secondary",
  accent: "gradient-accent",
};

const FeatureCard = ({ icon: Icon, title, description, to, gradient, delay = 0 }: FeatureCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={() => navigate(to)}
      className="w-full text-left bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className={`w-11 h-11 rounded-xl ${gradientMap[gradient]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <h3 className="font-heading font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.button>
  );
};

export default FeatureCard;
