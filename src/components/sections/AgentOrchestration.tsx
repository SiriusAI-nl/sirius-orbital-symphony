
import React from 'react';
import { ArrowRightIcon, CpuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MultiAgentDiagram from '@/components/MultiAgentDiagram';

const AgentOrchestration = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="md:flex md:items-center md:space-x-12">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
            <CpuIcon className="w-6 h-6 text-sirius-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Orchestrate Multiple Agents Like a Cosmic Symphony</h2>
          <p className="text-lg text-gray-300 mb-6">
            Our platform enables seamless coordination between different AI agents, each specialized for specific tasks. Together, they form a powerful system that can handle complex workflows.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Whether you need data analysis, content generation, decision making, or all of the above, our multi-agent system works in harmony to deliver results that are light-years ahead of single-agent solutions.
          </p>
          <Button className="btn-primary flex items-center space-x-2">
            <span>Explore Solutions</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="md:w-1/2 glass-card p-4">
          <MultiAgentDiagram />
        </div>
      </div>
    </div>
  );
};

export default AgentOrchestration;
