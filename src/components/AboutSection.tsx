import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Tentang Surau Darul Hikmah
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Masjid merupakan pusat ibadah umat Islam yang menjadi tempat untuk melaksanakan salat berjamaah, memperdalam ilmu agama, serta mempererat ukhuwah di tengah masyarakat. Selain sebagai tempat beribadah, masjid juga berperan sebagai ruang pembinaan spiritual, pendidikan Islam, dan kegiatan sosial yang membawa manfaat bagi jamaah dan lingkungan sekitar.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Melalui berbagai kegiatan keagamaan seperti pengajian, kajian ilmu, dan program kemasyarakatan, masjid diharapkan menjadi tempat yang menumbuhkan nilai keimanan, kebersamaan, serta semangat saling membantu dalam kehidupan sehari-hari. Masjid terbuka bagi seluruh jamaah untuk beribadah, belajar, serta berpartisipasi dalam kegiatan yang mendukung pembinaan akhlak dan kesejahteraan umat
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="font-semibold text-slate-900">Ibadah Berjamaah</div>
            <p className="mt-1 text-sm text-slate-600">
              Masjid menjadi tempat utama untuk melaksanakan salat lima waktu, salat Jumat,
              serta berbagai ibadah lainnya secara berjamaah.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="font-semibold text-slate-900">Majlis Ilmu</div>
            <p className="mt-1 text-sm text-slate-600">
              Berbagai kegiatan kajian Islam, pengajian rutin, serta pembelajaran
              Al-Qur’an bagi anak-anak dan dewasa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

