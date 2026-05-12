import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 px-6 py-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <div className="text-4xl font-bold mb-6">LOGO</div>

          <p className="text-gray-700 text-sm max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {["Sections", "About", "Contact Us", "Emerson Empire"].map(
          (title) => (
            <div key={title}>
              <h4 className="font-bold mb-5 uppercase">{title}</h4>

              <div className="space-y-3 text-sm text-gray-700">
                <p>Sections</p>
                <p>Sections</p>
                <p>Sections</p>
                <p>Sections</p>
              </div>
            </div>
          )
        )}
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-400 mt-14 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-700">
        <p>2026© The Emerson Empire. All rights reserved.</p>

        <div className="flex gap-6">
          <p>Policy 1</p>
          <p>Policy 2</p>
          <p>Policy 3</p>
          <p>Policy 4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;