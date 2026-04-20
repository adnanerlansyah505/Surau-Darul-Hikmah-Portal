import { motion } from 'framer-motion';
import management from '../data/management.json';

type ManagementItem = (typeof management)[number];

const sortedManagement: ManagementItem[] = [...management].sort(
  (a, b) => a.hierarchyOrder - b.hierarchyOrder,
);

const ManagementGridClient = () => {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedManagement.map((person, index) => (
        <motion.article
          key={person.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
          className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm shadow-slate-200/80"
        >
          <div className="mb-3 flex items-center justify-center">
            <div className="aspect-square h-20 w-20 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              <img
                src={person.photo}
                alt={person.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-slate-900">{person.name}</h3>
          <span className="mt-1 inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            {person.role}
          </span>
        </motion.article>
      ))}
    </div>
  );
};

export default ManagementGridClient;

