import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: 'Bilakah waktu solat berjemaah di Surau Darul Hikmah?',
    answer:
      'Solat berjemaah diadakan untuk semua waktu solat fardu. Waktu azan dan iqamah mengikut jadwal rasmi zon setempat, dengan iqamah sekitar 5–10 minit selepas azan.',
  },
  {
    question: 'Apakah kemudahan yang terdapat di surau?',
    answer:
      'Surau dilengkapi ruang solat lelaki dan wanita, tandas dan tempat wuduk, ruang kuliah, rak Al-Quran dan kitab, serta ruang parkir terhad di kawasan sekitar.',
  },
  {
    question: 'Bagaimana cara menyalurkan sumbangan dan infaq?',
    answer:
      'Sumbangan boleh dibuat secara tunai di surau atau melalui akaun bank rasmi Surau Darul Hikmah. Maklumat akaun biasanya dipaparkan di papan kenyataan dan poster kempen infaq.',
  },
  {
    question: 'Adakah surau menganjurkan kelas agama untuk kanak-kanak?',
    answer:
      'Ya, terdapat kelas asas fardu ain dan Iqra’ / Al-Quran yang dijalankan pada hujung minggu atau mengikut jadwal yang dimaklumkan oleh pihak pengurusan.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Soalan Lazim (FAQ)
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Dapatkan jawapan pantas berkaitan waktu solat, fasiliti, program dan sumbangan di
            Surau Darul Hikmah.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
                <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-4"
                >
                  <span className="text-sm font-medium text-slate-900 sm:text-base">
                    {item.question}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="border-t border-slate-200 px-4 py-4 text-sm text-slate-700 sm:px-5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

