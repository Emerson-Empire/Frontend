import type { FC } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhoWeHelp from "./WhoWeHelp";
import BusinessSupport from "./BusinessSupport";
import Reviews from "./Reviews";
import About from "./About";
import FinancialEducation from "./FinancialEducation";
import AgencyFAQ from "./EPDGFAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import GlobalNetwork from "./GlobalNetwork";

const EPDGLanding: FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <BusinessSupport />
      <Reviews />
      <GlobalNetwork />
      <About />
      <FinancialEducation />
      <AgencyFAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default EPDGLanding;
