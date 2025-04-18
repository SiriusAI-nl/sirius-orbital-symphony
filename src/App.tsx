
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessResearch from "./pages/MarketResearch";
import BusinessSearch from "./pages/MarketSearch";
import BusinessResearchConsole from "./pages/MarketResearchConsole";
import AiAgents from "./pages/AiAgents";
import Workflows from "./pages/Workflows";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
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
          <Route path="/business-insights" element={<BusinessResearch />} />
          <Route path="/business-search" element={<BusinessSearch />} />
          <Route path="/business-insights-console" element={<BusinessResearchConsole />} />
          <Route path="/ai-agents" element={<AiAgents />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
