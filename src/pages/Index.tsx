
import React from 'react';
import { 
  BrainCircuitIcon, 
  CpuIcon, 
  LineChartIcon, 
  MessagesSquareIcon, 
  RocketIcon, 
  ShieldCheckIcon, 
  WandSparklesIcon,
  ArrowRightIcon,
  BarChartIcon
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import ConstellationBackground from '@/components/ConstellationBackground';
import FeatureCard from '@/components/FeatureCard';
import MultiAgentDiagram from '@/components/MultiAgentDiagram';
import WorkflowAutomation from '@/components/WorkflowAutomation';
import PricingCard from '@/components/PricingCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ConstellationBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight gradient-text">
              Multi-Agent Orchestration That's Simply Out of This World
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Sirius AI helps you automate complex workflows with intelligent agents that work together in perfect harmony. Definitely not robots with GPP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
              <button className="btn-outline flex items-center justify-center space-x-2">
                <span>Book a Demo</span>
              </button>
            </div>
            <div className="mt-12 glass-card py-3 px-4 inline-block">
              <p className="text-sm text-gray-300">
                Trusted by organizations across the galaxy <span className="text-sirius-400 font-semibold">*mostly on Earth though</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
              <RocketIcon className="w-6 h-6 text-sirius-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform offers everything you need to automate your workflows with the power of multi-agent orchestration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Intelligent Agents"
              description="Create and deploy specialized AI agents for different tasks, each with their own capabilities and personalities."
              icon={<BrainCircuitIcon className="w-6 h-6" />}
            />
            <FeatureCard
              title="Seamless Orchestration"
              description="Coordinate multiple agents to work together on complex tasks with our advanced orchestration engine."
              icon={<CpuIcon className="w-6 h-6" />}
            />
            <FeatureCard
              title="Workflow Automation"
              description="Build automated workflows that leverage multiple agents to complete tasks with minimal human intervention."
              icon={<LineChartIcon className="w-6 h-6" />}
            />
            <FeatureCard
              title="Agent Communication"
              description="Enable natural communication between agents to share information and collaboratively solve problems."
              icon={<MessagesSquareIcon className="w-6 h-6" />}
            />
            <FeatureCard
              title="Customizable Templates"
              description="Start quickly with pre-built agent templates and workflows for common business scenarios."
              icon={<WandSparklesIcon className="w-6 h-6" />}
            />
            <FeatureCard
              title="Enterprise Security"
              description="Keep your data safe with enterprise-grade security features and compliance controls."
              icon={<ShieldCheckIcon className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* Multi-Agent Visualization Section */}
      <section id="solutions" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
                <BarChartIcon className="w-6 h-6 text-sirius-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Orchestrate Multiple Agents Like a Cosmic Symphony</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our platform enables seamless coordination between different AI agents, each specialized for specific tasks. Together, they form a powerful system that can handle complex workflows.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Whether you need data analysis, content generation, decision making, or all of the above, our multi-agent system works in harmony to deliver results that are light-years ahead of single-agent solutions.
              </p>
              <button className="btn-primary flex items-center space-x-2">
                <span>Explore Solutions</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2 glass-card p-4">
              <MultiAgentDiagram />
            </div>
          </div>
        </div>
      </section>
      
      {/* Workflow Section */}
      <section id="workflow" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <WorkflowAutomation />
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, no unexpected charges. Just like the answer to life, the universe, and everything, our pricing is straightforward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$42"
              description="Perfect for small teams and startups exploring AI automation."
              features={[
                { text: "5 AI Agents", included: true },
                { text: "Basic Orchestration", included: true },
                { text: "3 Concurrent Workflows", included: true },
                { text: "Email Support", included: true },
                { text: "Advanced Analytics", included: false },
                { text: "Custom Agent Creation", included: false },
                { text: "Priority Support", included: false },
              ]}
              buttonText="Start Free Trial"
            />
            
            <PricingCard
              title="Professional"
              price="$142"
              description="Ideal for growing businesses with complex automation needs."
              features={[
                { text: "20 AI Agents", included: true },
                { text: "Advanced Orchestration", included: true },
                { text: "10 Concurrent Workflows", included: true },
                { text: "Email & Chat Support", included: true },
                { text: "Advanced Analytics", included: true },
                { text: "Custom Agent Creation", included: true },
                { text: "Priority Support", included: false },
              ]}
              buttonText="Start Free Trial"
              isPopular={true}
            />
            
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For organizations needing maximum scale and customization."
              features={[
                { text: "Unlimited AI Agents", included: true },
                { text: "Enterprise Orchestration", included: true },
                { text: "Unlimited Concurrent Workflows", included: true },
                { text: "24/7 Premium Support", included: true },
                { text: "Advanced Analytics & Reporting", included: true },
                { text: "Custom Agent Development", included: true },
                { text: "Dedicated Account Manager", included: true },
              ]}
              buttonText="Contact Sales"
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              All plans include a 14-day free trial. No credit card required to start.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to orchestrate the future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the growing community of businesses using Sirius AI to automate complex workflows and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
              <button className="btn-outline flex items-center justify-center space-x-2">
                <span>Schedule Demo</span>
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              No credit card required. 14-day free trial. Don't forget your towel.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
