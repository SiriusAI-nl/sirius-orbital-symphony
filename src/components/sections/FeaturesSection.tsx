
import React from 'react';
import { RocketIcon, BrainCircuitIcon, CpuIcon, LineChartIcon, MessagesSquareIcon, ShieldCheckIcon, WandSparklesIcon } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-10">
        <div className="inline-block p-1.5 bg-sirius-500/10 rounded-lg mb-2">
          <RocketIcon className="w-5 h-5 text-sirius-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Key Features</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our platform offers everything you need to automate your workflows with multi-agent orchestration.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Intelligent Agents"
          description="Create and deploy specialized AI agents for different tasks."
          icon={<BrainCircuitIcon className="w-5 h-5" />}
        />
        <FeatureCard
          title="Seamless Orchestration"
          description="Coordinate multiple agents to work together on complex tasks with our advanced orchestration engine."
          icon={<CpuIcon className="w-5 h-5" />}
        />
        <FeatureCard
          title="Workflow Automation"
          description="Build automated workflows that leverage multiple agents to complete tasks with minimal human intervention."
          icon={<LineChartIcon className="w-5 h-5" />}
        />
        <FeatureCard
          title="Agent Communication"
          description="Enable natural communication between agents to share information and collaboratively solve problems."
          icon={<MessagesSquareIcon className="w-5 h-5" />}
        />
        <FeatureCard
          title="Customizable Templates"
          description="Start quickly with pre-built agent templates and workflows for common business scenarios."
          icon={<WandSparklesIcon className="w-5 h-5" />}
        />
        <FeatureCard
          title="Enterprise Security"
          description="Keep your data safe with enterprise-grade security features and compliance controls."
          icon={<ShieldCheckIcon className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
