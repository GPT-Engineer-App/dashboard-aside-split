import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/sidebar";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route element={<Layout />}>
              {navItems.map((item) => (
                <Route key={item.to} path={item.to} element={item.page}>
                  {item.subItems?.map((subItem) => (
                    <Route
                      key={subItem.to}
                      path={subItem.to.split('/').pop()}
                      element={subItem.page}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;