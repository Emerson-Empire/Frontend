import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

// Example pages
const Overview = () => <h1>Overview Page</h1>;
const Checkins = () => <h1>Check-ins Page</h1>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Dashboard layout route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested routes rendered inside <Outlet /> */}
          <Route index element={<Overview />} />
          <Route path="checkins" element={<Checkins />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;