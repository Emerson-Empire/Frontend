import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
 import EPDGHero from "../EPDG/AllEpdg/EPDGHero.tsx"
import EPDGNavbar from '../EPDG/AllEpdg/EPDGNavbar.tsx';
// All below-fold sections are split into one single lazy chunk (BelowFold).
// This keeps the initial bundle tiny (Hero + Navbar only) for fast FCP/LCP,
// while all sections render in one batch — no progressive visual stacking
// that inflates Speed Index.
const BelowFold = lazy(() => import('.././EPDG/EPDGBelowFold'));

const ProfessionalDevelopment: React.FC = () => {
  return (
    <div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:top-4 focus:left-4 focus:z-9999 focus:fixed focus:bg-[#12022A] focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:text-white focus:text-sm"
      >
        Skip to main content
      </a>
      <Helmet>
        <title>The Emerson Empire | Agency &amp; Professional Development</title>
        <meta name="description" content="The Emerson Empire — building pathways for professional growth, business development, financial education, and global opportunity." />
        <meta property="og:title" content="The Emerson Empire | Agency & Professional Development" />
        <meta property="og:description" content="Building pathways for professional growth, business development, financial education, and global opportunity." />
        <meta property="og:type" content="website" />
      </Helmet>

   
<EPDGNavbar/>
      <main id="main-content" className="mt-25">
     <EPDGHero/>
        {/* Heavy content delayed */}
      <Suspense fallback={<div>Loading...</div>}>
        <BelowFold />
      </Suspense>
      </main>
    </div>
  );
};

 
export default ProfessionalDevelopment
