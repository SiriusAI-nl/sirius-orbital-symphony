
import React from 'react';
import { Database, TrendingUp, Sparkles } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

interface ResearchResultsProps {
  isLoading: boolean;
  researchResults: string;
  websites: string[];
}

const ResearchResults = ({ isLoading, researchResults, websites }: ResearchResultsProps) => {
  return (
    <Card className="h-full overflow-hidden bg-space-800/40 backdrop-blur-sm border-border/50">
      <ScrollArea className="h-full">
        <CardContent className="p-6">
          {isLoading ? (
            <div className="py-20 flex flex-col items-center justify-center">
              <div className="h-12 w-12 rounded-full border-4 border-t-sirius-500 border-sirius-500/30 animate-spin mb-4"></div>
              <h3 className="text-xl font-medium text-white">Analyzing Data</h3>
              <p className="text-gray-400 mt-2">Our LLM research agents are conducting deep analysis...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-sirius-400" />
                <h3 className="text-lg font-medium text-white">Research Analysis</h3>
              </div>
              <div className="prose prose-invert max-w-none mb-6">
                <pre className="bg-space-900/50 p-4 rounded-lg overflow-auto text-sm border border-border/50">
                  {researchResults}
                </pre>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Database className="w-5 h-5 text-sirius-400" />
                    <h3 className="text-md font-medium text-white">Data Sources</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {websites.slice(0, 6).map((website, i) => (
                      <div key={i} className="bg-space-900/50 p-2 rounded-lg flex items-center text-sm border border-border/50">
                        <span className="truncate">{website}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-sirius-400" />
                    <h3 className="text-md font-medium text-white">Market Trends</h3>
                  </div>
                  <div className="space-y-2">
                    {Array.from({length: 3}).map((_, i) => (
                      <div key={i} className="bg-space-900/50 p-3 rounded-lg border border-border/50">
                        <div className="font-medium text-sm">Trend {i+1}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {["Increasing market adoption", "Shifting consumer preferences", "Technological innovation"][i]}
                        </div>
                        <div className="mt-2 h-2 bg-space-800/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-sirius-500 rounded-full" 
                            style={{ width: `${Math.floor(Math.random() * 60) + 30}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default ResearchResults;
