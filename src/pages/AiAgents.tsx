
import React from 'react';
import { CpuIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import ConstellationBackground from '@/components/ConstellationBackground';
import Footer from '@/components/Footer';
import MultiAgentDiagram from '@/components/MultiAgentDiagram';

const AiAgents = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ConstellationBackground />
      <Navbar />
      
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
                <CpuIcon className="w-6 h-6 text-sirius-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI Agents Platform</h2>
              <p className="text-lg text-gray-300 mb-6">
                Deploy specialized AI agents that work together to solve complex problems. Each agent is designed for a specific task, creating a powerful system of collaboration.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From data analysis to content generation, our multi-agent system delivers results that surpass traditional single-agent solutions by orders of magnitude.
              </p>
              <Button className="btn-primary flex items-center space-x-2">
                <span>Explore AI Agents</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="md:w-1/2 glass-card p-4">
              <MultiAgentDiagram />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AiAgents;
