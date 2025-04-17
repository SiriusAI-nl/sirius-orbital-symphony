
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
                src="/lovable-uploads/9eeeee9c-9327-452d-8e0d-b3b5f2ca8792.png" 
                alt="Sirius AI Logo" 
                className="w-24 h-24 mr-4 filter brightness-125 saturate-150"
              />
              <div className="flex flex-col items-start">
                <span className="text-white font-black text-2xl tracking-tight leading-tight">Cybernetic</span>
                <span className="text-sirius-400 text-xl tracking-wide">Solutions</span>
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a href="#market-research" className="text-gray-300 hover:text-white transition-colors text-base font-bold">Market Research</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-base font-bold">AI Agents</a>
              <a href="#workflow" className="text-gray-300 hover:text-white transition-colors text-base font-bold">Workflows</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-base font-bold">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-base font-bold">Pricing</a>
              <Button className="bg-sirius-500 hover:bg-sirius-600 text-white text-base px-4 py-2 font-bold">Get Started</Button>
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
