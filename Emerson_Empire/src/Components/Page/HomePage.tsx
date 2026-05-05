 import React from 'react'
import { AppCard, Auth, Footer, Navbar, Statstrip } from '../Umbrella';
import HeroSection from '../Umbrella/HeroSection';
 
 const HomePage:React.FC = () => {
   return (
     <div> 
        <Navbar/>
        <HeroSection/>
<AppCard/>
     <Statstrip/> 
   <Auth/> 
  <Footer/> 
    
     </div>
   )
 }
 
 export default HomePage