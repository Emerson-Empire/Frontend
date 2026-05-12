import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/MainRender/EmpireLanding';
import Agency from './Components/MainRender/Agency';
import ProfessionalDevelopment from './Components/MainRender/ProffeionalDevelopment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/epdg" element={<ProfessionalDevelopment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
