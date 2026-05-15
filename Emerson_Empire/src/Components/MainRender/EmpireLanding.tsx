import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Umbrella/Navbar';
import Hero from '../Umbrella/Hero';
import Divisions from '../Umbrella/Divisions';
import EmpireTeamTrusted from '../Umbrella/Empiretrusted';
import About from '../Umbrella/About';
import Testimonials from '../Umbrella/Testimonials';
import SuccessStories from '../Umbrella/SuccessStories';
import Call from '../Umbrella/CTA';
import Footer from '../Umbrella/Footer';
import CookieConsent from '../Umbrella/CookieConsent';

// framer-motion lives in its own manualChunk ('framer') and is modulepreloaded,
// so it downloads in parallel and does NOT block Hero or Navbar from rendering.
// Keeping all sections eager here ensures they all render in one batch, which
// keeps Speed Index close to FCP instead of accumulating across lazy waterfalls.

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
        <Divisions />
        <EmpireTeamTrusted />
        <About />
        <Testimonials />
        <SuccessStories />
        <Call />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default HomePage;
