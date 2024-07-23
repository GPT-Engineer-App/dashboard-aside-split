import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Playground", path: "/playground" },
  { name: "Chat", path: "/chat" },
  { name: "Assistants", path: "/assistants" },
  { name: "Completions", path: "/completions" },
  { name: "Text to speech", path: "/text-to-speech" },
  { name: "Assistants", path: "/assistants-2" },
  { name: "Fine-tuning", path: "/fine-tuning" },
  { name: "Batches", path: "/batches" },
  { name: "Storage", path: "/storage" },
  { name: "Usage", path: "/usage" },
  { name: "API keys", path: "/api-keys" },
];

const DashboardAside = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive ? "bg-gray-200" : "hover:bg-gray-200"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <NavLink to="/forum" className="block p-2 hover:bg-gray-200">
          Forum
        </NavLink>
        <NavLink to="/help" className="block p-2 hover:bg-gray-200">
          Help
        </NavLink>
      </div>
    </aside>
  );
};

export default DashboardAside;