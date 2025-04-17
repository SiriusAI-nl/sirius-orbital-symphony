
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className }) => {
  return (
    <Card className={cn(
      "glass-card p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(115,102,215,0.2)] group",
      className
    )}>
      <div className="space-y-4">
        <div className="w-12 h-12 bg-sirius-500/10 rounded-full flex items-center justify-center text-sirius-400 group-hover:text-white group-hover:bg-sirius-500 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
