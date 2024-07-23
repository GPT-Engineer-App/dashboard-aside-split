import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navItems } from "@/nav-items";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col">
      <nav className="flex-1 overflow-y-auto p-4">
        {navItems.map((item) => (
          <div key={item.to} className="mb-1">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
            {item.subItems && (
              <div className="ml-6 mt-1">
                {item.subItems.map((subItem) => (
                  <NavLink
                    key={subItem.to}
                    to={subItem.to}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-sm",
                        isActive
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      )
                    }
                  >
                    {subItem.icon}
                    <span>{subItem.title}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;