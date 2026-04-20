import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Hubungi Pengurusan Surau
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Untuk sebarang pertanyaan berkaitan program, sumbangan, tempahan ruang atau cadangan
            penambahbaikan, sila hubungi pihak pengurusan melalui borang di bawah atau terus ke
            WhatsApp rasmi surau.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/80"
        >
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-700">
                Nama Penuh
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Contoh: Ahmad bin Ali"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary/40 placeholder:text-slate-400 focus:border-primary focus:ring-2"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-medium text-slate-700">
                Nombor Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+62..."
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary/40 placeholder:text-slate-400 focus:border-primary focus:ring-2"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-slate-700">
                Message / Pertanyaan
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Nyatakan pertanyaan atau cadangan anda di sini..."
                className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary/40 placeholder:text-slate-400 focus:border-primary focus:ring-2"
              />
            </div>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-[#25D366]/40 transition hover:bg-[#22c05b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Pengurus
            </motion.a>
            <p className="text-[11px] text-slate-400">
              Klik untuk terus message melalui WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

