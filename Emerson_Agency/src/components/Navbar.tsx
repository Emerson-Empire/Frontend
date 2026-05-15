import React from "react";

const Navbar: React.FC = () => {
  const navItems = [
    "Home",
    "Services",
    "Tax Education",
    "About Us",
    "Reviews",
  ];

  return (
    <nav className="w-full bg-[#010914]">
      <div className="w-full flex items-center justify-between px-6 lg:px-16 py-5">
        {/* Logo */}
        <img
          src="src/assets/agency.png"
          alt="Agency Logo"
          className="w-16 h-16 object-contain"
        />

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-white text-md md:text-lg font-medium hover:text-[#EFC167] transition-all"
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-[#CC9E50] text-white px-7 py-4 rounded-md font-semibold hover:opacity-90 transition-all">
          CONTACT US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;