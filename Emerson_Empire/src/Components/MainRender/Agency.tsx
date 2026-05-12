import React from "react";

import {
  Navbar,
  Hero,
  WhoWeHelp,
  FinancialEducation,
  About,
  BusinessSupport,
  Reviews,
  Contact,
  Footer,
} from "../Agency";

const Agency: React.FC = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <FinancialEducation />
      <About />
      <BusinessSupport />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Agency;