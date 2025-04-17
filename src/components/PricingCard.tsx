
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  isPopular = false,
  className,
}) => {
  return (
    <Card className={cn(
      "glass-card overflow-hidden transition-all duration-300",
      isPopular ? "border-sirius-400 shadow-[0_0_30px_rgba(115,102,215,0.2)]" : "border-space-700",
      className
    )}>
      {isPopular && (
        <div className="bg-sirius-500 text-white text-xs font-semibold uppercase py-1.5 text-center">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="ml-1 text-gray-400">/month</span>}
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
        
        <div className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={cn(
                "flex-shrink-0 rounded-full p-1",
                feature.included ? "text-sirius-400" : "text-gray-500"
              )}>
                <CheckIcon className="h-4 w-4" />
              </div>
              <p className={cn(
                "ml-2 text-sm",
                feature.included ? "text-gray-200" : "text-gray-500 line-through"
              )}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <button className={cn(
            "w-full py-2.5 rounded-md font-medium transition-colors",
            isPopular ? "bg-sirius-500 hover:bg-sirius-600 text-white" : "border border-sirius-400 text-sirius-400 hover:bg-sirius-400/10"
          )}>
            {buttonText}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PricingCard;
