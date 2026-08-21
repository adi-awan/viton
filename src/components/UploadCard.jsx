import { ImagePlus, Upload, X } from "lucide-react";
import { motion } from "framer-motion";

export default function UploadCard({
  title,
  description,
  image,
  onChange,
  onRemove,
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

      <div className="mb-5">
        <h3 className="font-semibold text-zinc-950">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-zinc-500">
          {description}
        </p>
      </div>

      <label className="group relative block cursor-pointer">

        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />

        <div
          className={`relative flex aspect-[4/3] overflow-hidden rounded-2xl border-2 border-dashed transition ${
            image
              ? "border-zinc-200 bg-zinc-100"
              : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 hover:bg-zinc-100"
          }`}
        >

          {image ? (
            <>
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  onRemove();
                }}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-black"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <div className="flex w-full flex-col items-center justify-center p-6 text-center">

              <motion.div
                whileHover={{ scale: 1.08 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm"
              >
                <ImagePlus
                  size={23}
                  className="text-zinc-600"
                />
              </motion.div>

              <p className="mt-5 text-sm font-semibold">
                Upload image
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                JPG, PNG or WEBP
              </p>

              <div className="mt-5 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-600">
                <Upload size={13} />
                Choose file
              </div>

            </div>
          )}
        </div>
      </label>
    </div>
  );
}