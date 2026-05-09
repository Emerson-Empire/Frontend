import React from 'react'

const values = [
  {
    title: 'Service',
    description:
      'We believe business should serve people, not simply profit from them.',
  },
  {
    title: 'Integrity',
    description:
      'We value honesty, transparency, and ethical leadership.',
  },
  {
    title: 'Education',
    description:
      'Growth begins with learning, guidance, and access to knowledge.',
  },
  {
    title: 'Opportunity',
    description:
      'Everyone deserves the chance to build, improve, and succeed.',
  },
  {
    title: 'Global Community',
    description:
      'Our vision extends beyond borders and backgrounds.',
  },
  {
    title: 'Professionalism',
    description:
      'We uphold accountability, communication, and high standards.',
  },
  {
    title: 'Leadership',
    description:
      'Strong leadership is built through service, consistency, and responsibility.',
  },
  {
    title: 'Practical Growth',
    description:
      'Learning should create real-world results and opportunities.',
  },
  {
    title: 'Dignity',
    description:
      'Every individual deserves respect, fairness, and support.',
  },
]

const About: React.FC = () => {
  return (
    <section  id="About" className="bg-[#1E0A4A] px-6 sm:px-10 lg:px-20 py-20 text-white">
      
      {/* Top Section */}
      <div className="mx-auto max-w-5xl text-center">
        
        <p className="mb-4 font-semibold text-[#C9A84C] italic uppercase tracking-[4px]">
          Our Foundation
        </p>

        <h1 className="mb-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Built on Purpose. <br />
          <em className="text-[#C9A84C]">Guided by Service.</em>
        </h1>

        <p className="mx-auto max-w-3xl text-gray-300 text-lg leading-8">
       At The Emerson Empire, our mission is to educate, empower, and create meaningful opportunities for growth. We believe professional development should remain human, practical, 
       and service-centered — grounded in integrity, leadership, and long-term impact.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-gray-400 text-base leading-8">
        Across every division, we are building systems, services, and learning experiences that help individuals, teams,
         and small businesses grow with confidence, dignity, and practical support.
          </p>
      </div>

      {/* Values Section */}
      <div className="mx-auto mt-20 max-w-7xl">
        
        <h2 className="mb-12 font-serif text-[#C9A84C] text-3xl sm:text-4xl text-center">
          Our Values
        </h2>

        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm p-8 border border-[#C9A84C]/20 hover:border-[#C9A84C] rounded-2xl transition-all duration-300"
            >
              <h3 className="mb-4 font-semibold text-white text-2xl italic body">
                {value.title}
              </h3>

              <p className="text-[16px] text-gray-300 leading-7 body">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About