
import React from 'react';
import { ArrowRightIcon, BarChartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MarketInsightsHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="md:flex md:items-center md:space-x-12">
        <div className="md:w-1/2 glass-card p-4 mb-10 md:mb-0">
          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: `url('/lovable-uploads/155c3c45-0594-4b1e-83cb-7f8f1096664e.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.85,
                filter: 'blur(0px)',
              }}
            >
              <div className="absolute inset-0 bg-space-900/20 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
            <BarChartIcon className="w-6 h-6 text-sirius-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Market Intelligence That's Light-Years Ahead</h2>
          <p className="text-lg text-gray-300 mb-6">
            Our AI-powered market intelligence tools help you navigate the galaxy of data to discover actionable insights about your market, competitors, and customers.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Deploy intelligent agents to collect, analyze, and visualize market trends, sentiment analysis, and competitive intelligence with accuracy that would make Deep Thought jealous.
          </p>
          <Button className="btn-primary flex items-center">
            <span>Explore Market Intelligence</span>
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightsHero;
