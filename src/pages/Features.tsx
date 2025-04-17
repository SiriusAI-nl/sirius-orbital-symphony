
import React from 'react';
import { RocketIcon } from 'lucide-react';
import { 
  BrainCircuitIcon, 
  CpuIcon,
  LineChartIcon, 
  MessagesSquareIcon,
  ShieldCheckIcon,
  WandSparklesIcon
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ConstellationBackground from '@/components/ConstellationBackground';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const Features = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ConstellationBackground />
      <Navbar />
      
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
              <RocketIcon className="w-6 h-6 text-sirius-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Platform Features</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Our platform offers everything you need to automate your workflows with multi-agent orchestration.
              Explore the full range of capabilities that make Sirius AI Solutions different.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Intelligent Agents"
              description="Create and deploy specialized AI agents for different tasks. Each agent can be fine-tuned for optimal performance."
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
              description="Keep your data safe with enterprise-grade security features and compliance controls built into the platform."
              icon={<ShieldCheckIcon className="w-5 h-5" />}
            />
            <FeatureCard
              title="Advanced Analytics"
              description="Track performance metrics for all your agents and workflows with our comprehensive analytics dashboard."
              icon={<LineChartIcon className="w-5 h-5" />}
            />
            <FeatureCard
              title="Multi-Language Support"
              description="Our agents can understand and process content in multiple languages, enabling global operations."
              icon={<MessagesSquareIcon className="w-5 h-5" />}
            />
            <FeatureCard
              title="Custom Integrations"
              description="Connect with your existing tools and platforms through our extensive API and pre-built integrations."
              icon={<CpuIcon className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;
