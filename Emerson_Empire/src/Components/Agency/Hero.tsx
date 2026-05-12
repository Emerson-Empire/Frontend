import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-200 px-6 py-16 rounded-xl mx-4 md:mx-8 mt-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-6">
          <div className="bg-gray-400 px-4 py-1 rounded-full text-xs font-medium">
            TEXT 1
          </div>

          <div className="bg-gray-400 px-4 py-1 rounded-full text-xs font-medium">
            TEXT 2
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi.
        </h1>

        <p className="text-gray-700 mt-6 max-w-xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi.
        </p>

        <button className="bg-gray-400 px-8 py-3 rounded-md mt-8 font-medium text-black">
          CTA 1
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-300 p-6 rounded-lg">
              <h3 className="text-3xl font-bold">+100</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;