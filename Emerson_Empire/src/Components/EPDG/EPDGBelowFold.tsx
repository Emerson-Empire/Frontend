import React from 'react';
import Footer from './AllEpdg/Footer';
import GlobalNetwork from './AllEpdg/GlobalNetwork';
import Reviews from './AllEpdg/Reviews';
// import SuccessStories from './AllEpdg/SuccessStories';
import PremiumServices from './AllEpdg/PremiumServices';
import About from './AllEpdg/About';
import Contact from './AllEpdg/Contact';
 import EPDGFAQ from'./AllEpdg/EPDGFAQ'
import WhoWeHelp from './AllEpdg/WhoWeHelp';
import Howitworks from './AllEpdg/Howitworks';
 

const EPDGBelowFold: React.FC = () => {
  return <>
  
  <WhoWeHelp/>
  <Howitworks/>
  {/* <SuccessStories/> */}
  <Reviews/>
  <PremiumServices/>
  <GlobalNetwork/>
  <About/>
  <EPDGFAQ/>
  <Contact/>
  <Footer/></>;
};

export default EPDGBelowFold;
