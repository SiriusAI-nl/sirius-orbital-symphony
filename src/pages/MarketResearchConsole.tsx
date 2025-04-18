
import React, { useState, useEffect } from 'react';
import { PlusCircle, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import ChatInterface from '@/components/market-research/ChatInterface';
import ResearchResults from '@/components/market-research/ResearchResults';
import SidebarItems from '@/components/market-research/SidebarItems';

const MarketResearchConsole = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeSession, setActiveSession] = useState<number | null>(null);
  const [websites, setWebsites] = useState<string[]>([]);
  const [researchResults, setResearchResults] = useState<string>('');
  const [openSections, setOpenSections] = useState({
    pipeline: true,
    history: true
  });

  const [chatHistory] = useState([
    { id: 1, title: "Gaming market trends", date: "2025-04-16" },
    { id: 2, title: "AI software competitors", date: "2025-04-12" },
    { id: 3, title: "Renewable energy market size", date: "2025-04-10" },
    { id: 4, title: "Cloud storage providers", date: "2025-04-05" },
    { id: 5, title: "Smart home adoption rates", date: "2025-03-28" },
  ]);

  const [messages, setMessages] = useState<{type: 'user' | 'assistant', content: string, timestamp: Date}[]>([]);

  useEffect(() => {
    if (location.state?.query) {
      setQuery(location.state.query);
      setIsLoading(true);
      
      setTimeout(() => {
        setIsLoading(false);
        generateFakeWebsites();
        generateFakeResearchResults();
        setMessages([
          {
            type: 'assistant',
            content: `I'll research "${location.state.query}" for you. What specific aspects are you interested in?`,
            timestamp: new Date()
          }
        ]);
      }, 2000);
    }
  }, [location.state]);

  const generateFakeWebsites = () => {
    const fakeWebsites = [
      'marketresearch.com',
      'industrytrends.org',
      'competitoranalysis.co',
      'statista.com',
      'keywordinsights.net',
      'marketshare.io',
      'consumertrends.com',
      'competitorspy.org',
      'marketingdata.co',
      'trendreports.com',
      'insightplatform.io',
      'analyticsreports.net',
      'datatrends.org',
      'marketintel.co',
      'keywordtools.com',
    ];
    setWebsites(fakeWebsites);
  };

  const generateFakeResearchResults = () => {
    const fakeResults = `
# ${query} - Market Research Analysis

## Initial Findings
I'm starting my research by looking into the different aspects of ${query} that would be relevant for marketing intelligence.

## Market Overview
Currently focusing on the market landscape to understand its dynamics and opportunities, especially when analyzing the competitive environment. Looking into the different segments and potential growth areas.

## Next Steps
Next, I plan to investigate user demographics and then identify the major brands that compete in this space. This will help compare the different options available in the market.
    `;
    setResearchResults(fakeResults);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    setMessages(prev => [...prev, {
      type: 'user',
      content: messageInput,
      timestamp: new Date()
    }]);
    
    setMessageInput('');
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: `I'm analyzing your question about "${messageInput}". Based on my research, I've found several key insights about ${query} related to your question. Would you like me to focus on market size, competitor analysis, or consumer trends?`,
        timestamp: new Date()
      }]);
    }, 2000);
  };

  const handleSectionToggle = (section: 'pipeline' | 'history') => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex pt-16 pb-4 px-4 space-x-4">
        <SidebarProvider defaultOpen={true}>
          <Sidebar className="border-r border-border ml-4 h-[calc(100vh-12rem)]">
            <ScrollArea className="h-full">
              <SidebarContent className="pt-4">
                <SidebarItems
                  chatHistory={chatHistory}
                  openSections={openSections}
                  onSectionToggle={handleSectionToggle}
                  activeSession={activeSession}
                  onSessionSelect={setActiveSession}
                />
              </SidebarContent>
              
              <SidebarFooter className="mt-auto p-4 border-t border-border sticky bottom-0 bg-sidebar">
                <Button variant="outline" size="sm" className="w-full bg-space-800/40 hover:bg-space-800/60 border-sirius-500/20">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Research
                </Button>
              </SidebarFooter>
            </ScrollArea>
          </Sidebar>
          
          <div className="flex-1 overflow-hidden pr-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="lg:hidden" />
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-sirius-200 to-sirius-400 text-transparent bg-clip-text">
                    {query || "New Research"}
                  </h1>
                  <p className="text-gray-400">Marketing Intelligence Analysis</p>
                </div>
              </div>
              
              <div className="max-w-md bg-space-800/40 rounded-lg border border-border/50 flex items-center px-3">
                <Search className="h-4 w-4 shrink-0 opacity-50 mr-2" />
                <Input 
                  placeholder="Search your research..." 
                  className="h-10 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            
            <ResizablePanelGroup
              direction="horizontal"
              className="h-[calc(100vh-12rem)] overflow-hidden"
            >
              <ResizablePanel 
                defaultSize={40} 
                minSize={30}
                className="h-full overflow-hidden"
              >
                <ChatInterface
                  messages={messages}
                  messageInput={messageInput}
                  isLoading={isLoading}
                  onMessageSubmit={handleMessageSubmit}
                  onMessageInputChange={setMessageInput}
                />
              </ResizablePanel>
              
              <ResizableHandle withHandle />
              
              <ResizablePanel 
                defaultSize={60}
                minSize={40}
                className="h-full overflow-hidden"
              >
                <ResearchResults
                  isLoading={isLoading}
                  researchResults={researchResults}
                  websites={websites}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </SidebarProvider>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketResearchConsole;
