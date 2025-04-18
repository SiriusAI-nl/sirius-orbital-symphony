
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SidebarProvider } from '@/components/ui/sidebar';
import MarketResearchSidebar from './MarketResearchSidebar';
import MarketResearchContent from './MarketResearchContent';

const MarketResearchLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <SidebarProvider defaultOpen={true}>
          <div className="flex flex-1 w-full mt-16 mb-16">
            <MarketResearchSidebar />
            <MarketResearchContent />
          </div>
        </SidebarProvider>
      </div>
      <Footer />
    </div>
  );
};

export default MarketResearchLayout;
