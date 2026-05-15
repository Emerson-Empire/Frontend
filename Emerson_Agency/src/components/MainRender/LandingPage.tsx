import React from "react";

import {
  Navbar,
  Hero,
  Service,
  Contact,
  Footer,
} from "../index";

const LandingPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#F5F5F5]">
      <Navbar />
      <Hero />
      <Service />
      <Contact />
      <Footer />
    </main>
  );
};

export default LandingPage;