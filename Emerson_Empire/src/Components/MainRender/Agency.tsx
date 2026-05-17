import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import AgencyNavbar from '../Agency/ALLAgency/AgencyNavbar';
import AgencyHero from '../Agency/ALLAgency/AgencyHero';

const AgencyBelowFold = lazy(() => import('../Agency/AgencyBelowFold'));

const Agency: React.FC = () => {
  return (
    <div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:top-4 focus:left-4 focus:z-9999 focus:fixed focus:bg-[#12022A] focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:text-white focus:text-sm"
      >
        Skip to main content
      </a>

      <Helmet>
        <title>The Emerson Agency | Financial Services &amp; Business Consulting</title>
        <meta name="description" content="Professional financial support that finally feels personal — tax preparation, bookkeeping, and small business services for individuals, families, and entrepreneurs." />
        <meta property="og:title" content="The Emerson Agency | Financial Services & Business Consulting" />
        <meta property="og:description" content="Professional financial support that finally feels personal — tax preparation, bookkeeping, and small business services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <AgencyNavbar />

      <main id="main-content">
        <AgencyHero />
        <Suspense fallback={
          <div className="flex justify-center items-center bg-[#12022A] min-h-50">
            <div className="border-[#C9A84C] border-2 border-t-transparent rounded-full w-8 h-8 animate-spin" />
          </div>
        }>
          <AgencyBelowFold />
        </Suspense>
      </main>
    </div>
  );
};

export default Agency;
