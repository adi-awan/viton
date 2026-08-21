import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Info,
  RefreshCcw,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import UploadCard from "../components/UploadCard";

export default function TryOn({ onNavigate }) {
  const [personImage, setPersonImage] = useState(null);
  const [clothingImage, setClothingImage] = useState(null);
  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleImage = (event, type) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    if (type === "person") {
      setPersonImage(imageUrl);
    } else {
      setClothingImage(imageUrl);
    }

    setResult(null);
  };

  const handleTryOn = () => {
    if (!personImage || !clothingImage) return;

    setProcessing(true);

    /*
      FRONTEND PROTOTYPE

      Later your API call can go here:

      const formData = new FormData();
      formData.append("person", personFile);
      formData.append("clothing", clothingFile);

      axios.post("/api/try-on", formData)
    */

    setTimeout(() => {
      setProcessing(false);

      // Prototype result
      setResult(personImage);
    }, 2500);
  };

  const reset = () => {
    setPersonImage(null);
    setClothingImage(null);
    setResult(null);
    setProcessing(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f3]">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f6f3]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 text-sm font-semibold"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <Sparkles size={18} />
            </div>

            <span>VITON</span>
          </button>

          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-black"
          >
            <ArrowLeft size={16} />
            Back to home
          </button>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-xl">
            <WandSparkles size={21} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
            Virtual fitting room
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Try it on virtually.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
            Upload a photo of yourself and an outfit reference.
            VITON will generate a virtual preview of the look.
          </p>
        </div>

        {/* Workspace */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">

          {/* Person */}
          <UploadCard
            title="Your photo"
            description="Upload a clear photo of yourself."
            image={personImage}
            onChange={(e) => handleImage(e, "person")}
            onRemove={() => setPersonImage(null)}
          />

          {/* Clothing */}
          <UploadCard
            title="Outfit reference"
            description="Upload the clothing you want to try."
            image={clothingImage}
            onChange={(e) => handleImage(e, "clothing")}
            onRemove={() => setClothingImage(null)}
          />

          {/* Result */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

            <div className="mb-5 flex items-start justify-between">
              <div>
                <h3 className="font-semibold">
                  Virtual result
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                  Your AI-generated preview
                </p>
              </div>

              {result && (
                <CheckCircle2
                  size={20}
                  className="text-zinc-900"
                />
              )}
            </div>

            <div className="relative flex aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">

              {processing ? (
                <div className="flex w-full flex-col items-center justify-center">

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-zinc-200 border-t-zinc-950"
                  >
                    <Sparkles size={18} />
                  </motion.div>

                  <p className="mt-5 text-sm font-semibold">
                    Creating your look...
                  </p>

                  <p className="mt-1 text-xs text-zinc-400">
                    AI is processing the images
                  </p>

                </div>
              ) : result ? (
                <>
                  <img
                    src={result}
                    alt="Virtual try-on result"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-2 text-xs font-medium text-white backdrop-blur">
                    AI Preview
                  </div>
                </>
              ) : (
                <div className="flex w-full flex-col items-center justify-center p-6 text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Sparkles
                      size={22}
                      className="text-zinc-400"
                    />
                  </div>

                  <p className="mt-5 text-sm font-semibold">
                    Your result will appear here
                  </p>

                  <p className="mt-1 max-w-xs text-xs leading-5 text-zinc-400">
                    Upload both images and start your virtual try-on.
                  </p>

                </div>
              )}
            </div>

          </div>
        </div>

        {/* Controls */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4">

          <button
            disabled={!personImage || !clothingImage || processing}
            onClick={handleTryOn}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-zinc-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:min-w-[260px]"
          >
            {processing ? (
              <>
                <RefreshCcw
                  size={17}
                  className="animate-spin"
                />
                Processing...
              </>
            ) : (
              <>
                <WandSparkles size={17} />
                Try on outfit
              </>
            )}
          </button>

          {result && !processing && (
            <button className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-xs font-semibold text-zinc-700 transition hover:border-zinc-400">
              <Download size={14} />
              Save result
            </button>
          )}

          {(personImage || clothingImage || result) && !processing && (
            <button
              onClick={reset}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-800"
            >
              Start over
            </button>
          )}

        </div>

        {/* Info */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
              <Info size={17} className="text-zinc-600" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                For the best preview
              </p>

              <p className="mt-1 text-xs leading-6 text-zinc-500">
                Use a well-lit photo where your body is clearly visible.
                For clothing references, use images where the outfit is
                clearly visible and not heavily obstructed.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-zinc-950 p-8 text-white sm:p-10"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                VITON
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Discover your next South Asian look.
              </h2>
            </div>

            <button
              onClick={() => onNavigate("home")}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Explore collection
            </button>

          </div>
        </motion.div>

      </main>
    </div>
  );
}