import { type FC, lazy, Suspense } from "react";
import Navbar from "./EPDGNavbar";
import Hero from "./EPDGHero";
import WhoWeHelp from "./WhoWeHelp";
import BusinessSupport from "./BusinessSupport";
import Reviews from "./Reviews";
import About from "./About";
import FinancialEducation from "./FinancialEducation";
import AgencyFAQ from "./EPDGFAQ";
import Contact from "./Contact";
import Footer from "./Footer";

// three.js + @react-three are ~1.5 MB — lazy-load so they never block LCP
const GlobalNetwork = lazy(() => import("./GlobalNetwork"));

const EPDGLanding: FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <BusinessSupport />
      <Reviews />
      <Suspense fallback={<div className="bg-slate-950 w-full h-135" />}>
        <GlobalNetwork />
      </Suspense>
      <About />
      <FinancialEducation />
      <AgencyFAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default EPDGLanding;
