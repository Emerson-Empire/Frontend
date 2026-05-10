 import React from 'react'
import { About, Call, CookieConsent, FAQ, EmpireTeamTrusted, Feature, Footer, Hero, Navbar, Test, Works } from '../Umbrella';
// import StatStrip from '../Umbrella/Statstrip';
 
 
 
 const HomePage:React.FC = () => {
   return (
     <div> 
        <Navbar/>
        <Hero/>
        <EmpireTeamTrusted/>
       
 <About/>
{/* <StatStrip/>  */}
<Feature/>
<Works/>
<Test/>
 <FAQ/>
{/*

<Price/> */}
<Call/>
  <Footer/>
  <CookieConsent />
     </div>
   )
 }
 
 export default HomePage