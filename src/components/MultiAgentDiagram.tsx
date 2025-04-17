
import React from 'react';
import { cn } from '@/lib/utils';

const Agent: React.FC<{ x: number; y: number; label: string; size?: number; className?: string }> = ({ 
  x, y, label, size = 50, className 
}) => {
  return (
    <div 
      className={cn(
        "absolute flex flex-col items-center animate-float", 
        className
      )} 
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        animationDelay: `${Math.random() * 2}s` 
      }}
    >
      <div 
        className="rounded-full bg-gradient-to-br from-sirius-400 to-sirius-600 flex items-center justify-center text-white font-medium shadow-lg relative z-10"
        style={{ width: size, height: size }}
      >
        {label.substring(0, 2)}
        <div className="absolute w-full h-full rounded-full border-2 border-sirius-300/30 animate-ping"></div>
      </div>
      <span className="text-xs text-white mt-2 font-medium whitespace-nowrap">{label}</span>
    </div>
  );
};

const Connection: React.FC<{ startX: number; startY: number; endX: number; endY: number; animated?: boolean }> = ({ 
  startX, startY, endX, endY, animated = false 
}) => {
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  
  return (
    <div 
      className={cn(
        "absolute h-[2px] bg-gradient-to-r from-sirius-500/70 to-sirius-400/30",
        animated && "after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:bg-sirius-300 after:rounded-full after:animate-orbit"
      )} 
      style={{ 
        width: `${distance}%`, 
        left: `${startX}%`, 
        top: `${startY}%`, 
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 0',
      }}
    />
  );
};

const MultiAgentDiagram: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Central orchestrator */}
      <Agent x={50} y={50} label="Orchestrator" size={70} className="z-20" />
      
      {/* Surrounding agents */}
      <Agent x={30} y={30} label="Data Agent" />
      <Agent x={70} y={30} label="Planning Agent" />
      <Agent x={30} y={70} label="Reasoning Agent" />
      <Agent x={70} y={70} label="Output Agent" />
      <Agent x={20} y={50} label="Memory Agent" />
      <Agent x={80} y={50} label="Knowledge Agent" />
      
      {/* Connections */}
      <Connection startX={50} startY={50} endX={30} endY={30} animated />
      <Connection startX={50} startY={50} endX={70} endY={30} animated />
      <Connection startX={50} startY={50} endX={30} endY={70} animated />
      <Connection startX={50} startY={50} endX={70} endY={70} animated />
      <Connection startX={50} startY={50} endX={20} endY={50} animated />
      <Connection startX={50} startY={50} endX={80} endY={50} animated />
    </div>
  );
};

export default MultiAgentDiagram;
