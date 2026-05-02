import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import Index from "./pages/Index";
import Advisor from "./pages/Advisor";
import Studies from "./pages/Studies";
import Subject from "./pages/Subject";
import Wellbeing from "./pages/Wellbeing";
import Journal from "./pages/Journal";
import Events from "./pages/Events";
import Translator from "./pages/Translator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/studies/:slug" element={<Subject />} />
          <Route path="/wellbeing" element={<Wellbeing />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
