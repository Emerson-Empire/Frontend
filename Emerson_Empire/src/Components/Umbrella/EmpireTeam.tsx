import React from 'react';
import { Helena } from '../../assets';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image?: string; // pass imported image or URL; leave undefined to show initials
}

// ── Replace these with your real team data & imported photos ──
const TEAM: TeamMember[] = [
  {
    id: 1,
    name: ' LYRIC HELENA EMASON',
    role: 'Founder & CEO',
    department: 'Leadership',
    image: Helena, // e.g. import jamesImg from '../../assets/team/james.jpg'
  },
  {
    id: 2,
    name: 'Majembe Vincent',
    role: 'Head of Development Team',
    department: 'Web Development',
    image: undefined,
  },
  {
    id: 3,
    name: ' Malik',
    role: ' Team Lead',
    department: 'Web Development',
    image: undefined,
  },
  {
    id: 4,
    name: ' Mathius',
    role: ' Full stack',
    department: ' Web Development',
    image: undefined,
  },
  {
    id: 5,
    name: 'Wiltod Kamdem',
    role: ' Developer',
    department: 'Web Development',
    image: undefined,
  },
  {
    id: 6,
    name: 'Jonatthan',
    role: 'Developer',
    department: 'Web Development',
    image: undefined,
  },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="group flex flex-col bg-white/[0.002] hover:bg-[#C9A84C]/[0.05] p-7 border-[#C9A84C]/10 border-2 border-amber-500items-center hover:border-[#C9A84C]/30 rounded-sm w-full text-center transition-all duration-200">
    {/* Avatar */}
    <div className="flex flex-shrink-0 justify-center items-center bg-[#1e053e] mb-4 border border-[#C9A84C]/35 rounded-full w-24 h-24 overflow-hidden">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-serif font-semibold text-[#C9A84C] text-[26px] tracking-wide">
          {getInitials(member.name)}
        </span>
      )}
    </div>

    {/* Info */}
    <p className="mb-1.5 font-serif font-semibold text-[#F5F0E8] text-[20px] leading-tight">
      {member.name}
    </p>
    <p className="opacity-80 font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[2px]">
      {member.role}
    </p>
    <p className="mt-1 font-medium text-[#F5F0E8]/30 text-[9px] uppercase tracking-[1.5px]">
      {member.department}
    </p>
  </div>
);

const EmpireTeam: React.FC = () => {
  return (
    <section className="bg-[#12022A] px-6 sm:px-10 lg:px-16 py-20">
      {/* Section header */}
      <div className="bg-[#4B1E91] mb-14 text-center">
        <div className="inline-flex items-center gap-3 bg-[#4B1E91] mb-5">
          <span className="block bg-[#C9A84C] opacity-50 w-7 h-px" />
          <p className="font-semibold text-[#C9A84C] text-[10px] uppercase tracking-[4px] body">
            Our People
          </p>
          <span className="block bg-[#C9A84C] opacity-50 w-7 h-px" />
        </div>

        <h2 className="text-[#F5F0E8] text-[40px] leading-[1.1] tracking-wide heading"
          >
          The{' '}
          <em className="text-[#E8C97A] italic">Empire</em>{' '}
          Team
        </h2>

        <div className="bg-[#C9A84C] opacity-35 mx-auto mt-5 w-10 h-px" />
      </div>

      {/* Team grid */}
      <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-auto w-full">
        {TEAM.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default EmpireTeam;
