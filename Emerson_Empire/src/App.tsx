import './App.css'
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./Components/MainRender/EmpireLanding'));
const Agency = lazy(() => import('./Components/MainRender/Agency'));
const ProfessionalDevelopment = lazy(() => import('./Components/MainRender/ProffeionalDevelopment'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/epdg" element={<ProfessionalDevelopment />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
