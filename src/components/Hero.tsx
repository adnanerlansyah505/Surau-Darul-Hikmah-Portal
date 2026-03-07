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
            Selamat Datang ke Surau Darul Hikmah
          </span>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Pusat ibadah dan ilmu untuk anda.
          </h1>
          <p className="max-w-lg text-sm text-slate-600 sm:text-base">
            Ruang yang harmoni untuk solat berjemaah, kuliah pengajian, program keluarga dan
            aktifitas kebajikan yang menghidupkan semangat ukhuwah di Surau Darul Hikmah.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              Hubungi Pengurusan
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
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Jadwal & Info</h3>
              <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-700">
                HARIAN & MINGGUAN
              </span>
            </div>
            <dl className="space-y-6 text-sm">
              <div className="flex flex-col gap-1">
                <dt className="font-semibold text-primary">Solat Berjemaah</dt>
                <dd className="text-slate-600">Terbuka 5 waktu setiap hari untuk seluruh kariah.</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-semibold text-primary">Kuliah Pengajian</dt>
                <dd className="text-slate-600">Siri ilmu mingguan bersama asatizah jemputan setiap malam Jumaat.</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-semibold text-primary">Tabung Infaq</dt>
                <dd className="text-slate-600">Sumbangan anda membantu kelangsungan program dan penyelenggaraan surau.</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

