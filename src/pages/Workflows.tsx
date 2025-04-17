
import React from 'react';
import { LineChartIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import ConstellationBackground from '@/components/ConstellationBackground';
import Footer from '@/components/Footer';
import WorkflowAutomation from '@/components/WorkflowAutomation';

const Workflows = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ConstellationBackground />
      <Navbar />
      
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
              <LineChartIcon className="w-6 h-6 text-sirius-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Workflow Automation</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Build intelligent workflows that leverage our AI agents to automate complex business processes with minimal human intervention.
            </p>
          </div>
          
          <WorkflowAutomation />
          
          <div className="text-center mt-12">
            <Button className="btn-primary flex items-center mx-auto">
              <span>Start Building Workflows</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Workflows;
