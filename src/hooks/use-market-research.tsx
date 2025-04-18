
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useMarketResearch = () => {
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

  const onSectionToggle = (section: 'pipeline' | 'history') => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return {
    query,
    messageInput,
    setMessageInput,
    isLoading,
    activeSession,
    setActiveSession,
    websites,
    researchResults,
    openSections,
    onSectionToggle,
    chatHistory,
    messages,
    handleMessageSubmit
  };
};
