import { Sparkles, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Brand */}
          <div className="max-w-md">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
                <Sparkles size={18} />
              </div>

              <div>
                <div className="font-bold tracking-tight text-zinc-950">
                  VITON
                </div>

                <div className="text-[9px] uppercase tracking-[0.25em] text-zinc-400">
                  AI Fashion
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Experience South Asian fashion through
              AI-powered virtual try-on technology.
            </p>

          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">
                Product
              </h3>

              <div className="mt-4 space-y-3">
                <button className="block text-sm text-zinc-500 transition hover:text-zinc-950">
                  Virtual Try-On
                </button>

                <button className="block text-sm text-zinc-500 transition hover:text-zinc-950">
                  Collections
                </button>

                <button className="block text-sm text-zinc-500 transition hover:text-zinc-950">
                  Features
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">
                Company
              </h3>

              <div className="mt-4 space-y-3">
                <button className="block text-sm text-zinc-500 transition hover:text-zinc-950">
                  About
                </button>

                <button className="block text-sm text-zinc-500 transition hover:text-zinc-950">
                  How it works
                </button>

                <button className="block text-sm text-zinc-500 transition hover:text-zinc-950">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">
                Connect
              </h3>

              <div className="mt-4 space-y-3">

                <button className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-950">
                  Instagram
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                <button className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-950">
                  Facebook
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                <button className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-950">
                  Email
                  <Mail size={14} />
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-zinc-100 pt-6 sm:flex-row">

          <p className="text-xs text-zinc-400">
            © 2026 VITON. All rights reserved.
          </p>

          <div className="flex gap-6">
            <button className="text-xs text-zinc-400 transition hover:text-zinc-950">
              Privacy
            </button>

            <button className="text-xs text-zinc-400 transition hover:text-zinc-950">
              Terms
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}