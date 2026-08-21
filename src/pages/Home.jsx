import {
  ArrowRight,
  Check,
  ChevronRight,
  Sparkles,
  Upload,
  WandSparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FashionCard from "../components/FashionCard";

export default function Home({ onNavigate }) {
  return (
    <div className="overflow-hidden bg-[#faf9f7] text-zinc-950">

      <Navbar onNavigate={onNavigate} />

      {/* HERO */}
      <section className="relative">
        <div className="absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-zinc-200/50 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-600 shadow-sm">
              <Sparkles size={14} />
              AI-powered virtual fashion
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Tradition,
              <br />
              <span className="text-zinc-400">
                reimagined by AI.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
              Experience South Asian fashion in a new way. Virtually
              try on Shalwar Kameez, Kurtas, Waistcoats and Sherwanis
              before you make your choice.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => onNavigate("tryon")}
                className="group flex items-center justify-center gap-3 rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:bg-zinc-800"
              >
                Try it yourself
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border border-zinc-200 bg-white px-7 py-4 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400"
              >
                Explore VITON
              </button>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-500">
              <span className="flex items-center gap-2">
                <Check size={14} />
                Simple to use
              </span>

              <span className="flex items-center gap-2">
                <Check size={14} />
                AI-powered
              </span>

              <span className="flex items-center gap-2">
                <Check size={14} />
                Virtual preview
              </span>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-lg overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-300 shadow-2xl">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,white,transparent_35%)]" />

              <div className="absolute inset-x-8 top-8 flex items-center justify-between">
                <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold backdrop-blur">
                  VITON AI
                </span>

                <span className="rounded-full bg-black/80 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                  Virtual Try-On
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">

                  <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-white/50 shadow-inner backdrop-blur-sm">
                    <span className="text-8xl">🧥</span>
                  </div>

                  <p className="mt-8 text-sm font-medium text-zinc-500">
                    Your style. Your culture.
                  </p>

                  <p className="mt-2 text-3xl font-semibold tracking-tight">
                    Your look.
                  </p>

                </div>
              </div>

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-500">
                      AI Preview
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      South Asian Collection
                    </p>
                  </div>

                  <WandSparkles size={20} />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-1/3 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <Sparkles size={16} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-400">
                    Powered by
                  </p>
                  <p className="text-sm font-semibold">
                    AI Fashion
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-black/5 bg-white py-5">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex min-w-max gap-10 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400"
          >
            <span>Shalwar Kameez</span>
            <span>•</span>
            <span>Kurta</span>
            <span>•</span>
            <span>Waistcoat</span>
            <span>•</span>
            <span>Sherwani</span>
            <span>•</span>
            <span>Virtual Try-On</span>
            <span>•</span>

            <span>Shalwar Kameez</span>
            <span>•</span>
            <span>Kurta</span>
            <span>•</span>
            <span>Waistcoat</span>
            <span>•</span>
            <span>Sherwani</span>
            <span>•</span>
            <span>Virtual Try-On</span>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
              About VITON
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Bringing South Asian fashion into the digital age.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-zinc-500">
            VITON is an AI-powered virtual try-on experience designed
            around the richness of South Asian clothing. Instead of
            imagining how an outfit might look, users can upload their
            photo and a clothing reference to create a virtual preview.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <FashionCard
            title="Shalwar Kameez"
            subtitle="Classic traditional wear"
            icon="🧵"
            delay={0}
          />

          <FashionCard
            title="Kurta"
            subtitle="Elegant everyday style"
            icon="👔"
            delay={0.1}
          />

          <FashionCard
            title="Waistcoat"
            subtitle="Contemporary ethnic look"
            icon="🦺"
            delay={0.2}
          />

          <FashionCard
            title="Sherwani"
            subtitle="Formal occasion wear"
            icon="✨"
            delay={0.3}
          />

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-zinc-950 py-28 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
              How it works
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              From photo to virtual outfit in three steps.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                icon: Upload,
                title: "Upload",
                text: "Upload your photo and the outfit you want to try.",
              },
              {
                number: "02",
                icon: WandSparkles,
                title: "AI Processing",
                text: "VITON analyzes your image and clothing reference.",
              },
              {
                number: "03",
                icon: Sparkles,
                title: "See the Result",
                text: "Get a virtual preview of yourself wearing the outfit.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-600">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black">
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3 className="mt-12 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}

          </div>

          <div className="mt-16 flex justify-center">
            <button
              onClick={() => onNavigate("tryon")}
              className="group flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-1"
            >
              Start virtual try-on
              <ChevronRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-zinc-100 p-10 text-center sm:p-16">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white">
            <Sparkles size={23} />
          </div>

          <h2 className="mx-auto mt-7 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Your next outfit is one click away.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
            Upload your photo, choose an outfit and experience the
            future of virtual South Asian fashion.
          </p>

          <button
            onClick={() => onNavigate("tryon")}
            className="mt-8 rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-zinc-800"
          >
            Try VITON
          </button>

        </div>
      </section>

      <Footer />
    </div>
  );
}