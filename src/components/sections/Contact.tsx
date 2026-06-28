"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white" aria-label="Konum ve iletişim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-4">
            Konum & İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Bizi Bulun</h2>
          <p className="text-zinc-600 max-w-md mx-auto">
            Merkezefendi, Denizli&apos;de hizmetinizdeyiz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-zinc-100 h-80 lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781.8034879756063!2d29.053991!3d37.7550971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73fc80e2af77b%3A0x42dd5de4e52c4c2a!2zQmHFn2FrIEFpbGUgw4dheSDCsEJhaMS_ZXNp!5e0!3m2!1str!2str!4v1750000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Başak Kafe harita konumu"
            />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-green-200 rounded-xl shrink-0">
                <MapPin size={18} className="text-green-800" />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Adres</p>
                <p className="text-zinc-800 font-medium text-sm">{BUSINESS.address}</p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-green-200 rounded-xl shrink-0">
                <Clock size={18} className="text-green-800" />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Çalışma Saatleri</p>
                <p className="text-zinc-800 font-medium text-sm">Her gün açık</p>
                <p className="text-green-700 text-sm font-semibold">Sabah – Gece 01:00</p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-green-200 rounded-xl shrink-0">
                <Phone size={18} className="text-green-800" />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Telefon</p>
                <a href={BUSINESS.phoneHref} className="text-zinc-800 font-medium text-sm hover:text-green-600 transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Ba%C5%9Fak+Aile+%C3%87ay+Bah%C3%A7esi/@37.7545966,29.0524782,17z/data=!4m6!3m5!1s0x14c73f8b0b90b89d:0xaece739653de9919!8m2!3d37.7550971!4d29.053991!16s%2Fg%2F11kqxljmsh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-green-700 text-green-800 hover:bg-green-100 font-semibold py-3.5 px-6 rounded-2xl transition-all duration-200 active:scale-95"
            >
              <MapPin size={18} />
              Haritalar&apos;da Aç
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-green-300 active:scale-95"
            >
              <MessageCircle size={20} />
              WhatsApp ile Mesaj Gönder
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
