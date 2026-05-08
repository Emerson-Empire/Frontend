import React, { useState } from "react";
import {
  GraduationCap,
  LayoutDashboard,
  Rocket,
  Map,
  CheckSquare,
  Handshake,
  MessageCircle,
  Target,
  TrendingUp,
  ChevronLeft,
  Menu,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Onboarding", icon: Rocket },
  { name: "Roadmap", icon: Map },
  { name: "Tasks", icon: CheckSquare },
  { name: "Mentors", icon: Handshake },
  { name: "Community", icon: MessageCircle },
  { name: "Portfolio", icon: Target },
  { name: "Career", icon: TrendingUp },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Tasks");

  return (
    <>
      {/* Mobile Toggle */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 bg-[#7C4FC4] p-2 rounded-xl text-white"
        >
          <Menu size={22} />
        </button>
      )}

      <aside
        className={`
          bg-[#120820]
          text-white
          h-screen
          flex
          flex-col
          transition-all
          duration-300
          overflow-y-auto
          ${open ? "w-70 p-5" : "w-0 p-0"}
        `}
      >
        <div>
          {/* Logo Section */}
          <div className="flex items-center gap-3 mt-2">
            <div className="bg-[#7C4FC4] p-3 rounded-2xl">
              <GraduationCap size={24} />
            </div>

            <div>
              <h1
                className="text-white leading-none"
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                InternHub
              </h1>

              <p
                className="text-[#4B1E91] mt-1"
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 300,
                  fontSize: "12px",
                }}
              >
                2026 Cohort
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-[#3A1D73] my-6" />

          {/* Menu Items */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`
                    flex
                    items-center
                    gap-4
                    px-5
                    py-4
                    rounded-2xl
                    transition-all
                    duration-200
                    w-full
                    text-left
                    ${
                      active === item.name
                        ? "bg-[#7C4FC4]"
                        : "hover:bg-[#7C4FC4]/60"
                    }
                  `}
                >
                  <Icon size={22} />

                  <span
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: 500,
                      fontSize: "13px",
                    }}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="border-b border-[#3A1D73] mb-5" />

          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-all"
          >
            <ChevronLeft size={18} />

            <span
              style={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "13px",
              }}
            >
              Collapse
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
