"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { NAV_LINKS, BUSINESS } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/90 dark:bg-zinc-900/90 shadow-md border-b border-green-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" aria-label="Ana sayfaya git">
            <Logo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Ana navigasyon">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-green-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-300 active:scale-95"
              aria-label="WhatsApp ile iletişime geç"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-green-100 transition-colors"
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-white/95 border-t border-green-200"
          >
            <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobil navigasyon">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const id = link.href.replace("#", "");
                    const el = document.getElementById(id);
                    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
                  }}
                  className="text-base font-medium text-zinc-700 hover:text-green-800 hover:bg-green-100 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-3 rounded-xl transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp ile Ulaş
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
