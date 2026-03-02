"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">

        {/* ===== ЛОГОТИП ===== */}
        <Link href="/" className="flex items-center">

          {/* 
            motion.div — добавляем анимацию появления
            initial — начальное состояние
            animate — финальное состояние
          */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}   // появляется сверху
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}       // лёгкое увеличение при наведении
            className="
              relative
              drop-shadow-[0_0_15px_rgba(255,204,0,0.3)]
              hover:drop-shadow-[0_0_25px_rgba(255,204,0,0.6)]
              transition
            "
          >

            {/* 
              width / height — базовый размер
              h-14 — ограничиваем высоту логотипа
              w-auto — сохраняем пропорции
              МОЖЕШЬ МЕНЯТЬ h-14 на h-16 / h-20 чтобы увеличить
            */}
            <Image
              src="/logo/logo-color.png"
              alt="Винил Арт"
              width={180}
              height={60}
              className="h-24 w-auto"
              priority
            />

          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/">Главная</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/portfolio">Портфолио</Link>
          <Link href="/about">О компании</Link>
          <Link href="/contacts">Контакты</Link>
        </nav>

        {/* Button */}
        <Link
          href="/contacts"
          className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Получить расчет
        </Link>

        {/* Burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4 text-gray-300">
          <Link href="/">Главная</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/portfolio">Портфолио</Link>
          <Link href="/about">О компании</Link>
          <Link href="/contacts">Контакты</Link>
        </div>
      )}
    </header>
  );
}