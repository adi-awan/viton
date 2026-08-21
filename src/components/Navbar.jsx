import {
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Navbar({ onNavigate }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#faf9f7]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-lg transition-transform group-hover:scale-105">
            <Sparkles size={19} />
          </div>

          <div className="text-left">
            <div className="text-lg font-bold tracking-tight">
              VITON
            </div>

            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              AI Fashion
            </div>
          </div>
        </button>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => onNavigate("home")}
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
          >
            Home
          </button>

          <button
            onClick={() => {
              onNavigate("home");
              setTimeout(() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
          >
            About
          </button>

          <button
            onClick={() => {
              onNavigate("home");
              setTimeout(() => {
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
          >
            How it works
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("login")}
            className="hidden text-sm font-semibold text-zinc-700 transition hover:text-black sm:block"
          >
            Login
          </button>

          <button
            onClick={() => onNavigate("tryon")}
            className="group flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            Try On
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}