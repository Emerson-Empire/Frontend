import './App.css'
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/MainRender/EmpireLanding';

// Other pages are lazy — they benefit from code splitting since they're never
// visited on the same session as the home page.
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
