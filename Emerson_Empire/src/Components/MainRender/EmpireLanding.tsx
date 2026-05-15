import React from 'react'
import { Helmet } from 'react-helmet-async'
import { About, Call, CookieConsent, Divisions, EmpireTeamTrusted, Footer, Hero, Navbar, SuccessStories } from '../Umbrella';
import Testimonials from '../Umbrella/Testimonials';
 
 
 
const HomePage:React.FC = () => {
   return (
     <div>
       <Helmet>
         <title>The Emerson Empire | Agency & Professional Development</title>
         <meta name="description" content="The Emerson Empire — building pathways for professional growth, business development, financial education, and global opportunity." />
         <meta property="og:title" content="The Emerson Empire | Agency & Professional Development" />
         <meta property="og:description" content="Building pathways for professional growth, business development, financial education, and global opportunity." />
         <meta property="og:type" content="website" />
       </Helmet>
        <Navbar/>
        <Hero/>
        <Divisions/>
      

        <EmpireTeamTrusted/>
        <About/>
 <Testimonials/>
<SuccessStories/>

{/*

<Price/> */}
<Call/>
  <Footer/>
  <CookieConsent />
     </div>
   )
 }
 
 export default HomePage