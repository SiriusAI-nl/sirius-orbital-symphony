
import React from 'react';
import { SearchIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import ConstellationBackground from '@/components/ConstellationBackground';
import Footer from '@/components/Footer';

const MarketResearch = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ConstellationBackground />
      <Navbar />
      
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 glass-card p-4 mb-10 md:mb-0">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center bg-space-800/50">
                  <div className="grid grid-cols-2 gap-4 p-4 w-full h-full">
                    <div className="glass-card p-3 flex flex-col items-center justify-center">
                      <SearchIcon className="w-8 h-8 text-sirius-400 mb-2" />
                      <div className="h-2 bg-sirius-500/20 w-2/3 rounded-full mb-1"></div>
                      <div className="h-2 bg-sirius-500/20 w-1/2 rounded-full"></div>
                    </div>
                    <div className="glass-card p-3 flex items-center justify-center">
                      <div className="w-full h-24 bg-sirius-500/10 rounded-lg"></div>
                    </div>
                    <div className="glass-card p-3 flex items-center justify-center col-span-2">
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <div className="h-12 bg-sirius-500/20 rounded-lg"></div>
                        <div className="h-12 bg-sirius-500/30 rounded-lg"></div>
                        <div className="h-12 bg-sirius-500/10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
                <SearchIcon className="w-6 h-6 text-sirius-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Market Research Dashboard</h2>
              <p className="text-lg text-gray-300 mb-6">
                Unlock the power of AI-driven market research with our comprehensive toolset. Gather insights, analyze trends, and stay ahead of your competition.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our platform provides real-time data collection, sentiment analysis, and competitor monitoring to help you make informed business decisions.
              </p>
              <Button className="btn-primary flex items-center">
                <span>Start Analyzing Markets</span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MarketResearch;
