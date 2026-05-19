import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

type UserType = "Intern" | "Company" | "Admin";

// Set VITE_EMPIRE_URL in Netlify env vars — no localhost fallback
const EMPIRE_URL = import.meta.env.VITE_EMPIRE_URL || "";

const USER_TYPES: { value: UserType; label: string; icon: string }[] = [
  { value: "Intern",  label: "Intern",  icon: "🎓" },
  { value: "Company", label: "Company", icon: "🏢" },
  { value: "Admin",   label: "Admin",   icon: "🔑" },
];

const Login: React.FC = () => {
  const [userType, setUserType] = useState<UserType>("Intern");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // TODO: replace with real API call
      console.log({ userType, email, password });
      await new Promise((r) => setTimeout(r, 800));
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Log In | Emerson Professional</title>
        <meta name="description" content="Sign in to your Emerson Professional account as an Intern, Company, or Admin." />
      </Helmet>

      <div className="flex bg-[#0a011a] min-h-screen">

        {/* Left branding panel — desktop only */}
        <div className="hidden lg:flex flex-col justify-between bg-[#12022A] p-12 border-white/5 border-r w-[45%]">
          {EMPIRE_URL ? (
            <a href={EMPIRE_URL} className="group flex items-center gap-3">
              <div className="flex justify-center items-center bg-[#4B1E91] rounded-xl w-10 h-10 font-black text-white text-lg">E</div>
              <span className="font-bold text-[13px] text-white uppercase leading-tight tracking-wide">
                <span className="text-slate-400">Emerson</span><br />Professional
              </span>
            </a>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-[#4B1E91] rounded-xl w-10 h-10 font-black text-white text-lg">E</div>
              <span className="font-bold text-[13px] text-white uppercase leading-tight tracking-wide">
                <span className="text-slate-400">Emerson</span><br />Professional
              </span>
            </div>
          )}

          <div>
            <blockquote className="mb-6 font-medium text-slate-300 text-xl leading-relaxed">
              "The platform that turns ambition into a<br />
              <span className="font-bold text-[#C9A84C]">verifiable global career.</span>"
            </blockquote>
            <p className="text-slate-500 text-sm">— The Emerson Empire, EPDG</p>
          </div>

          <ul className="space-y-3">
            {["Remote internships with portfolio building", "Leadership development for professionals", "Global network across 50+ countries"].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="bg-purple-500/20 rounded-full w-1.5 h-1.5 shrink-0" />
                <span className="text-[13px] text-slate-400">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right form panel */}
        <div className="flex flex-1 justify-center items-center px-5 py-12">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="lg:hidden flex justify-center items-center gap-3 mb-10">
              <div className="flex justify-center items-center bg-[#4B1E91] rounded-xl w-10 h-10 font-black text-white text-lg">E</div>
              <span className="font-bold text-[13px] text-white uppercase leading-tight tracking-wide">
                <span className="text-slate-400">Emerson</span><br />Professional
              </span>
            </div>

            <h1 className="mb-1 font-black text-white text-3xl tracking-tight">Welcome back</h1>
            <p className="mb-8 text-[14px] text-slate-400">Sign in to continue to your account</p>

            {/* User type selector */}
            <div className="flex gap-1 bg-white/5 mb-6 p-1 border border-white/10 rounded-xl">
              {USER_TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => { setUserType(t.value); setError(""); }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-semibold text-[12px] uppercase tracking-wider transition-all ${
                    userType === t.value ? "bg-[#4B1E91] text-white shadow-lg" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block mb-1.5 font-medium text-[12px] text-slate-400 uppercase tracking-wider">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={`${userType.toLowerCase()}@example.com`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 px-4 py-3 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none w-full text-[14px] text-white transition placeholder-slate-600"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="font-medium text-[12px] text-slate-400 uppercase tracking-wider">Password</label>
                  <a href="#" className="text-[12px] text-purple-400 hover:text-purple-300 transition">Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/5 px-4 py-3 pr-11 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none w-full text-[14px] text-white transition placeholder-slate-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="top-1/2 right-4 absolute text-slate-500 hover:text-slate-300 text-sm transition -translate-y-1/2"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 px-4 py-3 border border-red-500/20 rounded-xl text-[13px] text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex justify-center items-center gap-2 bg-[#4B1E91] hover:bg-[#3a1570] disabled:opacity-60 mt-2 py-3.5 rounded-xl w-full font-bold text-[13px] text-white uppercase tracking-wider transition disabled:cursor-not-allowed"
              >
                {loading && (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                )}
                {loading ? "Signing in…" : `Sign In as ${userType}`}
              </button>
            </form>

            <p className="mt-6 text-[13px] text-slate-500 text-center">
              Don't have an account?{" "}
              <a href="/Signup" className="font-semibold text-purple-400 hover:text-purple-300 transition">
                Create one free
              </a>
            </p>

            {EMPIRE_URL && (
              <p className="mt-4 text-[12px] text-slate-600 text-center">
                ←{" "}
                <a href={EMPIRE_URL} className="text-slate-500 hover:text-white transition">
                  Back to Emerson Empire
                </a>
              </p>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
