import React from "react";

const Contact: React.FC = () => {
  const fields = [
    { id: "firstName", label: "First Name", type: "text" },
    { id: "lastName", label: "Last Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "phone", label: "Phone Number", type: "text" },
    { id: "urgency", label: "Urgency", type: "text" },
    { id: "service", label: "Service Needed", type: "text" },
  ];

  return (
    <section className="w-full bg-[#F3F3F3] px-6 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-md font-semibold tracking-[0.2em] text-[#4B4B4B] uppercase mb-4">
            LET&apos;S CONNECT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            WE WANT TO TALK TO YOU
          </h2>

          <p className="mt-5 text-2xl font-medium text-black">
            SEND US A MESSAGE!
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="pt-4">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-8 max-w-xl">
              TAKE THE FIRST STEP TOWARDS FINANCIAL CLARITY
            </h3>

            <p className="text-[#4D4D4D] text-lg leading-relaxed max-w-md mb-10">
              Whether you need help with taxes, business consulting,
              or just figuring out where to start, we are here to help you
              get organized and move forward with confidence.
            </p>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-4">
              {[
                "FINANCIAL SERVICES",
                "OPERATIONAL AUDITS",
                "TAX PREPARATION",
                "MORE SERVICES +",
              ].map((item) => (
                <div
                  key={item}
                  className="px-6 py-3 rounded-full bg-white border border-[#D9D9D9] text-sm font-semibold text-[#2B2B2B]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-5">
            {fields.map((field) => (
              <div key={field.id} className="relative">
                <input
                  type={field.type}
                  id={field.id}
                  placeholder=" "
                  className="peer w-full h-16 rounded-2xl border border-[#CFCFCF] bg-white px-5 pt-6 text-black outline-none transition-all focus:border-black"
                />

                <label
                  htmlFor={field.id}
                  className="
                    absolute left-5 top-1/2 -translate-y-1/2
                    text-[#3F3F3F] transition-all duration-200
                    peer-placeholder-shown:text-base
                    peer-focus:top-4
                    peer-focus:text-xs
                    peer-focus:text-[#6B6B6B]
                    peer-not-placeholder-shown:top-4
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:text-[#6B6B6B]
                  "
                >
                  {field.label}
                </label>
              </div>
            ))}

            {/* Textarea */}
            <div className="relative">
              <textarea
                id="message"
                placeholder=" "
                rows={5}
                className="peer w-full rounded-2xl border border-[#CFCFCF] bg-white px-5 pt-8 pb-4 text-black outline-none resize-none transition-all focus:border-black"
              />

              <label
                htmlFor="message"
                className="
                  absolute left-5 top-7
                  text-[#3F3F3F] transition-all duration-200
                  peer-placeholder-shown:text-base
                  peer-focus:top-4
                  peer-focus:text-xs
                  peer-focus:text-[#6B6B6B]
                  peer-not-placeholder-shown:top-4
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:text-[#6B6B6B]
                "
              >
                More information or description
              </label>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#020817] text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition-all"
              >
                Request a Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;