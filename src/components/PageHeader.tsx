import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

const PageHeader = ({ title, subtitle, showBack = true }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-lg px-4 pt-[env(safe-area-inset-top)] pb-3">
      <div className="flex items-center gap-3 pt-3">
        {showBack && (
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
        )}
        <div>
          <h1 className="font-heading font-bold text-lg text-foreground">{title}</h1>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
