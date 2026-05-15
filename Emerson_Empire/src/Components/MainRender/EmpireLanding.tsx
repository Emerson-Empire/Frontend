import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Umbrella/Navbar';
import Hero from '../Umbrella/Hero';

// Below-fold sections: lazy-loaded so framer-motion (132 kB) is NOT in the critical path.
// Hero + Navbar are eager because they contain the LCP image.
const Divisions        = lazy(() => import('../Umbrella/Divisions'));
const EmpireTeamTrusted = lazy(() => import('../Umbrella/Empiretrusted'));
const About            = lazy(() => import('../Umbrella/About'));
const Testimonials     = lazy(() => import('../Umbrella/Testimonials'));
const SuccessStories   = lazy(() => import('../Umbrella/SuccessStories'));
const Call             = lazy(() => import('../Umbrella/CTA'));
const Footer           = lazy(() => import('../Umbrella/Footer'));
const CookieConsent    = lazy(() => import('../Umbrella/CookieConsent'));

const HomePage: React.FC = () => {
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

      <Navbar />

      <main id="main-content">
        <Hero />
        <Suspense fallback={null}><Divisions /></Suspense>
        <Suspense fallback={null}><EmpireTeamTrusted /></Suspense>
        <Suspense fallback={null}><About /></Suspense>
        <Suspense fallback={null}><Testimonials /></Suspense>
        <Suspense fallback={null}><SuccessStories /></Suspense>
        <Suspense fallback={null}><Call /></Suspense>
      </main>

      <Suspense fallback={null}><Footer /></Suspense>
      <Suspense fallback={null}><CookieConsent /></Suspense>
    </div>
  );
};

export default HomePage;
