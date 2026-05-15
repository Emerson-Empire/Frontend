import React, { useState } from "react";
import {
  Home,
  Map,
  CheckSquare,
  Bell,
  User,
  ChevronRight,
  CheckCircle2,
  Menu,
} from "lucide-react";

import { useGlobalStore } from "../store/global";

const roadmapSteps = [
  {
    id: 1,
    title: "Onboarding",
    progress: "100%",
    status: "Completed",
  },
  {
    id: 2,
    title: "Skill Building",
    progress: "75%",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Project Work",
    progress: "25%",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Portfolio",
    progress: "0%",
    status: "Upcoming",
  },
];

const successStories = [1, 2, 3];

const Mobile: React.FC = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const { user } = useGlobalStore();

  const navigationItems = [
    {
      icon: Home,
      label: "Home",
    },
    {
      icon: Map,
      label: "Roadmap",
    },
    {
      icon: CheckSquare,
      label: "Tasks",
    },
    {
      icon: Bell,
      label: "Updates",
    },
    {
      icon: User,
      label: "Profile",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black md:hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5F5F5]/95 backdrop-blur border-b border-gray-200">
        <div className="flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center text-sm font-bold bg-white">
            LOGO
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-5 py-6 space-y-8 pb-32">
        {/* Hero Section */}
        <section className="bg-white border border-gray-200 rounded-3xl p-5">
          <div className="space-y-5">
            <div className="bg-gray-200 w-24 h-8 rounded-xl" />

            <div>
              <h1 className="text-3xl font-bold leading-tight">
                Build Your Future
                <br />
                with Global Experience
              </h1>

              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="bg-gray-200 h-56 rounded-3xl" />

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-black text-white rounded-2xl py-4 text-sm font-medium">
                Primary CTA
              </button>

              <button className="flex-1 border border-gray-300 rounded-2xl py-4 text-sm font-medium bg-white">
                Secondary CTA
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-2xl p-4">
                <h3 className="text-3xl font-bold">+100</h3>

                <div className="bg-gray-300 h-2 rounded-full mt-3 w-16" />
              </div>

              <div className="bg-gray-100 rounded-2xl p-4">
                <h3 className="text-3xl font-bold">+20</h3>

                <div className="bg-gray-300 h-2 rounded-full mt-3 w-16" />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 gap-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white border border-gray-200 rounded-3xl p-4"
            >
              <div className="bg-gray-200 h-36 rounded-2xl mb-4" />

              <h3 className="text-xl font-bold mb-2">Lorem Ipsum Feature</h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <button className="bg-gray-200 rounded-xl px-5 py-3 text-sm font-medium">
                Learn More
              </button>
            </div>
          ))}
        </section>

        {/* How It Works */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-3xl font-bold">How it works</h2>

            <button className="flex items-center gap-1 text-sm">
              View all
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Swipeable Cards */}
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="min-w-[260px] bg-white border border-gray-200 rounded-3xl p-5 flex-shrink-0 snap-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center font-bold mb-5">
                  0{item}
                </div>

                <div className="bg-gray-200 h-32 rounded-2xl mb-5" />

                <h3 className="text-xl font-bold mb-3">Step {item}</h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-3xl font-bold">Your Roadmap</h2>

            <button className="flex items-center gap-1 text-sm">
              View all
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {roadmapSteps.map((step) => (
              <div
                key={step.id}
                className="min-w-[220px] bg-white border border-gray-200 rounded-3xl p-5 flex-shrink-0 snap-start"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center font-bold mb-5">
                  {step.id}
                </div>

                {/* Fake Progress Circle */}
                <div className="w-24 h-24 rounded-full border-4 border-gray-400 flex items-center justify-center mx-auto mb-5">
                  <span className="font-bold">{step.progress}</span>
                </div>

                <h3 className="text-lg font-bold text-center mb-3">
                  {step.title}
                </h3>

                <div className="space-y-2 mb-5">
                  <div className="bg-gray-200 h-2 rounded-full" />
                  <div className="bg-gray-200 h-2 rounded-full w-5/6" />
                  <div className="bg-gray-200 h-2 rounded-full w-4/6" />
                </div>

                <div className="bg-gray-100 rounded-xl py-3 flex items-center justify-center gap-2 text-sm">
                  <CheckCircle2 size={16} />
                  {step.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Tasks */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-3xl font-bold">Current Tasks</h2>

            <button className="flex items-center gap-1 text-sm">
              View all
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {[
              "Complete your profile",
              "Take skill assessment",
              "Watch orientation video",
              "Join community group",
            ].map((task, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-400" />

                    <span className="font-medium">{task}</span>
                  </div>

                  <ChevronRight size={18} />
                </div>

                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-gray-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-3xl font-bold">Success Stories</h2>

            <button className="flex items-center gap-1 text-sm">
              View all
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {successStories.map((item) => (
              <div
                key={item}
                className="min-w-[260px] bg-white border border-gray-200 rounded-3xl p-4 flex-shrink-0 snap-start"
              >
                <div className="bg-gray-200 h-40 rounded-2xl mb-4" />

                <div className="space-y-2">
                  <div className="bg-gray-300 h-4 rounded w-full" />
                  <div className="bg-gray-300 h-4 rounded w-5/6" />
                  <div className="bg-gray-300 h-4 rounded w-4/6" />
                </div>

                <p className="text-sm text-gray-500 mt-5">- Intern Name</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center px-2 py-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className={`
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  py-2
                  px-4
                  rounded-2xl
                  transition-all
                  min-w-[70px]
                  ${
                    activeNav === item.label
                      ? "bg-black text-white"
                      : "text-gray-500"
                  }
                `}
              >
                <Icon size={20} />

                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Mobile;
