 import React from 'react'
import {   About, Call, EmpireTeamTrusted, FAQ, Feature, Footer, Hero, Navbar,Price,Test,Works} from '../Umbrella';
import StatStrip from '../Umbrella/Statstrip';
 
 
 
 const HomePage:React.FC = () => {
   return (
     <div> 
        <Navbar/>
        <Hero/>
        <EmpireTeamTrusted/>
       
<About/>
<StatStrip/>
<Feature/>
<Works/>
<Test/>
<FAQ/>
<Price/>
<Call/>
  <Footer/> 
    
     </div>
   )
 }
 
 export default HomePage