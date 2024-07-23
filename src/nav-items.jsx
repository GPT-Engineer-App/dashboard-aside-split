import { LayoutDashboard, MessageSquare, Users } from "lucide-react";
import Index from "./pages/Index.jsx";
import Playground from "./pages/Playground.jsx";
import Chat from "./pages/Chat.jsx";
import Assistants from "./pages/Assistants.jsx";
import Usage from "./pages/Usage.jsx";
import ApiKeys from "./pages/ApiKeys.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Playground",
    to: "/playground",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Playground />,
    subItems: [
      {
        title: "Chat",
        to: "/playground/chat",
        icon: <MessageSquare className="h-4 w-4" />,
        page: <Chat />,
      },
      {
        title: "Assistants",
        to: "/playground/assistants",
        icon: <Users className="h-4 w-4" />,
        page: <Assistants />,
      },
    ],
  },
  {
    title: "Usage",
    to: "/usage",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Usage />,
  },
  {
    title: "API Keys",
    to: "/api-keys",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <ApiKeys />,
  },
];