import { motion } from 'framer-motion';
import {
  Wifi,
  Car,
  Snowflake,
  Users,
  BookOpen,
  Droplets,
  Building2,
} from 'lucide-react';
import facilities from '../data/facilities.json';

type FacilityItem = (typeof facilities)[number];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  parking: Car,
  ac: Snowflake,
  classroom: BookOpen,
  kitchen: Droplets,
  wudu: Users,
};

const FacilityGalleryClient = () => {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {facilities.map((facility, index) => {
        const Icon =
          iconMap[facility.iconName] ??
          (Building2 as React.ComponentType<{ className?: string }>);

        return (
          <motion.article
            key={facility.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm text-slate-700 shadow-sm shadow-slate-200/80"
          >
            <div className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="h-full w-full origin-center scale-100 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900">
                  {facility.title}
                </h3>
                <p className="text-xs text-slate-600">
                  <span dangerouslySetInnerHTML={{ __html: facility.description }} />
                </p>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default FacilityGalleryClient;

