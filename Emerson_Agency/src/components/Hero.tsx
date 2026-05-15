import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F5] px-4 lg:px-10 pt-8 pb-32">
      {/* Hero Wrapper */}
      <div className="relative w-full h-187.5">
        {/* Rounded Image Container */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          {/* Background Image */}
          <img
            src="src/assets/hero-pict.png"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
                  FINANCIAL SERVICES
                </div>

                <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
                  BUSINESS CONSULTING
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-8">
                Professional Financial Support
                <br />
                That Finally Feels Personal.
              </h1>

              {/* Description */}
              <p className="text-white text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10">
                Whether you are filing 1099 work,
                <br />
                managing a small business, or just trying to
                get organized, we bring enterprise-level
                expertise without the corporate price tag.
              </p>

              {/* CTA */}
              <button className="bg-[#CC9E50] text-black px-8 py-4 rounded-md font-semibold hover:opacity-90 transition-all">
                Book A Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[92%] md:w-[75%] lg:w-[58%] z-30">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-2xl overflow-hidden">
            {[
              {
                number: "+100",
                label: "Clients Advised",
              },
              {
                number: "+20",
                label: "Business Programs",
              },
              {
                number: "+50",
                label: "Tax Returns Completed",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-8
                  py-8
                  min-h-35
                  text-center
                  border-b
                  md:border-b-0
                  md:border-r
                  last:border-r-0
                  border-gray-200
                "
              >
                <h2 className="text-black text-5xl font-bold">
                  {item.number}
                </h2>

                <p className="text-black mt-3 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;