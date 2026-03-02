"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "Портфолио", href: "/portfolio" },
    { name: "О компании", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          backdrop-blur-md border-b border-white/10
          transition-all duration-300
          ${scrolled ? "h-16 bg-black/95 shadow-lg" : "h-20 bg-black/80"}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">

          {/* ===== ЛОГО ===== */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="transition-all duration-300"
            >
              <Image
                src="/logo/logo-color.png"
                alt="Винил Арт"
                width={180}
                height={60}
                className={`w-auto transition-all duration-300 
                  ${scrolled ? "h-16" : "h-24"}
                `}
                priority
              />
            </motion.div>
          </Link>

          {/* ===== Desktop menu ===== */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative text-sm font-medium transition-all duration-300
                    ${isActive
                      ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                      : "text-white/80 hover:text-white"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ===== Burger button ===== */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="absolute w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="absolute w-6 h-[2px] bg-white"
            />
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Затемнение фона */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Выезжающее меню */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-full 
                         bg-black z-50 p-8 flex flex-col gap-6"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      text-lg font-medium transition-all duration-300
                      ${isActive
                        ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                        : "text-white/80 hover:text-white"}
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}