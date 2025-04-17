
import React, { useState } from 'react';
import { SearchIcon, ArrowRightIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import ConstellationBackground from '@/components/ConstellationBackground';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const MarketSearch = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      toast.success(`Market analysis for "${query}" initialized`);
      navigate('/market-research', { state: { query } });
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <ConstellationBackground />
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center py-12 px-4 relative z-10">
        <div className="max-w-3xl mx-auto w-full text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-sirius-500/10 p-2 rounded-lg mb-2">
                <SearchIcon className="w-5 h-5 text-sirius-400" />
                <Sparkles className="w-5 h-5 text-sirius-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
                Market Intelligence
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Discover trends, analyze competitors, and find new opportunities with AI-powered market research
              </p>
            </div>
            
            <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
              <div className="glass-card p-2 md:p-3 flex items-center">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Enter company, industry, or trend to analyze..."
                    className="bg-transparent border-none text-white placeholder:text-gray-400 text-lg pl-10 h-12 focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <Button
                  type="submit"
                  className="bg-sirius-500 hover:bg-sirius-600 text-white ml-2 h-12 px-6"
                  disabled={isSearching}
                >
                  {isSearching ? (
                    <div className="flex items-center">
                      <div className="h-4 w-4 border-t-2 border-l-2 border-white rounded-full animate-spin mr-2"></div>
                      <span>Analyzing</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>Analyze</span>
                      <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </div>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
              <span>Try:</span>
              <button 
                onClick={() => setQuery('Tesla competitor analysis')}
                className="hover:text-sirius-400 transition-colors underline"
              >
                Tesla competitor analysis
              </button>
              <button 
                onClick={() => setQuery('AI market growth forecast 2025')}
                className="hover:text-sirius-400 transition-colors underline"
              >
                AI market growth forecast 2025
              </button>
              <button 
                onClick={() => setQuery('Renewable energy market trends')}
                className="hover:text-sirius-400 transition-colors underline"
              >
                Renewable energy market trends
              </button>
            </div>
            
            <div className="glass-card p-6 mt-12 max-w-xl mx-auto">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-sirius-500/20 rounded-full">
                    <Sparkles className="w-6 h-6 text-sirius-400" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-medium text-white">AI-powered analysis</h3>
                  <p className="text-gray-300 mt-1">
                    Our advanced algorithms analyze thousands of data points in real-time to deliver insights tailored to your specific market research needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MarketSearch;
