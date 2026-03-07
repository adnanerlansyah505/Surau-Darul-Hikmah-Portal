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
            Surau Darul Hikmah ditubuhkan sebagai pusat ibadah dan pembangunan ruhani untuk
            komuniti setempat. Bermula sebagai surau kejiranan yang kecil, kini ia berkembang
            menjadi ruang yang aktif dengan program pengajian, aktiviti keluarga dan inisiatif
            kebajikan.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Visi kami adalah untuk melahirkan komuniti yang berilmu, berakhlak dan saling
            menyantuni. Melalui pengisian rohani, majlis ilmu dan program komuniti, Surau Darul
            Hikmah berusaha menjadi nadi yang menghidupkan suasana Islam dalam kehidupan seharian.
          </p>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-800 sm:text-sm">
              <div className="font-semibold text-slate-900">Ibadah Berjamaah</div>
              <p className="mt-1 text-slate-600">
                Menyemarakkan solat berjemaah dan qiamullail secara berkala.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-800 sm:text-sm">
              <div className="font-semibold text-slate-900">Majlis Ilmu</div>
              <p className="mt-1 text-slate-600">
                Kuliah maghrib, pengajian kitab dan kelas fardu ain untuk semua peringkat.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-800 sm:text-sm">
              <div className="font-semibold text-slate-900">Komuniti Prihatin</div>
              <p className="mt-1 text-slate-600">
                Program kebajikan, bantuan asnaf dan aktiviti kemasyarakatan berkala.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-700 shadow-lg shadow-slate-200/80 sm:text-sm"
        >
          <h3 className="mb-3 text-sm font-semibold text-primary">
            Sejarah Ringkas
          </h3>
          <p className="leading-relaxed text-slate-600">
            Surau ini diasaskan hasil inisiatif penduduk sekitar yang ingin menyediakan ruang
            ibadah yang selesa dan berfokuskan pembangunan ilmu. Dari sebuah surau sementara, ia
            kini telah dinaik taraf dengan kemudahan yang lebih selesa untuk menampung jamaah
            harian dan program yang semakin berkembang.
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            Kami sentiasa mengalu-alukan sumbangan idea, tenaga dan dana daripada para jamaah
            demi memastikan Surau Darul Hikmah kekal makmur dan memberi manfaat berpanjangan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

