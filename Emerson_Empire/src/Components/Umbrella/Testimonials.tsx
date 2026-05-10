import React from 'react';
import { motion } from 'framer-motion';
import MatheusImg from '../../assets/Matheus.jpeg';
import { EPDG as EpdgLogo, Agency as AgencyLogo } from '../../assets';

const EPDG_STATS = [
  { value: '+100', label: 'Young professionals engaged in the program' },
  { value: '+50', label: 'Participants in entrepreneurship development' },
  { value: '+200', label: 'Students reached across all tracks' },
];

const AGENCY_STATS = [
  { value: '+150', label: 'Individuals and families supported' },
  { value: '+300', label: 'Inquiries and consultations handled' },
  { value: '+80', label: 'Clients guided through service planning' },
];

const StatCard = ({
  value,
  label,
  index,
  delay = 0,
}: {
  value: string;
  label: string;
  index: number;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay + index * 0.1 }}
    className="bg-white/5 p-4 border border-white/10 rounded-lg"
  >
    <p className="mb-1 font-bold text-[#C9A84C] text-[22px] leading-none">{value}</p>
    <p className="text-[#F5F0E8]/65 text-[12px] leading-snug">{label}</p>
  </motion.div>
);

const LogoBox = ({ src, alt, side }: { src: string; alt: string; side: 'left' | 'right' }) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`flex ${side === 'right' ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}
  >
    <img src={src} alt={alt} className="w-28 h-28 object-contain drop-shadow-lg" />
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section
      id="Testimony"
      className="bg-[#12022A] px-6 sm:px-10 lg:px-16 py-20 overflow-hidden"
    >
      {/* ── Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-4 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
          Our Journey
        </p>
        <h2 className="font-bold text-[#F5F0E8] text-[24px] sm:text-[32px] lg:text-[40px] uppercase tracking-[0.15em] heading">
          Early Impact
        </h2>
        <div className="bg-[#C9A84C]/40 mx-auto mt-4 w-16 h-px" />
      </motion.div>

      {/* ── 3-column grid ── */}
      {/*
        Mobile  : single col — center image first (order-1), EPDG second (order-2), Agency third (order-3)
        Desktop : left | center | right  (220px · 1fr · 220px)
      */}
      <div className="items-start gap-8 grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] mx-auto max-w-6xl">

        {/* ── LEFT: EPDG ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 order-2 lg:order-1"
        >
          <LogoBox src={EpdgLogo} alt="EPDG logo" side="left" />
          <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1">
            {EPDG_STATS.map((stat, i) => (
              <StatCard key={i} {...stat} index={i} delay={0.1} />
            ))}
          </div>
        </motion.div>

        {/* ── CENTER: Image + Impact Statement ── */}
        <div className="flex flex-col gap-5 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-xl aspect-4/3 overflow-hidden"
          >
            <img
              src={MatheusImg}
              alt="The Emerson Empire team"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Impact statement */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-3 font-semibold text-[#C9A84C] text-[9px] uppercase tracking-[4px]">
              Where We Are Now
            </p>
            <p className="text-[#F5F0E8]/80 text-[14px] sm:text-[15px] leading-[1.9] body">
              The Emerson Empire is currently building its public-facing ecosystem
              through the work of its founder, team leads, and summer internship
              program. This landing page represents the beginning of a larger effort
              to create professional systems, business services, career development
              resources, and real-world learning opportunities.
            </p>
            <p className="mt-4 text-[#F5F0E8]/50 text-[13px] leading-[1.85] body">
              The Emerson Empire is in its early development stage, building a
              professional ecosystem rooted in service, education, business support,
              and opportunity.
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: Emerson Agency ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 order-3"
        >
          <LogoBox src={AgencyLogo} alt="Emerson Agency logo" side="right" />
          <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1">
            {AGENCY_STATS.map((stat, i) => (
              <StatCard key={i} {...stat} index={i} delay={0.2} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
