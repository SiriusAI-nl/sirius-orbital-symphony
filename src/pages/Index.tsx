
import React from 'react';
import Navbar from '@/components/Navbar';
import ConstellationBackground from '@/components/ConstellationBackground';
import WorkflowAutomation from '@/components/WorkflowAutomation';
import PricingCard from '@/components/PricingCard';
import Footer from '@/components/Footer';
import MarketResearchHero from '@/components/sections/MarketResearchHero';
import AgentOrchestration from '@/components/sections/AgentOrchestration';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ConstellationBackground />
      <Navbar />
      
      <section id="market-research" className="py-12 md:py-16 relative">
        <MarketResearchHero />
      </section>

      <section id="solutions" className="py-12 md:py-16 relative">
        <AgentOrchestration />
      </section>

      <section id="workflow" className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <WorkflowAutomation />
        </div>
      </section>
      
      <section id="features" className="py-10 md:py-14 relative">
        <FeaturesSection />
      </section>
      
      <section id="pricing" className="py-12 md:py-16 relative">
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
      
      <section className="py-12 md:py-16 relative">
        <CTASection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
