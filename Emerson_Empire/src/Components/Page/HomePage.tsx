 import React from 'react'
import {   Call, FAQ, Feature, Footer, Hero, Navbar,Team, Test, TrustedBy, Works} from '../Umbrella';
import StatStrip from '../Umbrella/Statstrip';
 
 
 
 const HomePage:React.FC = () => {
   return (
     <div> 
        <Navbar/>
        <Hero/>
        <TrustedBy/>
<Team/>
<StatStrip/>
<Feature/>
<Works/>
<Test/>
<FAQ/>
<Call/>
  <Footer/> 
    
     </div>
   )
 }
 
 export default HomePage