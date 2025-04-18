
import React from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import ChatInterface from './ChatInterface';
import ResearchResults from './ResearchResults';
import MarketResearchHeader from './MarketResearchHeader';
import { useMarketResearch } from '@/hooks/use-market-research';

const MarketResearchContent = () => {
  const {
    messages,
    messageInput,
    isLoading,
    websites,
    researchResults,
    handleMessageSubmit,
    setMessageInput
  } = useMarketResearch();

  return (
    <div className="flex-1 overflow-auto flex flex-col">
      <MarketResearchHeader />
      
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1"
      >
        <ResizablePanel 
          defaultSize={40} 
          minSize={30}
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
        >
          <ResearchResults
            isLoading={isLoading}
            researchResults={researchResults}
            websites={websites}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MarketResearchContent;
