import type { FC } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhoWeHelp from "./WhoWeHelp";
import BusinessSupport from "./BusinessSupport";
import Reviews from "./Reviews";
import About from "./About";
import FinancialEducation from "./FinancialEducation";
import AgencyFAQ from "./AgencyFAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const Agency: FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <BusinessSupport />
      <Reviews />
      <About />
      <FinancialEducation />
      <AgencyFAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Agency;
