
import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
