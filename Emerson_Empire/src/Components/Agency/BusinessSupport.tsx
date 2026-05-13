import React from "react";

const BusinessSupport: React.FC = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Small Business Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-200 rounded-xl p-8">
              <div className="bg-gray-400 w-14 h-14 rounded-lg mb-6" />

              <h3 className="text-xl font-bold mb-4">
                Service {item} For Small Business
              </h3>

              <p className="text-gray-700 text-sm mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <button className="bg-gray-400 px-6 py-3 rounded-md text-sm font-medium">
                CTA 1
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSupport;