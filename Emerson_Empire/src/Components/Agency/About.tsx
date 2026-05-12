import React from "react";

const About: React.FC = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-300 h-105 rounded-xl" />

        <div>
          <p className="text-sm font-semibold uppercase mb-4">
            About Emerson Agency
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Lorem ipsum dolor sit amet consecteure
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et
              massa mi.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et
              massa mi.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-gray-400 px-6 py-3 rounded-md font-medium">
              CTA 1
            </button>

            <button className="border border-black px-6 py-3 rounded-md font-medium">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;