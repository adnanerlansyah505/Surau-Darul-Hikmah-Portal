import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50"
    >
      <div className="pointer-events-none absolute inset-0" />
      <div className="relative container-page section-padding flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-xl space-y-6"
        >
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30">
            Selamat Datang di Surau Darul Hikmah
          </span>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Pusat Ibadah dan Kajian.
          </h1>
          <p className="max-w-lg text-sm text-slate-600 sm:text-base">
            Ruang yang harmoni untuk solat berjemaah, program keluarga dan
            aktifitas kebajikan yang menghidupkan semangat ukhuwah di Surau Darul Hikmah.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/6285271222359?text=Halo%20Pengurus%20Surau%20Darul%20Hikmah%2C%20saya%20ingin%20bertanya%20mengenai%20info%20masjid." 
              target="_blank" 
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              Hubungi Pengurus
            </motion.a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              Ketahui Lebih Lanjut
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="relative ml-auto w-full max-w-md"
        >
          <img src="/images/preview-suraudarulhikmah.png" alt="Preview Surau Darul Hikmah" loading="lazy" className="rounded-md" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

