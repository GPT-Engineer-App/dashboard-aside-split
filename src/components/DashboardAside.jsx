import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  FileText,
  Headphones,
  Cog,
  Zap,
  Database,
  HardDrive,
  BarChart,
  Key,
  HelpCircle,
  MessageCircle
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Playground", path: "/playground", icon: LayoutDashboard },
  { name: "Chat", path: "/chat", icon: MessageSquare },
  { name: "Assistants", path: "/assistants", icon: Users },
  { name: "Completions", path: "/completions", icon: FileText },
  { name: "Text to speech", path: "/text-to-speech", icon: Headphones },
  { name: "Assistants", path: "/assistants-2", icon: Users },
  { name: "Fine-tuning", path: "/fine-tuning", icon: Cog },
  { name: "Batches", path: "/batches", icon: Zap },
  { name: "Storage", path: "/storage", icon: Database },
  { name: "Usage", path: "/usage", icon: BarChart },
  { name: "API keys", path: "/api-keys", icon: Key },
];

const DashboardAside = () => {
  return (
    <aside className="w-64 bg-background border-r h-screen flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "hover:bg-secondary/50"
                  )
                }
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <NavLink to="/forum" className="block mb-2">
          <Button variant="ghost" className="w-full justify-start">
            <MessageCircle className="mr-2 h-5 w-5" />
            Forum
          </Button>
        </NavLink>
        <NavLink to="/help">
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="mr-2 h-5 w-5" />
            Help
          </Button>
        </NavLink>
      </div>
    </aside>
  );
};

export default DashboardAside;