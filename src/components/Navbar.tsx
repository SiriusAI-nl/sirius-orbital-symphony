
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-space-900/70 backdrop-blur supports-backdrop-blur:bg-space-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="relative w-8 h-8 mr-2">
                <div className="absolute inset-0 bg-sirius-400 rounded-full animate-pulse-soft"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">Sirius AI</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Solutions</a>
              <a href="#workflow" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Workflow</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
              <Button className="bg-sirius-500 hover:bg-sirius-600 text-white">Get Started</Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
