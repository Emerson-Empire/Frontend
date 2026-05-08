 import React from 'react'
import {   Footer, Hero, Navbar,Team, TrustedBy, } from '../Umbrella';
import StatStrip from '../Umbrella/Statstrip';
 
 
 const HomePage:React.FC = () => {
   return (
     <div> 
        <Navbar/>
        <Hero/>
        <TrustedBy/>
<Team/>
<StatStrip/>
  <Footer/> 
    
     </div>
   )
 }
 
 export default HomePage