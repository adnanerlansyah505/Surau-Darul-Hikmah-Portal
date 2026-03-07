import { motion } from 'framer-motion';
import schedule from '../data/schedule.json';

type ScheduleItem = (typeof schedule)[number];

const getTodayName = () =>
  new Date().toLocaleDateString('en-US', { weekday: 'long' });

const EventTableClient = () => {
  const today = getTodayName().toLowerCase();

  const eventsWithLive = schedule.map((event) => {
    const isLive =
      event.day.toLowerCase() === today || event.day.toLowerCase() === 'today';
    return { ...event, isLive };
  });

  return (
    <div className="mt-8 space-y-4">
      {/* Desktop/tablet table */}
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/80 md:block">
        <table className="min-w-full text-left text-sm text-slate-700">
          <thead className="bg-primary/5 text-xs font-semibold uppercase tracking-wide text-primary">
            <tr>
              <th className="px-4 py-3">Kegiatan</th>
              <th className="px-4 py-3">Hari</th>
              <th className="px-4 py-3">Masa</th>
              <th className="px-4 py-3">Lokasi</th>
              <th className="px-4 py-3">Penceramah</th>
              <th className="px-4 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {eventsWithLive.map((event, index) => (
              <motion.tr
                key={`${event.eventName}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="border-t border-slate-100 bg-white/60"
              >
                <td className="px-4 py-3 font-medium text-slate-900">
                  {event.eventName}
                </td>
                <td className="px-4 py-3">{event.day}</td>
                <td className="px-4 py-3">{event.time}</td>
                <td className="px-4 py-3">{event.location}</td>
                <td className="px-4 py-3">{event.speaker}</td>
                <td className="px-4 py-3 text-center">
                  {event.isLive ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 ring-1 ring-red-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-100">
                      Terjadwal
                    </span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile list */}
      <div className="space-y-3 md:hidden">
        {eventsWithLive.map((event, index) => (
          <motion.article
            key={`${event.eventName}-${index}-mobile`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-slate-200/80"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {event.eventName}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {event.day} • {event.time}
                </p>
              </div>
              {event.isLive && (
                <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-600 ring-1 ring-red-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  Live
                </span>
              )}
            </div>
            <dl className="mt-3 space-y-1 text-xs">
              <div className="flex gap-2">
                <dt className="w-16 text-slate-500">Lokasi</dt>
                <dd className="flex-1 text-slate-700">{event.location}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 text-slate-500">Penceramah</dt>
                <dd className="flex-1 text-slate-700">{event.speaker}</dd>
              </div>
            </dl>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default EventTableClient;

