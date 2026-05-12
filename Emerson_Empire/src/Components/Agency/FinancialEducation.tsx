import React from "react";

const FinancialEducation: React.FC = () => {
  return (
    <section className="bg-gray-300 px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase mb-4">
            Financial Education
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Lorem ipsum dolor sit amet consecteure
          </h2>

          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <p className="max-w-sm text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl h-87.5 flex items-center justify-center text-center p-8">
          <h3 className="text-4xl font-bold leading-tight">
            SIMPLE TAXES CALCULATOR
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FinancialEducation;