import { Outlet } from 'react-router-dom';
import { Navbar } from './index';

const Dashboard: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar /> {/* persistent UI */}

      <main>
        <Outlet /> {/* dynamic route content */}
      </main>
    </div>
  );
};

export default Dashboard;