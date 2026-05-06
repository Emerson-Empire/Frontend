 import React from 'react'
import { AppCard, Auth, Footer, Hero, Navbar, Statstrip, Team } from '../Umbrella';
import StatStrip from '../Umbrella/Statstrip';
 
 
 const HomePage:React.FC = () => {
   return (
     <div> 
        <Navbar/>
        <Hero/>
<Team/>
<StatStrip/>
  <Footer/> 
    
     </div>
   )
 }
 
 export default HomePage