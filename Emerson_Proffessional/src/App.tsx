import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Login = lazy(() => import("./components/Credential/Login"));
const SignUp = lazy(() => import("./components/Credential/SignUp"));

const Overview = () => <h1>Overview Page</h1>;
const Checkins = () => <h1>Check-ins Page</h1>;

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<Login />} />
          <Route path='/Signup' element={<SignUp/>}/>
          {/* Dashboard layout route */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* Nested routes rendered inside <Outlet /> */}
            <Route index element={<Overview />} />
            <Route path="checkins" element={<Checkins />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;