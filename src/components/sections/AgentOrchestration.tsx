import React from 'react';
import { ArrowRightIcon, CpuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MultiAgentDiagram from '@/components/MultiAgentDiagram';

const AgentOrchestration = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="md:flex md:items-center md:space-x-12">
        <div className="md:w-1/2 mb-10 md:mb-0 glass-card p-8 rounded-2xl">
          <div className="inline-flex items-center space-x-2 bg-sirius-500/10 rounded-lg px-3 py-1 mb-6">
            <CpuIcon className="w-5 h-5 text-sirius-400" />
            <span className="text-sm font-medium text-sirius-400">AI Orchestration</span>
          </div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-sirius-200 to-sirius-400 text-transparent bg-clip-text mb-6">
            Autonomously Handle Complex Workflows Like a Cosmic Symphony
          </h2>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Our platform enables autonomous coordination between specialized AI agents. Together, they form a self-managing system that handles complex workflows with minimal human oversight.
          </p>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            From data analysis to decision making, our autonomous multi-agent system works in harmony to deliver results that are light-years ahead of traditional solutions requiring constant manual intervention.
          </p>
          
          <Button 
            className="group flex items-center space-x-2 bg-sirius-500 hover:bg-sirius-600 transition-all duration-300"
          >
            <span>Explore Solutions</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="md:w-1/2 glass-card p-6 rounded-2xl bg-space-900/40 backdrop-blur-sm border border-white/10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sirius-500/20 to-transparent rounded-xl" />
            <MultiAgentDiagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentOrchestration;
