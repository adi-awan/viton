import { useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Login({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f5f1]">

      {/* Back */}
      <button
        onClick={() => onNavigate("home")}
        className="absolute left-6 top-6 z-10 flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-black"
      >
        <ArrowLeft size={17} />
        Back
      </button>

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left visual */}
        <div className="relative hidden overflow-hidden bg-zinc-950 lg:block">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.15),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.08),transparent_30%)]" />

          <div className="relative flex h-full flex-col justify-between p-14 text-white">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
                <Sparkles size={19} />
              </div>

              <div>
                <div className="font-bold">VITON</div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-zinc-400">
                  AI Fashion
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                The future of fashion
              </p>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight xl:text-6xl">
                See yourself
                <br />
                in the outfit.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
                Discover how traditional South Asian fashion meets
                intelligent virtual styling.
              </p>
            </motion.div>

            <div className="text-xs text-zinc-500">
              Virtual fashion technology
            </div>
          </div>
        </div>

        {/* Login */}
        <div className="flex items-center justify-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >

            <div className="mb-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white lg:hidden">
                <Sparkles size={21} />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Welcome back
              </p>

              <h2 className="text-4xl font-bold tracking-tight">
                Sign in to VITON
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Continue your virtual fashion experience.
              </p>
            </div>

            <form className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-zinc-800">
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-13 w-full rounded-xl border border-zinc-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/5"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-zinc-800">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-zinc-600 hover:text-black"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-13 w-full rounded-xl border border-zinc-200 bg-white pl-11 pr-12 text-sm outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/5"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-800"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Login */}
              <button
                type="button"
                className="h-13 w-full rounded-xl bg-zinc-950 text-sm font-semibold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                Sign in
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs text-zinc-400">OR</span>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>

            <button className="h-13 w-full rounded-xl border border-zinc-200 bg-white text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50">
              Continue with Google
            </button>

            <p className="mt-8 text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <button className="font-semibold text-zinc-950 hover:underline">
                Create account
              </button>
            </p>

          </motion.div>
        </div>
      </div>
    </div>
  );
}