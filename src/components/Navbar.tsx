import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-space-900/70 backdrop-blur supports-backdrop-blur:bg-space-900/60 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/9eeeee9c-9327-452d-8e0d-b3b5f2ca8792.png" 
                alt="Sirius AI Logo" 
                className="w-[16.8rem] h-[16.8rem] mr-4 filter brightness-125 saturate-150"
              />
              <span className="text-sirius-400 text-[0.525rem] tracking-wide -mt-3">Solutions</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link to="/market-research" className="text-gray-300 hover:text-white transition-colors text-base font-bold">
                Market Research
              </Link>
              <Link to="/ai-agents" className="text-gray-300 hover:text-white transition-colors text-base font-bold">
                AI Agents
              </Link>
              <Link to="/workflows" className="text-gray-300 hover:text-white transition-colors text-base font-bold">
                Workflows
              </Link>
              <Link to="/features" className="text-gray-300 hover:text-white transition-colors text-base font-bold">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors text-base font-bold">
                Pricing
              </Link>
              <Button className="bg-sirius-500 hover:bg-sirius-600 text-white text-base px-4 py-2 font-bold">
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="text-white p-1.5"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-3">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/market-research" 
                className="text-gray-300 hover:text-white transition-colors text-base font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Market Research
              </Link>
              <Link 
                to="/ai-agents" 
                className="text-gray-300 hover:text-white transition-colors text-base font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Agents
              </Link>
              <Link 
                to="/workflows" 
                className="text-gray-300 hover:text-white transition-colors text-base font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Workflows
              </Link>
              <Link 
                to="/features" 
                className="text-gray-300 hover:text-white transition-colors text-base font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-300 hover:text-white transition-colors text-base font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Button className="bg-sirius-500 hover:bg-sirius-600 text-white text-base px-4 py-2 font-bold w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
