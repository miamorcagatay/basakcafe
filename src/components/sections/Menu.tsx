"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "@/constants";

function formatPrice(price: number): string {
  return price % 1 === 0
    ? `₺${price}`
    : `₺${price.toFixed(2)}`;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  const current = MENU_CATEGORIES.find((c) => c.id === activeCategory) ?? MENU_CATEGORIES[0];

  return (
    <section id="menu" className="py-16 md:py-24 bg-zinc-50" aria-label="Menü">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-4">
            Lezzetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Menümüz</h2>
          <p className="text-zinc-600 max-w-lg mx-auto">
            Taze malzemelerle her gün hazırlanan ev yapımı lezzetlerimizi keşfedin.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide" role="tablist" aria-label="Menü kategorileri">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-green-700 text-white border-green-700 shadow-md"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-green-400 hover:text-green-800"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            role="tabpanel"
            aria-label={current.name}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {current.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex items-start justify-between gap-4 bg-white rounded-2xl p-5 border border-zinc-100 hover:border-green-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-zinc-900 text-base leading-snug">{item.name}</h3>
                  {item.description && (
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{item.description}</p>
                  )}
                </div>
                <div className="shrink-0">
                  <span className="inline-block bg-green-100 text-green-800 font-bold text-base px-3 py-1.5 rounded-lg border border-green-200">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
