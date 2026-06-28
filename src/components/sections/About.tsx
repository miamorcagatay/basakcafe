"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, TreePine, Heart, Coffee } from "lucide-react";
import { BUSINESS } from "@/constants";

const highlights = [
  { icon: Coffee, text: "Taze demleme çaylar ve ev yapımı lezzetler" },
  { icon: TreePine, text: "Çocuk parkı — minikler için güvenli oyun alanı" },
  { icon: Heart, text: "Sıcak aile atmosferi, sessiz ve huzurlu ortam" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-green-100 to-emerald-100" aria-label="Hakkımızda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-green-700 bg-white px-4 py-1.5 rounded-full mb-5 shadow-sm border border-green-200">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-5 leading-tight">
              Denizli&apos;nin Kalbinde
              <br />
              <span className="text-green-700">Bir Huzur Köşesi</span>
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-8 text-base">
              {BUSINESS.description}
            </p>

            <div className="flex flex-col gap-4">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-700 rounded-xl shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="text-zinc-700 text-sm leading-relaxed pt-2">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl shadow-green-200 p-8 border border-green-100"
          >
            <h3 className="text-xl font-bold text-zinc-900 mb-6">İletişim Bilgileri</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-xl shrink-0">
                  <MapPin size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-0.5">Adres</p>
                  <p className="text-zinc-800 font-medium text-sm">{BUSINESS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-xl shrink-0">
                  <Phone size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-0.5">Telefon</p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-zinc-800 font-medium text-sm hover:text-green-600 transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-xl shrink-0">
                  <Clock size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-0.5">Çalışma Saatleri</p>
                  <p className="text-zinc-800 font-medium text-sm">{BUSINESS.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
              >
                Ara
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
