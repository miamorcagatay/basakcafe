"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, BUSINESS } from "@/constants";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white" aria-label="Müşteri yorumları">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-4">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Onlar Ne Dedi?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-lg font-bold text-zinc-900 ml-1">{BUSINESS.rating}</span>
          </div>
          <p className="text-zinc-500 text-sm">{BUSINESS.reviewCount} Google yorumu</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-zinc-50 to-green-50/30 border border-zinc-100 rounded-2xl p-6 hover:shadow-lg hover:border-green-100 transition-all duration-300"
            >
              <Quote size={28} className="text-green-200 mb-3" />
              <p className="text-zinc-700 leading-relaxed mb-5 text-sm">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-800 font-bold text-sm">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <span className="font-semibold text-zinc-900 text-sm">{testimonial.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              {/* Google badge */}
              <div className="absolute top-4 right-4 opacity-30">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
