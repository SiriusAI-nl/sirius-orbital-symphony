
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface NeuralNodeProps {
  x: number;
  y: number;
  label: string;
  size?: number;
  className?: string;
  color?: string;
}

const NeuralNode: React.FC<NeuralNodeProps> = ({ 
  x, y, label, size = 50, className, color = "from-sirius-400 to-sirius-600"
}) => {
  const [animationDelay, setAnimationDelay] = useState("0s");
  const [animationDuration, setAnimationDuration] = useState("6s");
  
  useEffect(() => {
    setAnimationDelay(`${Math.random() * 5}s`);
    setAnimationDuration(`${5 + Math.random() * 3}s`);
  }, []);

  return (
    <div 
      className={cn(
        "absolute flex flex-col items-center animate-float", 
        className
      )} 
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        animationDelay, 
        animationDuration 
      }}
    >
      <div 
        className={cn(
          "rounded-full bg-gradient-to-br flex items-center justify-center text-white font-medium shadow-lg relative z-10",
          color
        )}
        style={{ width: size, height: size }}
      >
        {label.substring(0, 2)}
        <div className="absolute w-full h-full rounded-full border-2 border-white/10 animate-pulse-soft"></div>
      </div>
      <span className="text-xs text-white mt-2 font-medium whitespace-nowrap">{label}</span>
    </div>
  );
};

interface NeuralConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  animated?: boolean;
  pulseColor?: string;
  width?: number;
}

const NeuralConnection: React.FC<NeuralConnectionProps> = ({ 
  startX, startY, endX, endY, animated = false, pulseColor = "bg-sirius-300", width = 2
}) => {
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  
  return (
    <div 
      className={cn(
        "absolute h-[2px] bg-gradient-to-r from-white/20 to-white/5",
        animated && "after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:animate-orbit"
      )} 
      style={{ 
        width: `${distance}%`, 
        left: `${startX}%`, 
        top: `${startY}%`, 
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 0',
        height: `${width}px`,
      }}
    >
      {animated && 
        <div 
          className={cn("absolute w-[6px] h-[6px] rounded-full", pulseColor)}
          style={{
            animationDuration: `${8 + Math.random() * 12}s`, 
            animationDelay: `${Math.random() * 4}s`
          }}
        />
      }
    </div>
  );
};

const MultiAgentDiagram: React.FC = () => {
  // Colors for different node types (faded palette)
  const nodeColors = {
    orchestrator: "from-sirius-400/90 to-sirius-600/90",
    data: "from-blue-400/70 to-blue-500/70",
    planning: "from-purple-400/70 to-purple-500/70",
    reasoning: "from-amber-400/70 to-amber-500/70",
    output: "from-emerald-400/70 to-emerald-500/70",
    memory: "from-rose-400/70 to-rose-500/70",
    knowledge: "from-cyan-400/70 to-cyan-500/70"
  };
  
  // Connection pulse colors
  const pulseColors = {
    data: "bg-blue-300",
    planning: "bg-purple-300",
    reasoning: "bg-amber-300",
    output: "bg-emerald-300",
    memory: "bg-rose-300",
    knowledge: "bg-cyan-300"
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Central orchestrator */}
      <NeuralNode x={50} y={50} label="Orchestrator" size={70} className="z-20" color={nodeColors.orchestrator} />
      
      {/* Surrounding agents */}
      <NeuralNode x={30} y={30} label="Data Agent" color={nodeColors.data} />
      <NeuralNode x={70} y={30} label="Planning Agent" color={nodeColors.planning} />
      <NeuralNode x={30} y={70} label="Reasoning Agent" color={nodeColors.reasoning} />
      <NeuralNode x={70} y={70} label="Output Agent" color={nodeColors.output} />
      <NeuralNode x={20} y={50} label="Memory Agent" color={nodeColors.memory} />
      <NeuralNode x={80} y={50} label="Knowledge Agent" color={nodeColors.knowledge} />
      
      {/* Additional nodes for neural network effect */}
      <NeuralNode x={40} y={20} label="Parser" size={35} color={nodeColors.data} />
      <NeuralNode x={60} y={20} label="Validator" size={35} color={nodeColors.planning} />
      <NeuralNode x={15} y={35} label="Cache" size={35} color={nodeColors.memory} />
      <NeuralNode x={85} y={35} label="Search" size={35} color={nodeColors.knowledge} />
      <NeuralNode x={45} y={80} label="Logic" size={35} color={nodeColors.reasoning} />
      <NeuralNode x={55} y={80} label="Format" size={35} color={nodeColors.output} />
      
      {/* Neural connections */}
      <NeuralConnection startX={50} startY={50} endX={30} endY={30} animated pulseColor={pulseColors.data} />
      <NeuralConnection startX={50} startY={50} endX={70} endY={30} animated pulseColor={pulseColors.planning} />
      <NeuralConnection startX={50} startY={50} endX={30} endY={70} animated pulseColor={pulseColors.reasoning} />
      <NeuralConnection startX={50} startY={50} endX={70} endY={70} animated pulseColor={pulseColors.output} />
      <NeuralConnection startX={50} startY={50} endX={20} endY={50} animated pulseColor={pulseColors.memory} />
      <NeuralConnection startX={50} startY={50} endX={80} endY={50} animated pulseColor={pulseColors.knowledge} />
      
      {/* Additional connections for neural network complexity */}
      <NeuralConnection startX={30} startY={30} endX={40} endY={20} width={1} />
      <NeuralConnection startX={70} startY={30} endX={60} endY={20} width={1} />
      <NeuralConnection startX={20} startY={50} endX={15} endY={35} width={1} />
      <NeuralConnection startX={80} startY={50} endX={85} endY={35} width={1} />
      <NeuralConnection startX={30} startY={70} endX={45} endY={80} width={1} />
      <NeuralConnection startX={70} startY={70} endX={55} endY={80} width={1} />
      
      {/* Cross connections */}
      <NeuralConnection startX={40} startY={20} endX={60} endY={20} width={1} />
      <NeuralConnection startX={15} startY={35} endX={30} endY={30} width={1} />
      <NeuralConnection startX={85} startY={35} endX={70} endY={30} width={1} />
      <NeuralConnection startX={45} startY={80} endX={55} endY={80} width={1} />
    </div>
  );
};

export default MultiAgentDiagram;
