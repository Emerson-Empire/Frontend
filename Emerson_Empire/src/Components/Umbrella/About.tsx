import React from 'react'
import { empire } from '../../assets'
import { motion } from 'framer-motion'
import { Handshake, ShieldCheck, BookOpen, Star, Globe, Briefcase, Crown, TrendingUp, Heart } from 'lucide-react'

const values = [
  { icon: Handshake,   title: 'Service',          description: 'We believe business should serve people, not simply profit from them.' },
  { icon: ShieldCheck, title: 'Integrity',         description: 'We value honesty, transparency, and ethical leadership.' },
  { icon: BookOpen,    title: 'Education',         description: 'Growth begins with learning, guidance, and access to practical knowledge.' },
  { icon: Star,        title: 'Opportunity',       description: 'Everyone deserves the chance to build, improve, and move forward.' },
  { icon: Globe,       title: 'Global Community',  description: 'Our vision extends across borders, backgrounds and professional pathways.' },
  { icon: Briefcase,   title: 'Professionalism',   description: 'We uphold accountability, communication, and high standards.' },
  { icon: Crown,       title: 'Leadership',        description: 'Strong leadership is built through service, consistency, and responsibility.' },
  { icon: TrendingUp,  title: 'Practical Growth',  description: 'Learning should create real-world results and opportunities.' },
  { icon: Heart,       title: 'Dignity',           description: 'Every individual deserves respect, fairness, and support.' },
]

const About: React.FC = () => {
  return (
    <section id="About" className="bg-[#1E0A4A] px-6 sm:px-10 lg:px-20 py-20 w-full text-white">

      {/* Top Section */}
      <div className="flex lg:flex-row flex-col items-center gap-12 bg-[#4B1E91]/50 mx-auto rounded-2xl">

        {/* Image */}
        <div className="rounded-2xl w-full lg:w-1/2 overflow-hidden shrink-0">
          <img
            src={empire}
            alt="Emerson Empire"
            className="rounded-2xl w-full h-80 sm:h-105 lg:h-130 object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 lg:text-left text-center">
          <p className="mb-4 font-semibold text-[#C9A84C] italic uppercase tracking-[4px]">
            Our Foundation
          </p>
          <h1 className="mb-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Built on Purpose. <br />
            <em className="text-[#C9A84C]">Guided by Service.</em>
          </h1>
          <p className="text-gray-300 text-lg leading-8">
            At The Emerson Empire, our mission is to educate, empower, and create meaningful
            opportunities for growth. We believe professional development should remain human,
            practical, and service-centered — grounded in integrity, leadership, and long-term impact.
          </p>
          <p className="mt-6 text-gray-400 text-base leading-8">
            Across every division, we are building systems, services, and learning experiences
            that help individuals, teams, and small businesses grow with confidence, dignity,
            and practical support.
          </p>
        </div>
      </div>
      <div className="mt-3 mb-0 text-[28px]">   <h1 className="text-center">  Our  <em className="text-[#E8C97A] italic">Commitment </em>and value</h1></div>

      {/* Values Grid */}
      <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3 bg-[#4B1E91] mt-2 rounded-2xl">
      
        {values.map((value, index) => {
          const Icon = value.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm m-2 p-8 border border-[#C9A84C]/20 hover:border-[#C9A84C] rounded-2xl transition-colors duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center items-center bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl w-12 h-12 shrink-0">
                <Icon size={22} className="text-[#C9A84C]" />
              </div>

              {/* Text */}
              <div>
                <h3 className="mb-2 font-semibold text-white text-xl italic body">
                  {value.title}
                </h3>
                <p className="text-[15px] text-gray-300 leading-7 body">
                  {value.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default About