
import React from 'react';
import { ArrowRightIcon, CheckCircle2Icon, RefreshCwIcon, BrainCircuitIcon } from 'lucide-react';

const WorkflowStep: React.FC<{ number: number; title: string; description: string; isLast?: boolean }> = ({ 
  number, title, description, isLast = false 
}) => {
  return (
    <div className="relative flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sirius-500 text-white font-bold">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-sirius-500 to-space-700 mt-2"></div>
        )}
      </div>
      <div className="pt-1 pb-8">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

const WorkflowAutomation: React.FC = () => {
  return (
    <div className="px-4 py-8 md:py-12 glass-card">
      <div className="mb-12 text-center">
        <div className="inline-block p-2 bg-sirius-500/10 rounded-lg mb-3">
          <RefreshCwIcon className="w-6 h-6 text-sirius-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Autonomous Workflow Automation</h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Our platform autonomously handles the entire workflow from input to output, making multi-agent orchestration almost as satisfying as a Pan Galactic Gargle Blaster.
        </p>
      </div>
      
      <div className="max-w-xl mx-auto">
        <WorkflowStep 
          number={1} 
          title="Define Your Goals" 
          description="Specify your desired outcomes, and let our autonomous system handle the complexity of task planning and execution."
        />
        
        <WorkflowStep 
          number={2} 
          title="Configure Agent Roles" 
          description="Select specialized agents that will autonomously collaborate to achieve your goals with minimal oversight needed."
        />
        
        <WorkflowStep 
          number={3} 
          title="Autonomous Communication" 
          description="Agents intelligently coordinate and adapt their interactions to optimize workflow execution - no manual orchestration required."
        />
        
        <WorkflowStep 
          number={4} 
          title="Monitor Progress" 
          description="Watch as your multi-agent system autonomously executes complex workflows through our real-time monitoring dashboard."
          isLast
        />
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="btn-primary flex items-center space-x-2">
          <span>Start Automating</span>
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default WorkflowAutomation;
