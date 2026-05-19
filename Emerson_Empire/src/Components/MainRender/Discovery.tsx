import React, { useState } from "react";
import epdgLogo from "../../assets/EPDG_LOGO.webp";
import { Malik, wiltord, Hosea, Vincent, Matheous, bruno, lidi } from "../../assets";

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab = "talent" | "company";

type TalentCard = {
  id: number;
  name: string;
  role: string;
  location: string;
  skills: string[];
  available: boolean;
  image: string;
};

type CompanyCard = {
  id: number;
  name: string;
  industry: string;
  location: string;
  hiring: string[];
  openRoles: number;
  logo: string;
};

// ─── Placeholder data ─────────────────────────────────────────────────────────

const TALENT: TalentCard[] = [
  { id: 1, name: "Wiltord Kamdem",   role: "Front-End Developer",        location: "Remote · Cameroon",  skills: ["React", "TypeScript", "Tailwind"],   available: true,  image: wiltord   },
  { id: 2, name: "Malik Muhammad",   role: "Growth & Marketing Analyst", location: "Remote · Nigeria",   skills: ["SEO", "Analytics", "Meta Ads"],      available: true,  image: Malik     },
  { id: 3, name: "Lidi Nehmen",      role: "Leadership Fellow",          location: "Remote · Lebanon",   skills: ["Team Lead", "Strategy", "OKRs"],     available: false, image: lidi      },
  { id: 4, name: "Vincent Osei",     role: "Business Development",       location: "Remote · Ghana",     skills: ["B2B Sales", "CRM", "Outreach"],      available: true,  image: Vincent   },
  { id: 5, name: "Matheus Rocha",    role: "Data & Operations",          location: "Remote · Brazil",    skills: ["Python", "SQL", "Reporting"],        available: true,  image: Matheous  },
  { id: 6, name: "Hosea Kirimi",     role: "Product & UX Research",      location: "Remote · Kenya",     skills: ["Figma", "User Research", "Notion"],  available: false, image: Hosea     },
  { id: 7, name: "Bruno Ntanga",     role: "Finance & Accounting",       location: "Remote · Congo",     skills: ["Excel", "Budgeting", "QuickBooks"],  available: true,  image: bruno     },
];

const COMPANIES: CompanyCard[] = [
  { id: 1, name: "NovaTech Solutions",   industry: "Software & SaaS",       location: "United States",  hiring: ["React Dev", "QA Engineer"],          openRoles: 4,  logo: "NT" },
  { id: 2, name: "GlobalBridge Partners",industry: "Consulting",            location: "United Kingdom", hiring: ["Business Analyst", "Growth Lead"],    openRoles: 2,  logo: "GB" },
  { id: 3, name: "Meridian Capital",     industry: "Finance & Investment",  location: "UAE",            hiring: ["Financial Analyst", "Risk Manager"],  openRoles: 3,  logo: "MC" },
  { id: 4, name: "CreativeLoop Agency",  industry: "Marketing & Media",     location: "Canada",         hiring: ["Social Media Mgr", "Copywriter"],     openRoles: 5,  logo: "CL" },
  { id: 5, name: "DataSphere Inc.",      industry: "Data & Analytics",      location: "Germany",        hiring: ["Data Engineer", "BI Analyst"],        openRoles: 2,  logo: "DS" },
  { id: 6, name: "VenturePath Group",    industry: "Venture & Startups",    location: "Singapore",      hiring: ["Operations Lead", "BD Manager"],      openRoles: 3,  logo: "VP" },
];

const SKILL_FILTERS = ["All", "Tech", "Marketing", "Sales", "Finance", "Design", "Operations", "Leadership"];
const LOCATION_FILTERS = ["All Regions", "Africa", "Europe", "Americas", "Middle East", "Asia-Pacific"];

