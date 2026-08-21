import { motion } from "framer-motion";

export default function FashionCard({
  title,
  subtitle,
  icon,
  image,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">

        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
            <span className="text-7xl">{icon}</span>
          </div>
        )}

        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-black/50 p-4 text-white backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Collection
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-xs text-white/70">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}