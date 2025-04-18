
import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  messages: Message[];
  messageInput: string;
  isLoading: boolean;
  onMessageSubmit: (e: React.FormEvent) => void;
  onMessageInputChange: (value: string) => void;
}

const ChatInterface = ({
  messages,
  messageInput,
  isLoading,
  onMessageSubmit,
  onMessageInputChange,
}: ChatInterfaceProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full bg-space-800/40 backdrop-blur-sm border-border/50 rounded-lg border">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-sirius-500/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-sirius-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Welcome to SiriusAI</h3>
              <p className="text-gray-400 max-w-md">
                Start a conversation to generate marketing research insights
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3/4 rounded-lg p-3 ${
                    message.type === 'user' 
                      ? 'bg-sirius-500 text-white' 
                      : 'bg-space-800/60 text-white'
                  }`}
                >
                  <div className="text-sm mb-1">{message.content}</div>
                  <div className="text-xs opacity-70 text-right">{formatTime(message.timestamp)}</div>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-space-800/60 text-white rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-sirius-400 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-sirius-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-sirius-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t border-border/50">
        <form onSubmit={onMessageSubmit} className="flex space-x-2">
          <Input
            placeholder="Ask a follow-up question..."
            value={messageInput}
            onChange={(e) => onMessageInputChange(e.target.value)}
            className="flex-1 bg-space-800/50 border-border/50"
          />
          <Button type="submit" size="icon" disabled={isLoading || !messageInput.trim()} className="bg-sirius-500 hover:bg-sirius-600">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
