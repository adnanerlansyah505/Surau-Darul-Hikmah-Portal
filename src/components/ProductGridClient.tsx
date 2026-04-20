import { motion } from 'framer-motion';
import products from '../data/products.json';

type ProductItem = (typeof products)[number];

const WHATSAPP_NUMBER = '6282211142682';

const ProductGridClient = () => {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product: ProductItem, index) => {
        const message = encodeURIComponent(
          `Assalamu'alaikum, I'm interested in ${product.name}.`,
        );
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

        return (
          <motion.article
            key={product.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm text-slate-700 shadow-sm shadow-slate-200/80"
          >
            <div className="aspect-square w-full overflow-hidden bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-900">
                  {product.name}
                </h3>
                <span className="rounded-full bg-primary/5 px-2 py-1 text-[11px] font-semibold text-primary">
                  RP. {product.price.toFixed(2)}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                {product.description}
              </p>
              <div className="mt-3 flex items-center justify-between gap-2 text-[11px] text-slate-500">
                <span className="rounded-full bg-slate-50 px-2 py-1">
                  {product.category}
                </span>
              </div>
              <div className="mt-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-secondary/40 transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  Order Now via WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default ProductGridClient;

