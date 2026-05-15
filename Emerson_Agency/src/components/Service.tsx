import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "Insurance literacy and policy review",
    image: "src/assets/service-1.png",
    button: "Book an Education Session",
    description:
      "We don't sell policies; we teach you how they work. Get expert guidance on Life, Health, and Final Expense insurance. We help you audit your current coverage to ensure your family is protected without overpaying.",
  },
  {
    id: 2,
    title: "Tax preparation for 1099 and gig workers",
    image: "src/assets/service-2.png",
    button: "Get Tax Ready",
    description:
      "Specialized tax filing for individuals, families, and 1099 contractors. We organize your documents and find every legal deduction. High-quality service with a focus on accuracy and transparency.",
  },
  {
    id: 3,
    title: "Small business financial consulting",
    image: "src/assets/service-3.png",
    button: "Audit My Business",
    description:
      "From bookkeeping cleanup to operational audits, we help small business owners move from chaos to control. We build the administrative foundation so you can focus on scaling your vision.",
  },
  {
    id: 4,
    title: "Financial literacy workshops for families",
    image: "src/assets/service-4.png",
    button: "Start Learning",
    description:
      "Debt management, budgeting, and long-term planning in a judgment-free zone. Our workshops and 1-on-1 sessions empower you to manage your money with clarity and purpose.",
  },
];

const Service: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#F5F5F5] py-24 px-6 lg:px-20">
      <div className="max-w-350 mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#160432] text-xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
            OUR CORE SERVICES
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-[#120B2B]">
            Financial Education &
            <br />
            Tax Preparation Services
          </h2>

          <p className="text-gray-600 mb-10 max-w-xl leading-relaxed">
            Financial clarity without the judgment. We turn your paperwork chaos
            into a protected future. Stop guessing, start growing—your peace of
            mind starts here.
          </p>

          {/* TAB LIST */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`
                  w-full
                  text-left
                  px-6
                  py-5
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  ${
                    activeTab === index
                      ? "bg-[#CC9E50] border-[#CC9E50] text-black shadow-md"
                      : "bg-white border-gray-200 hover:border-[#CC9E50]"
                  }
                `}
              >
                <p className="font-semibold text-lg">{tab.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-[28px] overflow-hidden shadow-xl transition-all duration-500">
          <img
            src={tabs[activeTab].image}
            alt="Service"
            className="w-full h-70 md:h-105 object-cover"
          />

          <div className="p-8 md:p-10">
            <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
              {tabs[activeTab].description}
            </p>

            <button className="bg-[#CC9E50] text-white px-7 py-4 rounded-md font-semibold hover:opacity-90 transition-all">
              {tabs[activeTab].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
