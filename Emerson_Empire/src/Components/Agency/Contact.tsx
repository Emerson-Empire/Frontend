import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            We Want To Talk To You
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et
              massa mi.
            </h3>

            <p className="text-gray-700 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-gray-200 rounded-2xl p-8 md:p-10">
            <form className="space-y-6">
              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white border border-gray-300 rounded-xl p-4 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-gray-300 rounded-xl p-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-white border border-gray-300 rounded-xl p-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-white border border-gray-300 rounded-xl p-4 outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-white border border-gray-300 rounded-xl p-4 outline-none resize-none"
              />

              {/* Button */}
              <button className="bg-gray-400 hover:bg-gray-500 transition-all text-black font-medium px-8 py-3 rounded-lg">
                SUBMIT FORM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;