import type { FC } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Malik, wiltord, lidi, sales } from "../../../assets";

type Person = {
  name: string;
  title: string;
  image: string;
  quote: string;
  fullStory: {
    challenge: string;
    journey: string;
    outcome: string;
    highlight: string;
  };
};

const PEOPLE: Person[] = [
  {
    name: "Wiltord Kamdem",
    title: "Web Dev Intern",
    image: wiltord,
    quote:
      "I sent dozens of CVs and got zero replies because I had 'no experience.' EPDG ended that cycle. Their remote internship with portfolio building gave me real campaigns to show, not just theory. I stopped feeling like an impostor and started earning in USD. If you're tired of being ignored, this is your way out.",
    fullStory: {
      challenge:
        "Before joining EPDG's remote internship program, Wiltord spent months applying for web development roles across Europe and North America — over 60 applications, nearly zero callbacks. The common rejection? 'We're looking for someone with professional experience.' It was a Catch-22 that keeps millions of skilled young professionals stuck: no job without experience, no experience without a job.",
      journey:
        "EPDG's remote internship with portfolio building broke that cycle completely. Wiltord wasn't handed theory or certificates — he was handed real briefs. He built live websites, contributed to actual client campaigns, and received mentor reviews from senior developers working in global markets. Every project was documented and structured into a verifiable portfolio that hiring managers could see and test. The leadership development framework layered on top taught him how to communicate his value in international job markets, negotiate in USD, and position himself not as a junior developer looking for a chance — but as a global professional delivering results.",
      outcome:
        "Within four months of completing the program, Wiltord secured a remote web development contract with an international client. His hourly rate was set in USD — something he had never imagined possible from his home country. He now works remotely across time zones, builds scalable front-end products, and mentors newer EPDG cohort members through the same path he once walked.",
      highlight: "60+ rejections → remote USD contract in 4 months",
    },
  },
  {
    name: "Malik Muhammad",
    title: "Growth Intern",
    image: Malik,
    quote:
      "EPDG gave me a framework I couldn't find anywhere else. Within weeks I had a portfolio that actually reflected my skills. I went from being ignored to getting real interviews with global companies.",
    fullStory: {
      challenge:
        "Malik had the skills — organic growth strategy, data analytics, community building — but no structured way to prove it to international employers. Local job markets undervalued his knowledge, and global companies needed to see tangible results, not just credentials. He had tried self-study courses and free bootcamps, but none gave him the real-world exposure or professional network to break through.",
      journey:
        "The EPDG growth internship program gave Malik something no certification could: a performance-based portfolio built around real growth campaigns. He ran A/B tests, managed social growth funnels, and analysed audience data for live projects inside EPDG's ecosystem. The program's leadership development component taught him how to frame his results in the language of global hiring managers — KPIs, conversion metrics, audience growth percentages — making his portfolio immediately legible to companies operating across the US, UK, and Southeast Asia. EPDG's professional development advisors coached him on remote work protocols, cross-cultural communication, and how to present himself in async-first environments.",
      outcome:
        "Malik landed three back-to-back interviews with internationally operating companies within weeks of completing his EPDG internship. He accepted a remote growth role with a digital brand based in the United Kingdom, building audience strategies for markets across Africa and Europe. His six-figure career trajectory — measured not in local currency but in international professional standing — began at EPDG.",
      highlight: "Zero global interviews → 3 international offers in weeks",
    },
  },
  {
    name: "Rogers Otkhanje",
    title: "Sales & Marketing",
    image: sales,
    quote:
      "The marketing and sales development track changed how I see my career. I stopped thinking locally and started positioning myself for international markets, global clients, and bigger opportunities. The results spoke for themselves.",
    fullStory: {
      challenge:
        "Rogers had been working in local sales and marketing for two years but felt his career had plateaued. The local market ceiling was low, international companies seemed unreachable, and he lacked both the portfolio and the professional network to compete on a global stage. He knew he had strong sales instincts and creative marketing ideas — but without verified results and global exposure, he was invisible to the clients he actually wanted.",
      journey:
        "Joining EPDG's sales and marketing professional development track gave Rogers access to something most programs never offer: live client work with real accountability. He developed and executed marketing campaigns for EPDG partner businesses, built sales decks for international audiences, and learned how to speak the language of ROI and pipeline conversion that enterprise clients expect. The leadership development modules helped him shift his mindset from a local service provider to a global business partner. Mentors with experience across North American and European markets coached Rogers on how to price his services for international clients, handle cross-border contracts, and build long-term client relationships that generate retainer income.",
      outcome:
        "Rogers now runs his own boutique sales and marketing consultancy serving clients in three countries. His average client contract value is more than five times what he earned in his previous local roles. He credits EPDG's remote internship and portfolio building framework as the foundation that made him credible to international businesses — not just another marketer, but a results-verified professional development alumni with a track record.",
      highlight: "Local plateau → international consultancy across 3 countries",
    },
  },
  {
    name: "Lidi Nehmen",
    title: "Leadership Fellow",
    image: lidi,
    quote:
      "This program is the real deal. The advisory tracks and mentorship helped me break my income ceiling. I now lead a remote team across three time zones and it started here.",
    fullStory: {
      challenge:
        "Lidi had strong academic credentials and years of project coordination experience, but she kept hitting the same wall: her income and title grew slowly despite her output, and she lacked the executive presence and remote leadership frameworks to be considered for senior roles in global organisations. She needed more than skills — she needed a verifiable track record of leadership in international professional environments.",
      journey:
        "EPDG's leadership development program for remote professionals gave Lidi exactly that structure. The advisory tracks covered executive communication, remote team management, stakeholder strategy, and income ceiling frameworks — all applied through real leadership scenarios within EPDG's professional ecosystem. She was assigned actual coordination responsibilities across live program cohorts, developing her ability to manage deliverables, people, and timelines across multiple time zones. EPDG mentors with senior corporate backgrounds gave her feedback that was direct, strategic, and immediately applicable — not generic coaching platitudes, but the kind of leadership development that changes how a person shows up in a boardroom, a Zoom call, or a salary negotiation.",
      outcome:
        "Lidi now leads a remote team of eight people spread across Africa, the Middle East, and Europe. She manages program operations for an international professional development organisation and earns significantly above the income ceiling she once thought was fixed. She attributes her career transformation to EPDG's combination of structured leadership development, real-world mentorship, and a community of global professionals who held her to a higher standard.",
      highlight: "Income ceiling broken → leading remote teams across 3 continents",
    },
  },
];

