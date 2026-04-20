import type React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const management = [
  { name: 'Kevin Ariful Fikri', role: 'Pengurus' },
  // { name: 'Encik Faris bin Rahman', role: 'Timbalan Pengerusi' },
  // { name: 'Ustazah Nur Aisyah', role: 'Setiausaha' },
  // { name: 'Encik Hafiz bin Karim', role: 'Bendahari' },
];

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white text-sm text-slate-600">
      <div className="container-page section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-slate-900">
                Surau Darul Hikmah
              </span>
              <span className="text-xs text-slate-500">
                Ilmu & Amal Jariyah
              </span>
            </div>
          </div>
          <p className="max-w-xs text-sm text-slate-600">
            Surau Darul Hikmah yang berperanan sebagai pusat ibadah, ilmu dan
            kebajikan untuk masyarakat setempat.
          </p>
        </div>

        {/* Column 2: Management */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Mosque Management
          </h3>
          <p className="mb-3 mt-1 text-xs text-slate-500">
            Pengurusan Surau Darul Hikmah
          </p>
          <ul className="space-y-2 text-sm">
            {management.map((person) => (
              <li key={person.name} className="flex flex-col">
                <span className="font-medium text-slate-900">
                  {person.name}
                </span>
                <span className="text-xs text-slate-500">{person.role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Contact
          </h3>
          <div className="mt-3 space-y-3 text-sm">
            <div>
              <div className="text-xs font-semibold text-slate-500">Phone</div>
              <a
                href="tel:+6282211142682"
                className="text-slate-900 transition hover:text-primary"
              >
                +6282211142682
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">
                Address
              </div>
              <p className="max-w-xs text-slate-600">
                Jl. Sutan alambagarsyah, Jorong Kampung Tangah, Nagari Pagaruyung, Kecamatan Tanjung Emas Kabupaten Tanah Datar
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Social Media */}
        {/* <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Social Media
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Ikuti aktifitas dan kajian terkini.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/suraudarulhikmahsmadf"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div> */}
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="container-page flex flex-col items-center justify-center gap-3 py-4 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {currentYear} Surau Darul Hikmah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

