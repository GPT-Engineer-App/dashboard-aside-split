import DashboardAside from "./DashboardAside";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-white">
      <DashboardAside />
      <MainContent />
      <RightSidebar />
    </div>
  );
};

export default Dashboard;