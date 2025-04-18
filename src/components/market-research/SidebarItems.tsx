
import React from 'react';
import { Activity, Users, TrendingUp, BarChart2, Layers, FileText, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
} from '@/components/ui/sidebar';

interface ChatHistory {
  id: number;
  title: string;
  date: string;
}

interface SidebarItemsProps {
  chatHistory: ChatHistory[];
  openSections: {
    pipeline: boolean;
    history: boolean;
  };
  onSectionToggle: (section: 'pipeline' | 'history') => void;
  activeSession: number | null;
  onSessionSelect: (id: number) => void;
}

const SidebarItems = ({
  chatHistory,
  openSections,
  onSectionToggle,
  activeSession,
  onSessionSelect,
}: SidebarItemsProps) => {
  const menuItems = [
    { 
      title: 'Research Pipeline', 
      icon: <Activity className="mr-2 h-5 w-5 text-sirius-400" />,
      items: [
        { label: 'Keywords', icon: <Activity className="mr-2 h-4 w-4 text-sirius-400" /> },
        { label: 'Competition', icon: <Users className="mr-2 h-4 w-4 text-sirius-400" /> },
        { label: 'Trends', icon: <TrendingUp className="mr-2 h-4 w-4 text-sirius-400" /> },
        { label: 'Analysis', icon: <BarChart2 className="mr-2 h-4 w-4 text-sirius-400" /> },
        { label: 'Deep Research', icon: <Layers className="mr-2 h-4 w-4 text-sirius-400" /> },
        { label: 'Reports', icon: <FileText className="mr-2 h-4 w-4 text-sirius-400" /> }
      ]
    },
    {
      title: 'Chat History',
      icon: <MessageSquare className="mr-2 h-5 w-5 text-sirius-400" />,
      items: chatHistory
    }
  ];

  return (
    <div className="w-full">
      {menuItems.map((menuGroup, index) => (
        <SidebarGroup key={index} className="mb-4">
          <Collapsible 
            open={openSections[menuGroup.title === 'Research Pipeline' ? 'pipeline' : 'history']}
            onOpenChange={() => onSectionToggle(menuGroup.title === 'Research Pipeline' ? 'pipeline' : 'history')}
            className="w-full"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-base bg-space-800/40 hover:bg-space-800/60 rounded-lg transition-colors group">
              <div className="flex items-center">
                {menuGroup.icon}
                <span className="font-medium ml-2 text-white">{menuGroup.title}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-sirius-400 transition-transform group-data-[state=open]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenu>
                {menuGroup.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={itemIndex}>
                    {menuGroup.title === 'Research Pipeline' ? (
                      <SidebarMenuButton className="group/submenu relative hover:bg-space-800/40 rounded-lg transition-all duration-200">
                        <div className="flex items-center px-4 py-2">
                          {'icon' in item && item.icon}
                          <span className="ml-2 text-gray-200 group-hover/submenu:text-white transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-sirius-400 opacity-0 group-hover/submenu:opacity-100 transition-opacity" />
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton 
                        isActive={activeSession === item.id}
                        onClick={() => onSessionSelect(item.id)}
                        className={`flex items-center px-4 py-2 hover:bg-space-800/40 rounded-lg transition-all duration-200 ${
                          activeSession === item.id ? 'bg-space-800/60 text-white' : 'text-gray-300'
                        }`}
                      >
                        <MessageSquare className="mr-2 h-4 w-4 text-sirius-400" />
                        <div className="flex flex-col items-start">
                          <span className="text-sm truncate max-w-[180px]">{item.title}</span>
                          <span className="text-xs text-gray-400">{item.date}</span>
                        </div>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              
              {menuGroup.title === 'Chat History' && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 w-full text-gray-400 hover:text-white hover:bg-space-800/40 transition-colors"
                >
                  View all history 
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              )}
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      ))}
    </div>
  );
};

export default SidebarItems;
