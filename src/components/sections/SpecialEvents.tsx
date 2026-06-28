"use client";

import { motion } from "framer-motion";
import { CalendarDays, Gift, Users, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/constants";

const events = [
  {
    icon: Gift,
    title: "Doğum Günü Partileri",
    description: "Sevdikleriniz için unutulmaz bir kutlama organizasyonu yapın.",
  },
  {
    icon: CalendarDays,
    title: "Özel Kutlamalar",
    description: "Yıl dönümleri, nişanlar ve her türlü özel gün için uygun ortam.",
  },
  {
    icon: Users,
    title: "Grup Etkinlikleri",
    description: "Arkadaş, aile ve iş gruplarına özel rezervasyon imkânı.",
  },
];

export default function SpecialEvents() {
  return (
    <section id="special-events" className="py-16 md:py-24 bg-gradient-to-br from-emerald-100 to-green-100" aria-label="Özel günler ve rezervasyon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-green-800 bg-green-200 px-4 py-1.5 rounded-full mb-4">
            Rezervasyon
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Özel Günler & Rezervasyon
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Doğum günü partileri, özel kutlamalar ve grup etkinlikleri için çay bahçemizi rezerve
            edebilirsiniz. Sevdiklerinizle unutulmaz anlar yaşamak için bizi arayın.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {events.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-green-200 shadow-sm hover:shadow-md hover:shadow-green-200 transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-700 rounded-xl mb-5">
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">{title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-green-300 active:scale-95 text-base"
          >
            <MessageCircle size={22} />
            WhatsApp ile Rezervasyon Yap
          </a>
        </motion.div>
      </div>
    </section>
  );
}
