
import React, { useState, useEffect } from 'react';
import { ChevronRight, Database, Activity, Users, TrendingUp, BarChart2, PieChart, Layers, Book, FileText, Search, Sparkles, ChevronDown, MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger,
  SidebarSeparator
} from '@/components/ui/sidebar';

const MarketResearchConsole = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('keywords');
  const [websites, setWebsites] = useState<string[]>([]);
  const [researchResults, setResearchResults] = useState<string>('');
  // Track open/closed state of collapsible menu sections
  const [openSections, setOpenSections] = useState({
    dataRetrieval: true,
    dataAnalysis: true,
    deepResearch: true,
    reporting: true
  });

  // Chat history data
  const [chatHistory] = useState([
    { id: 1, title: "Gaming market trends", date: "2025-04-16" },
    { id: 2, title: "AI software competitors", date: "2025-04-12" },
    { id: 3, title: "Renewable energy market size", date: "2025-04-10" },
    { id: 4, title: "Cloud storage providers", date: "2025-04-05" },
    { id: 5, title: "Smart home adoption rates", date: "2025-03-28" },
  ]);

  // Get the query from the location state
  useEffect(() => {
    if (location.state?.query) {
      setQuery(location.state.query);
      
      // Simulate loading
      setTimeout(() => {
        setIsLoading(false);
        generateFakeWebsites();
        generateFakeResearchResults();
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

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    toast.info(`Switching to ${section} analysis`);
  };

  // Toggle section open/closed state
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex pt-24"> {/* Added padding-top to move content below header */}
        <SidebarProvider defaultOpen={true}>
          <Sidebar className="border-r border-border">
            <SidebarContent>
              {/* Research Pipeline Section */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-lg font-medium text-sirius-300 px-3 pb-2">Research Pipeline</SidebarGroupLabel>
              
                {/* Phase 1: Data Retrieval */}
                <SidebarGroup>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-sirius-500 flex items-center justify-center text-white font-medium mr-2">1</div>
                    <SidebarGroupLabel className="text-xl font-medium text-sirius-300">Data Retrieval</SidebarGroupLabel>
                  </div>
                  <Collapsible 
                    open={openSections.dataRetrieval}
                    onOpenChange={() => toggleSection('dataRetrieval')}
                    className="w-full"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-base text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors">
                      <span className="font-medium">Data Sources</span>
                      <ChevronDown className="h-4 w-4 transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Keywords" isActive={activeSection === 'keywords'} onClick={() => handleSectionChange('keywords')}>
                            <Activity className="mr-2" />
                            <span>Keywords</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Competition" isActive={activeSection === 'competition'} onClick={() => handleSectionChange('competition')}>
                            <Users className="mr-2" />
                            <span>Competition</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Trends" isActive={activeSection === 'trends'} onClick={() => handleSectionChange('trends')}>
                            <TrendingUp className="mr-2" />
                            <span>Trends</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarGroup>
                
                {/* Phase 2: Data Analysis */}
                <SidebarGroup>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-sirius-500 flex items-center justify-center text-white font-medium mr-2">2</div>
                    <SidebarGroupLabel className="text-xl font-medium text-sirius-300">Data Analysis</SidebarGroupLabel>
                  </div>
                  <Collapsible 
                    open={openSections.dataAnalysis}
                    onOpenChange={() => toggleSection('dataAnalysis')}
                    className="w-full"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-base text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors">
                      <span className="font-medium">Analysis Methods</span>
                      <ChevronDown className="h-4 w-4 transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Keyword Analysis" isActive={activeSection === 'keyword-analysis'} onClick={() => handleSectionChange('keyword-analysis')}>
                            <PieChart className="mr-2" />
                            <span>Keyword Analysis</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Competitor Analysis" isActive={activeSection === 'competitor-analysis'} onClick={() => handleSectionChange('competitor-analysis')}>
                            <BarChart2 className="mr-2" />
                            <span>Competitor Analysis</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Trend Analysis" isActive={activeSection === 'trend-analysis'} onClick={() => handleSectionChange('trend-analysis')}>
                            <TrendingUp className="mr-2" />
                            <span>Trend Analysis</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarGroup>
                
                {/* Phase 3: Deep Research */}
                <SidebarGroup>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-sirius-500 flex items-center justify-center text-white font-medium mr-2">3</div>
                    <SidebarGroupLabel className="text-xl font-medium text-sirius-300">Deep Research</SidebarGroupLabel>
                  </div>
                  <Collapsible 
                    open={openSections.deepResearch}
                    onOpenChange={() => toggleSection('deepResearch')}
                    className="w-full"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-base text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors">
                      <span className="font-medium">Research Methods</span>
                      <ChevronDown className="h-4 w-4 transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Deep Reasoning" isActive={activeSection === 'deep-reasoning'} onClick={() => handleSectionChange('deep-reasoning')}>
                            <Layers className="mr-2" />
                            <span>Deep Reasoning</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarGroup>
                
                {/* Phase 4: Reporting */}
                <SidebarGroup>
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-sirius-500 flex items-center justify-center text-white font-medium mr-2">4</div>
                    <SidebarGroupLabel className="text-xl font-medium text-sirius-300">Reporting</SidebarGroupLabel>
                  </div>
                  <Collapsible 
                    open={openSections.reporting}
                    onOpenChange={() => toggleSection('reporting')}
                    className="w-full"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-base text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors">
                      <span className="font-medium">Report Types</span>
                      <ChevronDown className="h-4 w-4 transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Market Research Reports" isActive={activeSection === 'market-research-reports'} onClick={() => handleSectionChange('market-research-reports')}>
                            <FileText className="mr-2" />
                            <span>Market Research Reports</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarGroup>
              </SidebarGroup>
              
              {/* Separator between Research Pipeline and Chat History */}
              <SidebarSeparator className="my-4" />
              
              {/* Chat History Section */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-lg font-medium text-sirius-300 px-3 pb-2">Chat History</SidebarGroupLabel>
                <div className="px-3">
                  <SidebarMenu>
                    {chatHistory.map((chat) => (
                      <SidebarMenuItem key={chat.id}>
                        <SidebarMenuButton>
                          <MessageSquare className="mr-2 h-4 w-4 text-sirius-400" />
                          <div className="flex flex-col items-start">
                            <span className="text-sm truncate max-w-[180px]">{chat.title}</span>
                            <span className="text-xs text-sidebar-foreground/60">{chat.date}</span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                  
                  <Button variant="ghost" size="sm" className="mt-2 w-full text-gray-400 hover:text-white">
                    View all history <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <SidebarTrigger className="lg:hidden" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">{query}</h1>
                    <p className="text-gray-400">Marketing Intelligence Analysis</p>
                  </div>
                </div>
                
                <div className="w-full max-w-lg bg-card/80 rounded-lg border border-border flex items-center px-3">
                  <Search className="h-4 w-4 shrink-0 opacity-50 mr-2" />
                  <Input 
                    placeholder="Refine your search query..." 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-10 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
              
              {isLoading ? (
                <div className="py-20 flex flex-col items-center justify-center">
                  <div className="h-12 w-12 rounded-full border-4 border-t-sirius-500 border-sirius-500/30 animate-spin mb-4"></div>
                  <h3 className="text-xl font-medium text-white">Analyzing Data</h3>
                  <p className="text-gray-400 mt-2">Our LLM research agents are conducting deep analysis...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-card/80 backdrop-blur-sm border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <Sparkles className="w-5 h-5 text-sirius-400" />
                          <h3 className="text-lg font-medium text-white">Research Analysis</h3>
                        </div>
                        <div className="prose prose-invert max-w-none">
                          <pre className="bg-space-800/50 p-4 rounded-lg overflow-auto text-sm">
                            {researchResults}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {activeSection === 'keywords' && (
                      <Card className="bg-card/80 backdrop-blur-sm border-border">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-4">
                            <Activity className="w-5 h-5 text-sirius-400" />
                            <h3 className="text-lg font-medium text-white">Top Keywords</h3>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {Array.from({length: 9}).map((_, i) => (
                              <div key={i} className="bg-space-800/50 p-3 rounded-lg">
                                <div className="font-medium">{query.split(' ')[0]} trend {i+1}</div>
                                <div className="text-sm text-gray-400">Score: {Math.floor(Math.random() * 100)}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                    
                    {activeSection === 'competition' && (
                      <Card className="bg-card/80 backdrop-blur-sm border-border">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-4">
                            <Users className="w-5 h-5 text-sirius-400" />
                            <h3 className="text-lg font-medium text-white">Competitor Analysis</h3>
                          </div>
                          <div className="space-y-4">
                            {Array.from({length: 5}).map((_, i) => (
                              <div key={i} className="bg-space-800/50 p-4 rounded-lg flex justify-between items-center">
                                <div>
                                  <div className="font-medium">Competitor {i+1}</div>
                                  <div className="text-sm text-gray-400">Market share: {(Math.random() * 20 + 5).toFixed(1)}%</div>
                                </div>
                                <div className="bg-sirius-500/20 text-sirius-400 py-1 px-3 rounded-full text-sm">
                                  {['Leader', 'Strong', 'Growing', 'Stable', 'Declining'][i]}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    <Card className="bg-card/80 backdrop-blur-sm border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <Database className="w-5 h-5 text-sirius-400" />
                          <h3 className="text-lg font-medium text-white">Researching Websites</h3>
                        </div>
                        <div className="space-y-2">
                          {websites.slice(0, 8).map((website, i) => (
                            <div key={i} className="bg-space-800/50 p-2 rounded-lg flex items-center">
                              <div className="w-6 h-6 rounded-full bg-sirius-500/20 flex items-center justify-center mr-3 text-xs text-sirius-400">
                                {i+1}
                              </div>
                              <span className="text-sm">{website}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="mt-3 w-full text-gray-400 hover:text-white">
                          View all {websites.length} sources <ChevronRight className="ml-1 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-card/80 backdrop-blur-sm border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <TrendingUp className="w-5 h-5 text-sirius-400" />
                          <h3 className="text-lg font-medium text-white">Market Trends</h3>
                        </div>
                        <div className="space-y-3">
                          {Array.from({length: 4}).map((_, i) => (
                            <div key={i} className="bg-space-800/50 p-3 rounded-lg">
                              <div className="font-medium">Trend {i+1}</div>
                              <div className="text-sm text-gray-400 mt-1">
                                {["Increasing market adoption", "Shifting consumer preferences", "Technological innovation", "Regulatory changes"][i]}
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
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SidebarProvider>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketResearchConsole;
