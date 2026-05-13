import { Outlet } from  "react-router-dom"
import { Navbar } from "./index";

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-[#F5F5F5] min-h-screen overflow-hidden">
      {/* Sidebar/Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;