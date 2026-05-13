import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-black">LOGO</div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
          <li>Menu 5</li>
        </ul>

        <button className="bg-gray-300 text-black px-5 py-2 text-sm font-medium rounded-md">
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;