"use client";

import { motion } from "framer-motion";
import { Users, Leaf, TreePine, Banknote } from "lucide-react";
import { FEATURES } from "@/constants";

const iconMap = {
  Users,
  Leaf,
  TreePine,
  Banknote,
} as const;

type IconName = keyof typeof iconMap;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white" aria-label="Özellikler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-4">
            Neden Başak?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Sizi Bekliyoruz
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-lg">
            Aile dostu ortamımız, taze lezzetlerimiz ve huzurlu atmosferimizle
            unutulmaz anlar yaratıyoruz.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon as IconName];
            return (
              <motion.div
                key={feature.icon}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-200 transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-700 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
