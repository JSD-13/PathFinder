import { useLocation, useNavigate } from "react-router-dom";
import { Home, BookOpen, MessageCircle, Heart, PenLine } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/studies", icon: BookOpen, label: "Studies" },
  { path: "/advisor", icon: MessageCircle, label: "Advisor" },
  { path: "/wellbeing", icon: Heart, label: "Wellbeing" },
  { path: "/journal", icon: PenLine, label: "Journal" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                active
                  ? "text-primary scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{label}</span>
              {active && (
                <div className="w-1 h-1 rounded-full gradient-primary mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
