import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { BUSINESS, NAV_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" className="[&_span]:text-white [&_.text-green-600]:text-green-400 [&_.text-green-700]:text-green-400 mb-4" />
            <p className="text-sm leading-relaxed text-zinc-400 mt-4">
              Sevdiklerinizle keyifli bir mola için Denizli&apos;nin en güzel çay bahçesi.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Sayfalar</h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">İletişim</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <MapPin size={15} className="text-green-400 mt-0.5 shrink-0" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={15} className="text-green-400 shrink-0" />
                <a href={BUSINESS.phoneHref} className="text-zinc-400 hover:text-green-400 transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-400">
                <Clock size={15} className="text-green-400 shrink-0" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Ulaşın</h3>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold text-sm px-4 py-3 rounded-xl transition-colors w-fit mb-3"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <div className="flex items-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="#fbbf24" className="w-4 h-4">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-zinc-400 ml-1">{BUSINESS.rating} Google</span>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-zinc-600">Merkezefendi, Denizli</p>
        </div>
      </div>
    </footer>
  );
}
