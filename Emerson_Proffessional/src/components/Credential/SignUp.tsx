import React, { useState } from "react";
import axios from "axios";

type UserType = "Intern" | "Company";

const EMPIRE_URL = import.meta.env.VITE_EMPIRE_URL ?? "http://localhost:5173";

const SignUp: React.FC = () => {
  const [userType, setUserType] = useState<UserType>("Intern");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        userType,
        userRole: userType,
        ...form,
      });
      console.log(res.data);
    } catch {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0a011a]">

      {/* Left branding panel */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-[#12022A] p-12 border-r border-white/5">
        <a href={EMPIRE_URL} className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-[#4B1E91] rounded-xl w-10 h-10 font-black text-white text-lg">E</div>
          <span className="font-bold text-white text-[13px] leading-tight tracking-wide uppercase">
            <span className="text-slate-400">Emerson</span><br />Professional
          </span>
        </a>

        <div>
          <p className="mb-4 text-3xl font-black leading-tight text-white">
            Join the Global<br />
            <span className="text-[#C9A84C]">Professional Network.</span>
          </p>
          <p className="text-slate-400 text-[14px] leading-relaxed">
            Whether you're an intern building your first portfolio or a company hiring verified talent — this is where global careers begin.
          </p>
        </div>

        <ul className="space-y-3">
          {["Verified portfolio building program", "Access to 50+ country network", "Remote-first career ecosystem"].map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="shrink-0 bg-[#C9A84C]/20 rounded-full w-1.5 h-1.5" />
              <span className="text-slate-400 text-[13px]">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center flex-1 px-5 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <a href={EMPIRE_URL} className="flex items-center justify-center gap-3 mb-10 lg:hidden">
            <div className="flex justify-center items-center bg-[#4B1E91] rounded-xl w-10 h-10 font-black text-white text-lg">E</div>
            <span className="font-bold text-white text-[13px] leading-tight tracking-wide uppercase">
              <span className="text-slate-400">Emerson</span><br />Professional
            </span>
          </a>

          <h1 className="mb-1 text-3xl font-black tracking-tight text-white">Create account</h1>
          <p className="mb-8 text-slate-400 text-[14px]">Join the Emerson Professional platform</p>

          {/* Account type toggle */}
          <div className="flex gap-1 p-1 mb-6 border bg-white/5 border-white/10 rounded-xl">
            {(["Intern", "Company"] as UserType[]).map((t) => (
              <button key={t} type="button" onClick={() => { setUserType(t); setError(""); }}
                className={`flex-1 py-2.5 rounded-lg font-semibold text-[12px] uppercase tracking-wider transition-all ${
                  userType === t ? "bg-[#4B1E91] text-white shadow-lg" : "text-slate-400 hover:text-white"
                }`}>
                {t === "Intern" ? "🎓 Intern" : "🏢 Company"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {userType === "Intern" ? (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1.5 font-medium text-slate-400 text-[12px] uppercase tracking-wider">First name</label>
                  <input name="firstName" type="text" required autoComplete="given-name" placeholder="Jane" onChange={handle}
                    className="bg-white/5 px-4 py-3 border border-white/10 focus:border-purple-500 rounded-xl w-full text-white text-[14px] placeholder-slate-600 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block mb-1.5 font-medium text-slate-400 text-[12px] uppercase tracking-wider">Last name</label>
                  <input name="lastName" type="text" required autoComplete="family-name" placeholder="Doe" onChange={handle}
                    className="bg-white/5 px-4 py-3 border border-white/10 focus:border-purple-500 rounded-xl w-full text-white text-[14px] placeholder-slate-600 focus:outline-none transition" />
                </div>
              </div>
            ) : (
              <div>
                <label className="block mb-1.5 font-medium text-slate-400 text-[12px] uppercase tracking-wider">Company name</label>
                <input name="companyName" type="text" required autoComplete="organization" placeholder="Acme Corp" onChange={handle}
                  className="bg-white/5 px-4 py-3 border border-white/10 focus:border-purple-500 rounded-xl w-full text-white text-[14px] placeholder-slate-600 focus:outline-none transition" />
              </div>
            )}

            <div>
              <label className="block mb-1.5 font-medium text-slate-400 text-[12px] uppercase tracking-wider">Email address</label>
              <input name="email" type="email" required autoComplete="email"
                placeholder={userType === "Intern" ? "intern@example.com" : "contact@company.com"}
                onChange={handle}
                className="bg-white/5 px-4 py-3 border border-white/10 focus:border-purple-500 rounded-xl w-full text-white text-[14px] placeholder-slate-600 focus:outline-none transition" />
            </div>

            <div>
              <label className="block mb-1.5 font-medium text-slate-400 text-[12px] uppercase tracking-wider">Password</label>
              <div className="relative">
                <input name="password" type={showPassword ? "text" : "password"} required autoComplete="new-password"
                  placeholder="Min. 8 characters" onChange={handle}
                  className="bg-white/5 px-4 py-3 pr-16 border border-white/10 focus:border-purple-500 rounded-xl w-full text-white text-[14px] placeholder-slate-600 focus:outline-none transition" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-sm transition -translate-y-1/2 top-1/2 right-4 text-slate-500 hover:text-slate-300">
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-1.5 font-medium text-slate-400 text-[12px] uppercase tracking-wider">Confirm password</label>
              <input name="confirmPassword" type={showPassword ? "text" : "password"} required autoComplete="new-password"
                placeholder="Re-enter password" onChange={handle}
                className="bg-white/5 px-4 py-3 border border-white/10 focus:border-purple-500 rounded-xl w-full text-white text-[14px] placeholder-slate-600 focus:outline-none transition" />
            </div>

            {error && (
              <div className="bg-red-500/10 px-4 py-3 border border-red-500/20 rounded-xl text-red-400 text-[13px]">{error}</div>
            )}

            <button type="submit" disabled={loading}
              className="flex justify-center items-center gap-2 bg-[#4B1E91] hover:bg-[#3a1570] disabled:opacity-60 disabled:cursor-not-allowed mt-2 py-3.5 rounded-xl w-full font-bold text-white text-[13px] uppercase tracking-wider transition">
              {loading && (
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
              )}
              {loading ? "Creating account…" : `Create ${userType} Account`}
            </button>
          </form>

          <p className="mt-6 text-slate-500 text-[13px] text-center">
            Already have an account?{" "}
            <a href="/" className="font-semibold text-purple-400 transition hover:text-purple-300">Sign in</a>
          </p>

          <p className="mt-4 text-slate-600 text-[12px] text-center">
            ←{" "}
            <a href={EMPIRE_URL} className="transition text-slate-500 hover:text-white">Back to Emerson Empire</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
