"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Star, Phone } from "lucide-react";
import { BUSINESS } from "@/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero bölümü"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-white to-emerald-100" />
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-200/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <Star size={14} fill="currentColor" />
              {BUSINESS.rating}/5 Puan · Denizli&apos;nin Gözde Kafe&apos;si
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6"
            >
              Ailenizle{" "}
              <span className="text-green-700">Keyifli</span>
              <br />
              Bir Mola Yeri
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-lg"
            >
              {BUSINESS.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-300 active:scale-95 text-base"
              >
                Menüye Göz At
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-100 text-green-800 border-2 border-green-300 hover:border-green-400 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-95 text-base"
              >
                <Phone size={18} />
                Hemen Ara
              </a>
            </motion.div>

            {/* Info badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <div className="flex items-center justify-center w-8 h-8 bg-green-200 rounded-lg">
                  <Clock size={16} className="text-green-800" />
                </div>
                <span>
                  <strong className="text-zinc-800">Her gün</strong> · Gece 01:00&apos;e kadar
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <div className="flex items-center justify-center w-8 h-8 bg-green-200 rounded-lg">
                  <MapPin size={16} className="text-green-800" />
                </div>
                <span>Koza Sk. No:1, Merkezefendi/Denizli</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main illustration card */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-green-200 p-8 border border-green-200">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-600 to-emerald-700 rounded-t-3xl" />

              {/* Scene illustration */}
              <div className="relative h-64 sm:h-72 flex items-center justify-center">
                <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
                  {/* Sky/background */}
                  <rect width="320" height="240" fill="#f0fdf4" rx="16" />
                  {/* Sun */}
                  <circle cx="270" cy="40" r="22" fill="#fbbf24" opacity="0.8" />
                  <line x1="270" y1="10" x2="270" y2="4" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                  <line x1="290" y1="20" x2="295" y2="16" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                  <line x1="300" y1="40" x2="306" y2="40" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                  <line x1="290" y1="60" x2="295" y2="64" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                  {/* Trees */}
                  <rect x="18" y="130" width="8" height="40" fill="#92400e" rx="2" />
                  <ellipse cx="22" cy="120" rx="20" ry="26" fill="#16a34a" />
                  <ellipse cx="22" cy="112" rx="14" ry="18" fill="#22c55e" />
                  <rect x="50" y="140" width="6" height="30" fill="#92400e" rx="2" />
                  <ellipse cx="53" cy="132" rx="15" ry="20" fill="#15803d" />
                  {/* Pergola/shade structure */}
                  <rect x="80" y="75" width="170" height="5" fill="#78716c" rx="2" />
                  <rect x="80" y="70" width="5" height="100" fill="#a8a29e" rx="2" />
                  <rect x="245" y="70" width="5" height="100" fill="#a8a29e" rx="2" />
                  <rect x="115" y="70" width="5" height="100" fill="#a8a29e" rx="2" />
                  <rect x="210" y="70" width="5" height="100" fill="#a8a29e" rx="2" />
                  {/* Vine/plants on pergola */}
                  <ellipse cx="97" cy="70" rx="8" ry="5" fill="#4ade80" />
                  <ellipse cx="140" cy="70" rx="10" ry="5" fill="#22c55e" />
                  <ellipse cx="180" cy="70" rx="8" ry="5" fill="#4ade80" />
                  <ellipse cx="225" cy="70" rx="10" ry="5" fill="#22c55e" />
                  {/* Table */}
                  <rect x="125" y="135" width="80" height="5" fill="#d97706" rx="2" />
                  <rect x="135" y="140" width="5" height="30" fill="#b45309" rx="1" />
                  <rect x="190" y="140" width="5" height="30" fill="#b45309" rx="1" />
                  {/* Chairs */}
                  <rect x="100" y="145" width="22" height="4" fill="#ca8a04" rx="2" />
                  <rect x="104" y="149" width="5" height="20" fill="#a16207" rx="1" />
                  <rect x="113" y="149" width="5" height="20" fill="#a16207" rx="1" />
                  <rect x="208" y="145" width="22" height="4" fill="#ca8a04" rx="2" />
                  <rect x="212" y="149" width="5" height="20" fill="#a16207" rx="1" />
                  <rect x="221" y="149" width="5" height="20" fill="#a16207" rx="1" />
                  {/* Tea glasses on table */}
                  <rect x="150" y="118" width="10" height="16" fill="#fef3c7" rx="2" />
                  <rect x="150" y="118" width="10" height="6" fill="#f59e0b" rx="2" opacity="0.7" />
                  <rect x="165" y="118" width="10" height="16" fill="#fef3c7" rx="2" />
                  <rect x="165" y="118" width="10" height="6" fill="#f59e0b" rx="2" opacity="0.7" />
                  {/* Saucer */}
                  <ellipse cx="155" cy="134" rx="7" ry="2" fill="#e5e7eb" />
                  <ellipse cx="170" cy="134" rx="7" ry="2" fill="#e5e7eb" />
                  {/* Grass */}
                  <rect x="0" y="200" width="320" height="40" fill="#bbf7d0" rx="0" />
                  <ellipse cx="160" cy="200" rx="180" ry="10" fill="#86efac" />
                  {/* Path */}
                  <ellipse cx="160" cy="220" rx="60" ry="8" fill="#d4d4d4" opacity="0.5" />
                  {/* Small flowers */}
                  <circle cx="50" cy="195" r="3" fill="#f9a8d4" />
                  <circle cx="260" cy="198" r="2.5" fill="#fde68a" />
                  <circle cx="290" cy="192" r="2" fill="#f9a8d4" />
                  {/* Child swing (park element) */}
                  <line x1="285" y1="95" x2="285" y2="75" stroke="#78716c" strokeWidth="2" />
                  <line x1="305" y1="95" x2="305" y2="75" stroke="#78716c" strokeWidth="2" />
                  <line x1="283" y1="75" x2="307" y2="75" stroke="#78716c" strokeWidth="2" />
                  <rect x="282" y="95" width="26" height="4" fill="#a16207" rx="2" />
                  <line x1="288" y1="75" x2="288" y2="93" stroke="#78716c" strokeWidth="1.5" />
                  <line x1="302" y1="75" x2="302" y2="93" stroke="#78716c" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">4.6</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Google Puan</div>
                </div>
                <div className="text-center border-x border-zinc-100">
                  <div className="text-2xl font-bold text-green-700">01:00</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Kapanış Saati</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">7/7</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Her Gün Açık</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-green-700 text-white text-xs font-bold px-3 py-2 rounded-2xl shadow-lg"
            >
              Çocuk Parkı Mevcut 🌳
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
