import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#020817] text-white px-6 lg:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="grid lg:grid-cols-[1.4fr_0.8fr_1fr] gap-14 pb-12">
          {/* Left */}
          <div>
            {/* Logo + Title */}
            <div className="flex items-start gap-5 mb-8">
              <img
                src="src/assets/agency.png"
                alt="Agency Logo"
                className="w-24 h-24 object-contain"
              />

              <div>
                <h2 className="text-3xl font-bold leading-tight">
                  THE EMERSON AGENCY
                </h2>

                <p className="italic text-white/70 text-xl leading-snug mt-2">
                  Where your financial chaos finally
                  <br />
                  meets its solution.
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 leading-relaxed text-lg max-w-2xl">
              THE EMERSON AGENCY LLC provides high-impact tax preparation,
              insurance education, and business operations consulting.{" "}
              <span className="font-bold text-white">
                WE ARE PART OF THE EMERSON EMPIRE,
              </span>{" "}
              a global ecosystem focused on professional excellence. We turn
              administrative burdens into structured growth for small business
              owners and families.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-[#D6A84F] text-3xl font-bold mb-8">
              NAVIGATE
            </h3>

            <div className="flex flex-col gap-5 text-2xl font-semibold">
              {[
                "Home",
                "Services",
                "Tax and Financial Education",
                "About Us",
                "Reviews",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#D6A84F] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D6A84F] text-3xl font-bold mb-8">
              CONTACT
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src="src/assets/email.png" alt="email" className="w-5 h-5" />

                <p className="text-white/90 text-xl">
                  mail@emersonempire.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img src="src/assets/phone.png" alt="phone" className="w-5 h-5" />

                <p className="text-white/90 text-xl">
                  +1 (123) 456-7890
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img src="src/assets/location.png" alt="location" className="w-5 h-5" />

                <p className="text-white/90 text-xl">
                  United States
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-10">
              <a
                href="#"
                className="hover:text-[#D6A84F] transition-colors"
              >
                <FaFacebookSquare className="w-10 h-10 fill-white" />
              </a>

              <a
                href="#"
                className="hover:text-[#D6A84F] transition-colors"
              >
                <FaLinkedin className="w-10 h-10 fill-white" />
              </a>

              <a
                href="#"
                className="hover:text-[#D6A84F] transition-colors"
              >
                <FaInstagram className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/70 text-lg">
            © 2026 The Emerson Empire. All rights reserved.
          </p>

          <div className="flex items-center gap-10 text-lg text-white/70">
            <a
              href="#"
              className="hover:text-[#D6A84F] transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-[#D6A84F] transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;