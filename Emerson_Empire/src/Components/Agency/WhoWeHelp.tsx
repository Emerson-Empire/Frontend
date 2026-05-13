import React from "react";

const WhoWeHelp: React.FC = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase mb-4">Who We Help</p>

          <h2 className="text-4xl font-bold mb-6">
            Lorem ipsum dolor sit amet consecteure
          </h2>

          <p className="text-gray-700 mb-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi.
          </p>

          <div className="space-y-5 text-lg">
            <p>Sector 1: Individuals</p>
            <p>Sector 2: Families</p>
            <p>Sector 3: Small business owners</p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gray-300 h-100 rounded-xl" />

          <div className="absolute bottom-4 left-4 bg-gray-200 p-5 rounded-xl w-60 shadow-sm">
            <h3 className="font-bold mb-2">SERVICES</h3>
            <p className="text-sm text-gray-700">
              Service 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;