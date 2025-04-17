
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-space-900/70 backdrop-blur supports-backdrop-blur:bg-space-900/60 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/fc546ffb-54c0-483e-aad0-9dc47ce7ba5e.png" 
                alt="Sirius AI Logo" 
                className="w-8 h-8 mr-2 filter brightness-125 saturate-150"
              />
              <div className="flex flex-col items-start">
                <span className="text-white font-semibold text-lg tracking-tight leading-none">SiriusAI</span>
                <span className="text-sirius-400 text-xs tracking-wide">solutions</span>
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#market-research" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Market Research</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">AI Agents</a>
              <a href="#workflow" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Workflows</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
              <Button className="bg-sirius-500 hover:bg-sirius-600 text-white text-sm px-3 py-1.5">Get Started</Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" className="text-white p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
