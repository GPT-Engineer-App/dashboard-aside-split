import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../../nav-items";
import { SidebarNavLink } from "./SidebarNavLink";

export const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </NavLink>
        {navItems.map((item) => (
          <div key={item.to}>
            <SidebarNavLink to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
            {item.subItems && (
              <div className="ml-4 mt-1">
                {item.subItems.map((subItem) => (
                  <SidebarNavLink key={subItem.to} to={subItem.to}>
                    {subItem.icon}
                    {subItem.title}
                  </SidebarNavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);