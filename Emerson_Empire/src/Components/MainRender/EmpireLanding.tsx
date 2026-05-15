import React from 'react'
import { Helmet } from 'react-helmet-async'
import { About, Call, CookieConsent, Divisions, EmpireTeamTrusted, Footer, Hero, Navbar, SuccessStories } from '../Umbrella';
import Testimonials from '../Umbrella/Testimonials';
 
 
 
const HomePage:React.FC = () => {
   return (
     <div>
       <a href="#main-content" className="sr-only focus:not-sr-only focus:top-4 focus:left-4 focus:z-9999 focus:fixed focus:bg-[#12022A] focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:text-white focus:text-sm">Skip to main content</a>
       <Helmet>
         <title>The Emerson Empire | Agency & Professional Development</title>
         <meta name="description" content="The Emerson Empire — building pathways for professional growth, business development, financial education, and global opportunity." />
         <meta property="og:title" content="The Emerson Empire | Agency & Professional Development" />
         <meta property="og:description" content="Building pathways for professional growth, business development, financial education, and global opportunity." />
         <meta property="og:type" content="website" />
       </Helmet>
        <Navbar/>
        <main id="main-content">
        <Hero/>
        <Divisions/>
      

        <EmpireTeamTrusted/>
        <About/>
 <Testimonials/>
<SuccessStories/>

{/*

<Price/> */}
<Call/>
        </main>
  <Footer/>
  <CookieConsent />
     </div>
   )
 }
 
 export default HomePage