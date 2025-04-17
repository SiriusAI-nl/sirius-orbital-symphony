
import React, { useState, useEffect } from 'react';
import { ChevronRight, Database, Activity, Users, TrendingUp, BarChart2, PieChart, Layers, Book, FileText, Search, Sparkles, MessageSquare, Send, PlusCircle, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger,
  SidebarSeparator,
  SidebarFooter,
} from '@/components/ui/sidebar';

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

  const menuItems = [
    { 
      title: 'Research Pipeline', 
      icon: <Activity className="mr-2 h-5 w-5" />,
      items: [
        { label: 'Keywords', icon: <Activity className="mr-2 h-4 w-4" /> },
        { label: 'Competition', icon: <Users className="mr-2 h-4 w-4" /> },
        { label: 'Trends', icon: <TrendingUp className="mr-2 h-4 w-4" /> },
        { label: 'Analysis', icon: <BarChart2 className="mr-2 h-4 w-4" /> },
        { label: 'Deep Research', icon: <Layers className="mr-2 h-4 w-4" /> },
        { label: 'Reports', icon: <FileText className="mr-2 h-4 w-4" /> }
      ]
    },
    {
      title: 'Chat History',
      icon: <MessageSquare className="mr-2 h-5 w-5" />,
      items: chatHistory.map(chat => ({
        label: chat.title,
        date: chat.date,
        id: chat.id
      }))
    }
  ];

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

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      content: messageInput,
      timestamp: new Date()
    }]);
    
    // Clear input
    setMessageInput('');
    
    // Simulate AI response after a short delay
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSessionSelect = (id: number) => {
    setActiveSession(id);
    // In a real app, you'd load the conversation history for this session
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex pt-16">
        <SidebarProvider defaultOpen={true}>
          <Sidebar className="border-r border-border">
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <SidebarContent className="pt-8">
                {menuItems.map((menuGroup, index) => (
                  <SidebarGroup key={index} className="mb-4">
                    <Collapsible 
                      open={openSections[menuGroup.title === 'Research Pipeline' ? 'pipeline' : 'history']}
                      onOpenChange={() => setOpenSections(prev => ({
                        ...prev,
                        [menuGroup.title === 'Research Pipeline' ? 'pipeline' : 'history']: 
                          !prev[menuGroup.title === 'Research Pipeline' ? 'pipeline' : 'history']
                      }))}
                      className="w-full"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-3 text-base text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors">
                        <div className="flex items-center">
                          {menuGroup.icon}
                          <span className="font-medium">{menuGroup.title}</span>
                        </div>
                        <ChevronDown className="h-5 w-5 transition-transform" />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenu>
                          {menuGroup.items.map((item, itemIndex) => (
                            <SidebarMenuItem key={itemIndex}>
                              {menuGroup.title === 'Research Pipeline' ? (
                                <SidebarMenuButton>
                                  {'icon' in item && item.icon}
                                  <span>{item.label}</span>
                                </SidebarMenuButton>
                              ) : (
                                <SidebarMenuButton 
                                  isActive={activeSession === item.id}
                                  onClick={() => handleSessionSelect(item.id as number)}
                                >
                                  <MessageSquare className="mr-2 h-4 w-4 text-sirius-400" />
                                  <div className="flex flex-col items-start">
                                    <span className="text-sm truncate max-w-[180px]">{item.label}</span>
                                    <span className="text-xs text-sidebar-foreground/60">{item.date}</span>
                                  </div>
                                </SidebarMenuButton>
                              )}
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                        
                        {menuGroup.title === 'Chat History' && (
                          <Button variant="ghost" size="sm" className="mt-2 w-full text-gray-400 hover:text-white">
                            View all history <ChevronRight className="ml-1 w-4 h-4" />
                          </Button>
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarGroup>
                ))}
              </SidebarContent>
              
              <SidebarFooter className="mt-auto p-4 border-t border-border">
                <div className="flex items-center justify-center">
                  <Button variant="outline" size="sm" className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Research
                  </Button>
                </div>
              </SidebarFooter>
            </ScrollArea>
          </Sidebar>
          
          <div className="flex-1 overflow-hidden p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="lg:hidden" />
                <div>
                  <h1 className="text-2xl font-bold text-white">{query || "New Research"}</h1>
                  <p className="text-gray-400">Marketing Intelligence Analysis</p>
                </div>
              </div>
              
              <div className="max-w-md bg-card/80 rounded-lg border border-border flex items-center px-3">
                <Search className="h-4 w-4 shrink-0 opacity-50 mr-2" />
                <Input 
                  placeholder="Search your research..." 
                  className="h-10 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden">
              {/* Chat UI Section */}
              <div className="flex flex-col h-full overflow-hidden bg-card/80 backdrop-blur-sm border-border rounded-lg border">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-sirius-500/20 flex items-center justify-center mb-4">
                          <MessageSquare className="w-8 h-8 text-sirius-400" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">Welcome to SiriusAI</h3>
                        <p className="text-gray-400 max-w-md">
                          Start a conversation to generate marketing research insights
                        </p>
                      </div>
                    ) : (
                      messages.map((message, index) => (
                        <div 
                          key={index} 
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-3/4 rounded-lg p-3 ${
                              message.type === 'user' 
                                ? 'bg-sirius-500 text-white' 
                                : 'bg-space-800 text-white'
                            }`}
                          >
                            <div className="text-sm mb-1">{message.content}</div>
                            <div className="text-xs opacity-70 text-right">{formatTime(message.timestamp)}</div>
                          </div>
                        </div>
                      ))
                    )}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-space-800 text-white rounded-lg p-3">
                          <div className="flex space-x-2">
                            <div className="h-2 w-2 bg-sirius-400 rounded-full animate-bounce"></div>
                            <div className="h-2 w-2 bg-sirius-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="h-2 w-2 bg-sirius-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-border">
                  <form onSubmit={handleMessageSubmit} className="flex space-x-2">
                    <Input
                      placeholder="Ask a follow-up question..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="flex-1 bg-space-800/50"
                    />
                    <Button type="submit" size="icon" disabled={isLoading || !messageInput.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Analysis Section */}
              <div className="flex flex-col h-full overflow-hidden">
                <Card className="flex-1 overflow-hidden bg-card/80 backdrop-blur-sm border-border">
                  <ScrollArea className="h-full">
                    <CardContent className="p-6">
                      {isLoading ? (
                        <div className="py-20 flex flex-col items-center justify-center">
                          <div className="h-12 w-12 rounded-full border-4 border-t-sirius-500 border-sirius-500/30 animate-spin mb-4"></div>
                          <h3 className="text-xl font-medium text-white">Analyzing Data</h3>
                          <p className="text-gray-400 mt-2">Our LLM research agents are conducting deep analysis...</p>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center space-x-2 mb-4">
                            <Sparkles className="w-5 h-5 text-sirius-400" />
                            <h3 className="text-lg font-medium text-white">Research Analysis</h3>
                          </div>
                          <div className="prose prose-invert max-w-none mb-6">
                            <pre className="bg-space-800/50 p-4 rounded-lg overflow-auto text-sm">
                              {researchResults}
                            </pre>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <Database className="w-5 h-5 text-sirius-400" />
                                <h3 className="text-md font-medium text-white">Data Sources</h3>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {websites.slice(0, 6).map((website, i) => (
                                  <div key={i} className="bg-space-800/50 p-2 rounded-lg flex items-center text-sm">
                                    <span className="truncate">{website}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <TrendingUp className="w-5 h-5 text-sirius-400" />
                                <h3 className="text-md font-medium text-white">Market Trends</h3>
                              </div>
                              <div className="space-y-2">
                                {Array.from({length: 3}).map((_, i) => (
                                  <div key={i} className="bg-space-800/50 p-3 rounded-lg">
                                    <div className="font-medium text-sm">Trend {i+1}</div>
                                    <div className="text-xs text-gray-400 mt-1">
                                      {["Increasing market adoption", "Shifting consumer preferences", "Technological innovation"][i]}
                                    </div>
                                    <div className="mt-2 h-2 bg-space-700/50 rounded-full overflow-hidden">
                                      <div 
                                        className="h-full bg-sirius-500 rounded-full" 
                                        style={{ width: `${Math.floor(Math.random() * 60) + 30}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </ScrollArea>
                </Card>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketResearchConsole;
