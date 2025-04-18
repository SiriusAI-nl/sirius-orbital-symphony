
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useMarketResearch } from '@/hooks/use-market-research';

const MarketResearchHeader = () => {
  const { query } = useMarketResearch();

  return (
    <div className="flex items-center justify-between p-4 border-b border-border sticky top-16 bg-background z-10">
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
  );
};

export default MarketResearchHeader;
