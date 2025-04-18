
import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarItems from './SidebarItems';
import { useMarketResearch } from '@/hooks/use-market-research';

const MarketResearchSidebar = () => {
  const { 
    openSections, 
    onSectionToggle, 
    activeSession, 
    setActiveSession,
    chatHistory 
  } = useMarketResearch();

  return (
    <Sidebar className="border-r border-border">
      <div className="flex flex-col h-full">
        <SidebarContent className="py-4 flex-1">
          <ScrollArea className="h-full">
            <SidebarItems
              chatHistory={chatHistory}
              openSections={openSections}
              onSectionToggle={onSectionToggle}
              activeSession={activeSession}
              onSessionSelect={setActiveSession}
            />
          </ScrollArea>
        </SidebarContent>
        
        <SidebarFooter className="p-4 border-t border-border bg-sidebar">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full bg-space-800/40 hover:bg-space-800/60 border-sirius-500/20"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            New Research
          </Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
};

export default MarketResearchSidebar;