const clamp = (i: number, len: number) => ((i % len) + len) % len;

const ARC_SLOTS = [
  { x:  260, y:   0, z:   0, scale: 1.00, rotY:   0, brightness: 1.00 },
  { x:   70, y:  38, z: -65, scale: 0.78, rotY: -12, brightness: 0.82 },
  { x: -110, y:  58, z: -105, scale: 0.63, rotY: -22, brightness: 0.68 },
  { x: -260, y:  34, z: -65, scale: 0.73, rotY: -28, brightness: 0.76 },
];

const StoryModal: FC<{ person: Person; onClose: () => void }> = ({ person, onClose }) => (
  <AnimatePresence>
    <motion.div
      className="z-50 fixed inset-0 flex justify-center items-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Modal card */}
      <motion.article
        className="z-10 relative bg-white shadow-2xl rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      >
        {/* Header */}
        <div className="relative bg-[#12022A] rounded-t-3xl overflow-hidden">
          <div className="flex items-end gap-5 p-6 sm:p-8">
            <img
              src={person.image}
              alt={person.name}
              className="shadow-xl rounded-2xl w-20 sm:w-24 h-24 sm:h-28 object-cover object-top shrink-0"
            />
            <div className="pb-1">
              <p className="font-black text-white text-xl sm:text-2xl leading-tight">{person.name}</p>
              <p className="mt-1 text-purple-300 text-sm uppercase tracking-widest">{person.title}</p>
              <span className="inline-block bg-purple-500/20 mt-3 px-3 py-1 border border-purple-400/30 rounded-full font-semibold text-[11px] text-purple-200 uppercase tracking-wider">
                {person.fullStory.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6 sm:p-8">
          {/* Original quote */}
          <blockquote className="pl-4 border-purple-500 border-l-4 font-medium text-slate-600 text-base italic leading-relaxed">
            "{person.quote}"
          </blockquote>

          <div className="space-y-5 text-slate-700 sm:text-[15px] text-sm leading-relaxed">
            <div>
              <h3 className="mb-2 font-bold text-slate-950 text-base uppercase tracking-wide">The Challenge</h3>
              <p>{person.fullStory.challenge}</p>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-slate-950 text-base uppercase tracking-wide">The Journey with EPDG</h3>
              <p>{person.fullStory.journey}</p>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-slate-950 text-base uppercase tracking-wide">The Outcome</h3>
              <p>{person.fullStory.outcome}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={onClose}
              className="flex justify-center items-center bg-[#4B1E91] hover:bg-[#3a1570] px-6 py-3.5 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition"
            >
              Start My Own Journey
            </a>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="top-4 right-4 absolute place-items-center grid bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 text-white text-lg transition"
        >
          ×
        </button>
      </motion.article>
    </motion.div>
  </AnimatePresence>
);

const Reviews: FC = () => {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const total = PEOPLE.length;

  const prev = () => setActive((i) => clamp(i - 1, total));
  const next = () => setActive((i) => clamp(i + 1, total));

  const person = PEOPLE[active];

  return (
    <>
      <section id="reviews" className="bg-gray-50 py-20 overflow-hidden">
        <div className="mx-auto px-6 sm:px-8 max-w-screen-7xl">

          {/* Header */}
          <div className="bg-[#12022A] mb-14 rounded-2xl text-center">
            <h2 className="font-extrabold text-[56px] text-white sm:text-6xl leading-tight tracking-tight">
              Our track record of success
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg leading-relaxed">
              From internship programs to global professional development
            </p>
          </div>

          {/* Carousel */}
          <div className="relative mx-auto mb-10 max-w-5xl">
            <div className="top-1/2 absolute inset-x-0 bg-slate-200/40 blur-3xl rounded-full h-95 -translate-y-1/2 pointer-events-none" />

            <div className="relative flex justify-center items-end min-h-95">
              {PEOPLE.map((p, idx) => {
                const slot = (idx - active + total) % total;
                const s = ARC_SLOTS[slot];
                const isActive = slot === 0;
                const transform = `perspective(1100px) translateX(${s.x}px) translateY(${s.y}px) translateZ(${s.z}px) rotateY(${s.rotY}deg) scale(${s.scale})`;

                return (
                  <div
                    key={p.name}
                    onClick={() => isActive ? setModalOpen(true) : setActive(idx)}
                    className="bottom-0 absolute rounded-3xl w-50 h-95 overflow-hidden transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      transform,
                      zIndex: ARC_SLOTS.length - slot,
                      filter: `brightness(${s.brightness})`,
                      boxShadow: isActive
                        ? "0 40px 90px -40px rgba(15,32,73,0.35)"
                        : "0 20px 50px -30px rgba(15,32,73,0.15)",
                    }}
                  >
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    {/* "Read story" badge on active card */}
                    {isActive && (
                      <div className="right-0 bottom-0 left-0 absolute bg-linear-to-t from-[#12022A]/90 to-transparent px-4 pt-10 pb-4 text-center pointer-events-none">
                        <span className="inline-block bg-white/15 px-3 py-1 border border-white/30 rounded-full font-semibold text-[10px] text-white uppercase tracking-widest">
                          Read full story
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Arrows */}
            <div className="z-20 relative flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="place-items-center grid bg-slate-950 hover:bg-slate-700 shadow-lg rounded-full w-12 h-12 text-white transition"
                type="button" aria-label="Previous"
              >
                &larr;
              </button>
              <button
                onClick={next}
                className="place-items-center grid bg-slate-950 hover:bg-slate-700 shadow-lg rounded-full w-12 h-12 text-white transition"
                type="button" aria-label="Next"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* Name + title */}
          <div className="mb-4 text-center">
            <p className="font-black text-[28px] text-slate-950">{person.name}</p>
            <p className="mt-1 text-[20px] text-slate-500">{person.title}</p>
          </div>

          {/* Quote + expand button */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-5 text-[20px] text-slate-600 leading-relaxed">
              {person.quote}
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 shadow-sm px-5 py-2.5 border border-slate-200 hover:border-purple-300 rounded-full font-semibold text-[12px] text-slate-700 hover:text-purple-700 uppercase tracking-wider transition"
            >
              <span>Read full story</span>
              <span className="text-base leading-none">↗</span>
            </button>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center bg-[#4B1E91] hover:bg-white hover:shadow-md px-8 py-4 rounded-lg font-bold text-[11px] text-white hover:text-slate-700 uppercase tracking-[0.2em] hover:scale-110 transition-colors duration-200"
            >
              Start Building My Portfolio
            </a>
            <a
              href="#program"
              className="inline-flex justify-center items-center hover:bg-[#4B1E91] px-8 py-4 border-2 border-slate-300 hover:border-slate-400 rounded-lg font-bold text-[11px] text-slate-700 hover:text-white uppercase tracking-[0.2em] hover:scale-110 transition-colors duration-200"
            >
              Scale to Global Leadership
            </a>
          </div>

        </div>
      </section>

      {/* Story modal */}
      {modalOpen && (
        <StoryModal person={person} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default Reviews;