const NAV_LINKS = [
  { label: "Home",      href: "/discovery" },
  { label: "Programs",  href: "/#program" },
  { label: "About",     href: "/#about-us" },
  { label: "Reviews",   href: "/#reviews" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const TalentCardItem: React.FC<{ card: TalentCard }> = ({ card }) => (
  <div className="group flex flex-col bg-white shadow-sm hover:shadow-[0_16px_50px_-20px_rgba(75,30,145,0.2)] p-5 border border-slate-100 hover:border-purple-200 rounded-2xl transition-all duration-300">
    <div className="flex items-start gap-4 mb-4">
      <img
        src={card.image}
        alt={card.name}
        className="object-cover object-top rounded-xl w-14 h-14 shrink-0"
      /> <p className="group-hover:opacity-80 font-bold text-[12px] text-white sm:text-[15px] leading-tight transition-opacity duration-200">
            <span className="text-slate-300">EMERSON</span><br />PROFESSIONAL
          </p>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="font-bold text-[15px] text-slate-950 truncate leading-snug">{card.name}</p>
          <span className={`shrink-0 inline-block w-2 h-2 mt-1.5 rounded-full ${card.available ? "bg-emerald-400" : "bg-slate-300"}`} />
        </div>
        <p className="mt-0.5 text-[13px] text-slate-500 truncate">{card.role}</p>
        <p className="mt-0.5 text-[12px] text-slate-400">{card.location}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-1.5 mb-5">
      {card.skills.map((s) => (
        <span key={s} className="bg-slate-100 px-2.5 py-0.5 rounded-full font-medium text-[11px] text-slate-600">
          {s}
        </span>
      ))}
    </div>

    <div className="flex gap-2 mt-auto">
      <button className="flex-1 bg-[#4B1E91] hover:bg-[#3a1570] py-2 rounded-lg font-semibold text-[12px] text-white uppercase tracking-wider transition">
        Connect
      </button>
      <button className="px-3 py-2 border border-slate-200 hover:border-purple-300 rounded-lg text-[12px] text-slate-500 hover:text-purple-700 transition">
        View Profile
      </button>
    </div>
  </div>
);

const CompanyCardItem: React.FC<{ card: CompanyCard }> = ({ card }) => (
  <div className="group flex flex-col bg-white shadow-sm hover:shadow-[0_16px_50px_-20px_rgba(75,30,145,0.2)] p-5 border border-slate-100 hover:border-purple-200 rounded-2xl transition-all duration-300">
    <div className="flex items-start gap-4 mb-4">
      <div className="flex justify-center items-center bg-[#12022A] rounded-xl w-14 h-14 font-black text-[16px] text-white shrink-0">
        {card.logo}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[15px] text-slate-950 truncate leading-snug">{card.name}</p>
        <p className="mt-0.5 text-[13px] text-slate-500">{card.industry}</p>
        <p className="mt-0.5 text-[12px] text-slate-400">{card.location}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-1.5 mb-4">
      {card.hiring.map((role) => (
        <span key={role} className="bg-purple-50 px-2.5 py-0.5 border border-purple-100 rounded-full font-medium text-[11px] text-purple-700">
          {role}
        </span>
      ))}
    </div>

    <div className="flex items-center justify-between mb-5">
      <span className="text-[12px] text-slate-400">Open roles</span>
      <span className="font-bold text-[#4B1E91] text-[18px]">{card.openRoles}</span>
    </div>

    <div className="flex gap-2 mt-auto">
      <button className="flex-1 bg-[#4B1E91] hover:bg-[#3a1570] py-2 rounded-lg font-semibold text-[12px] text-white uppercase tracking-wider transition">
        View Roles
      </button>
      <button className="px-3 py-2 border border-slate-200 hover:border-purple-300 rounded-lg text-[12px] text-slate-500 hover:text-purple-700 transition">
        About
      </button>
    </div>
  </div>
);

// ─── Main page ────────────────────────────────────────────────────────────────

const Discovery: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("talent");
  const [search, setSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All Regions");

  const filteredTalent = TALENT.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || p.skills.some((s) => s.toLowerCase().includes(q));
    const matchSkill = skillFilter === "All" || p.skills.some((s) => s.toLowerCase().includes(skillFilter.toLowerCase()));
    return matchSearch && matchSkill;
  });

  const filteredCompanies = COMPANIES.filter((c) => {
    const q = search.toLowerCase();
    return !q || c.name.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q);
  });

  return (
    <div className="bg-[#F8F8FA] min-h-screen font-sans">

      {/* ── Navbar ───────────────────────────────────────────────────────────── */}
     <nav
      aria-label="Main navigation"
      className="top-0 z-50 fixed justify-center bg-[#12022A] mb-2 border-[#C9A84C]/20 border-b w-full h-25"
   >
        <div className="flex items-center justify-between w-full h-16 px-4 mx-auto sm:px-10 lg:px-16 max-w-7xl sm:h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={epdgLogo}
              alt="EPDG"
              width={44}
              height={44}
              className="object-contain w-10 h-10 transition-transform duration-200 sm:w-12 sm:h-12 group-hover:scale-105"
            />
            <span className="hidden sm:block font-bold text-[13px] text-white leading-tight tracking-wide">
              <span className="text-slate-300">EMERSON</span>
              <br />PROFESSIONAL
            </span>
          </a>

          {/* Desktop links */}
          <ul className="items-center hidden gap-6 p-0 m-0 list-none md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="font-semibold text-[13px] text-slate-400 hover:text-white uppercase tracking-widest transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Auth buttons */}
          <div className="items-center hidden gap-2 md:flex shrink-0">
            <a href="#" className="inline-flex items-center px-4 py-2 border border-slate-600 hover:border-white rounded-lg font-semibold text-[13px] text-slate-300 hover:text-white uppercase tracking-wider transition-colors">
              Log In
            </a>
            <a href="#" className="inline-flex items-center bg-white hover:bg-slate-200 px-4 py-2 rounded-lg font-bold text-[#081331] text-[13px] uppercase tracking-wider transition-colors">
              Sign Up
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 shadow-md shadow-white rounded-b-3xl w-10 h-10 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-[#12022A] px-4 pb-5 border-[#C9A84C]/15 border-t">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                className="py-3 border-[#C9A84C]/10 border-b font-medium text-[12px] text-white/60 hover:text-[#C9A84C] uppercase tracking-widest transition-colors">
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="inline-flex justify-center px-5 py-3 border border-slate-600 rounded-lg font-semibold text-[12px] text-slate-300 uppercase tracking-wider transition-colors">Log In</a>
              <a href="#" className="inline-flex justify-center bg-white px-5 py-3 rounded-lg font-bold text-[#081331] text-[12px] uppercase tracking-wider">Sign Up</a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero / Search ─────────────────────────────────────────────────────── */}
      <div className="bg-[#12022A] pt-16 sm:pt-20">
        <div className="px-4 mx-auto text-center sm:px-10 lg:px-16 py-14 sm:py-20 max-w-7xl">
          <span className="inline-block bg-[#4B1E91]/40 mb-4 px-4 py-1.5 border border-purple-500/30 rounded-full font-semibold text-[11px] text-purple-300 uppercase tracking-widest">
            Emerson Discovery
          </span>
          <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Global Talent.<br />
            <span className="text-[#C9A84C]">Connect With Opportunity.</span>
          </h1>
          <p className="max-w-xl mx-auto mb-10 text-base leading-relaxed text-slate-400 sm:text-lg">
            Browse verified EPDG alumni and international partner companies — built for remote-first careers.
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto">
            <span className="absolute -translate-y-1/2 pointer-events-none top-1/2 left-4 text-slate-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </span>
            <input
              type="search"
              placeholder={tab === "talent" ? "Search by name, role, or skill…" : "Search companies or industry…"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/10 py-4 pr-4 pl-12 border border-white/10 focus:border-purple-400 rounded-xl focus:outline-none w-full text-[15px] text-white transition placeholder-slate-500"
            />
          </div>
        </div>
      </div>

      {/* ── Tab bar ───────────────────────────────────────────────────────────── */}
      <div className="sticky z-40 bg-white border-b shadow-sm top-16 sm:top-20 border-slate-200">
        <div className="flex px-4 mx-auto sm:px-10 lg:px-16 max-w-7xl">
          {(["talent", "company"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setSearch(""); setSkillFilter("All"); }}
              className={`relative px-6 sm:px-8 py-4 font-bold text-[13px] uppercase tracking-widest transition-colors ${
                tab === t ? "text-[#4B1E91]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t === "talent" ? `Talent (${TALENT.length})` : `Companies (${COMPANIES.length})`}
              {tab === t && (
                <span className="bottom-0 left-0 absolute bg-[#4B1E91] rounded-t w-full h-0.5" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main layout ───────────────────────────────────────────────────────── */}
      <div className="px-4 py-8 mx-auto sm:px-10 lg:px-16 max-w-7xl">
        <div className="flex gap-8">

          {/* Sidebar filters */}
          <aside className="flex-col hidden w-56 gap-6 lg:flex shrink-0">
            <div className="p-5 bg-white border shadow-sm border-slate-100 rounded-2xl">
              <p className="mb-3 font-bold text-[12px] text-slate-950 uppercase tracking-widest">Category</p>
              <ul className="space-y-1">
                {SKILL_FILTERS.map((f) => (
                  <li key={f}>
                    <button
                      onClick={() => setSkillFilter(f)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-[13px] font-medium transition ${
                        skillFilter === f ? "bg-[#4B1E91]/10 text-[#4B1E91]" : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {f}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-white border shadow-sm border-slate-100 rounded-2xl">
              <p className="mb-3 font-bold text-[12px] text-slate-950 uppercase tracking-widest">Region</p>
              <ul className="space-y-1">
                {LOCATION_FILTERS.map((f) => (
                  <li key={f}>
                    <button
                      onClick={() => setLocationFilter(f)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-[13px] font-medium transition ${
                        locationFilter === f ? "bg-[#4B1E91]/10 text-[#4B1E91]" : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {f}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {tab === "talent" && (
              <div className="p-5 bg-white border shadow-sm border-slate-100 rounded-2xl">
                <p className="mb-3 font-bold text-[12px] text-slate-950 uppercase tracking-widest">Availability</p>
                <ul className="space-y-1">
                  {["All", "Available Now", "Unavailable"].map((f) => (
                    <li key={f}>
                      <button className="hover:bg-slate-50 px-3 py-2 rounded-lg w-full font-medium text-[13px] text-slate-600 text-left transition">
                        {f}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          {/* Results grid */}
          <main className="flex-1 min-w-0">
            {/* Results count + sort */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-[13px] text-slate-500">
                Showing <span className="font-semibold text-slate-800">{tab === "talent" ? filteredTalent.length : filteredCompanies.length}</span> results
              </p>
              <select className="bg-white py-2 pr-8 pl-3 border border-slate-200 rounded-lg focus:outline-none text-[13px] text-slate-600 cursor-pointer">
                <option>Most Relevant</option>
                <option>Newest First</option>
                <option>Available First</option>
              </select>
            </div>

            {tab === "talent" ? (
              filteredTalent.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredTalent.map((card) => <TalentCardItem key={card.id} card={card} />)}
                </div>
              ) : (
                <div className="py-20 text-center text-slate-400">
                  <p className="text-lg font-semibold">No talent found</p>
                  <p className="mt-1 text-sm">Try adjusting your search or filters</p>
                </div>
              )
            ) : (
              filteredCompanies.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredCompanies.map((card) => <CompanyCardItem key={card.id} card={card} />)}
                </div>
              ) : (
                <div className="py-20 text-center text-slate-400">
                  <p className="text-lg font-semibold">No companies found</p>
                  <p className="mt-1 text-sm">Try adjusting your search</p>
                </div>
              )
            )}

            {/* Load more */}
            <div className="mt-10 text-center">
              <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 shadow-sm px-8 py-3 border border-slate-200 rounded-full font-semibold text-[13px] text-slate-700 uppercase tracking-wider transition">
                Load More
              </button>
            </div>
          </main>

        </div>
      </div>

      {/* ── Footer strip ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#12022A] mt-16 py-8 border-[#C9A84C]/10 border-t text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <img src={epdgLogo} alt="EPDG" className="object-contain w-8 h-8 opacity-80" />
          <span className="font-bold text-[12px] text-slate-400 uppercase tracking-widest">The Emerson Empire — Discovery</span>
        </div>
        <p className="text-[11px] text-slate-600">© {new Date().getFullYear()} Emerson Professional Development Group. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Discovery;
