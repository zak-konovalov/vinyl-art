"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition duration-300">
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mt-24 text-gray-300"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,204,0,0.08),transparent_40%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-14">

        {/* О компании */}
        <div>
          <div className="mb-6">
  {/* ===== ЛОГОТИП В ФУТЕРЕ ===== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}   // появляется снизу
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}        // анимация один раз
  className="
    mb-6
    drop-shadow-[0_0_20px_rgba(255,204,0,0.15)]
    hover:drop-shadow-[0_0_35px_rgba(255,204,0,0.4)]
    transition
  "
>

  {/*
    width / height — базовые размеры
    h-20 — высота логотипа
    МОЖЕШЬ увеличить до h-24
  */}
  <Image
    src="/logo/logo-mono.png"
    alt="Винил Арт"
    width={260}
    height={90}
    className="h-24 w-auto opacity-90 hover:opacity-100 transition"
  />

</motion.div>
</div>
          <p className="text-sm leading-relaxed text-gray-400">
            Производство наружной рекламы и брендирование авто
            в Борисовке и Белгородской области.
            Полный цикл: от идеи до монтажа.
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Навигация
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Главная", href: "/" },
              { name: "Услуги", href: "/services" },
              { name: "Портфолио", href: "/portfolio" },
              { name: "О компании", href: "/about" },
              { name: "Контакты", href: "/contacts" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-yellow-400 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="text-white font-semibold mb-6">
            Контакты
          </h4>

          <div className="space-y-5 text-sm">

            {/* Адрес */}
            <div className="flex gap-4 group">
              <IconWrapper>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8 2 5 5 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
                </svg>
              </IconWrapper>
              <div>
                <p>{siteConfig.contacts.address}</p>
                <a
                  href="https://www.google.com/maps?q=Борисовка+площадь+Ушакова+5"
                  target="_blank"
                  className="text-xs text-yellow-400 hover:underline"
                >
                  Построить маршрут →
                </a>
              </div>
            </div>

            {/* Телефон */}
            <div className="flex gap-4 group">
              <IconWrapper>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3 .6.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C9.8 21.2 2.8 14.2 2.8 5.4 2.8 4.7 3.3 4.2 4 4.2h2.4c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .6 3 .1.4 0 .9-.2 1.2l-2.2 2.2z"/>
                </svg>
              </IconWrapper>
              
			  
			   
				<a
                href={`tel:${siteConfig.contacts.phone}`}
                className="hover:text-yellow-400 transition"
              >
                {siteConfig.contacts.phoneDisplay}
              </a>
            </div>

            {/* Telegram */}
            <div className="flex gap-4 group">
              <IconWrapper>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 15.6l-.4 4c.6 0 .9-.3 1.3-.6l3-2.9 6.2 4.6c1.1.6 1.9.3 2.2-1l4-18.8c.4-1.6-.6-2.2-1.6-1.8L1.3 9.2c-1.5.6-1.5 1.4-.3 1.8l5.5 1.7 12.7-8c.6-.4 1.1-.2.7.2"/>
                </svg>
              </IconWrapper>
              <a
                href={siteConfig.contacts.telegram}
                target="_blank"
                className="hover:text-yellow-400 transition"
              >
                Telegram
              </a>
            </div>

            {/* Instagram */}
            <div className="flex gap-4 group">
              <IconWrapper>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.8-2.8a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"/>
                </svg>
              </IconWrapper>
              <a
                href={siteConfig.contacts.instagram}
                target="_blank"
                className="hover:text-yellow-400 transition"
              >
                Instagram
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Мини-карта */}
      <div className="relative max-w-7xl mx-auto px-6 pb-12">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-yellow-500/5">
          <iframe
            src="https://www.google.com/maps?q=Борисовка+площадь+Ушакова+5&output=embed"
            width="100%"
            height="220"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="relative border-t border-white/10 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Винил Арт. Все права защищены.
      </div>
    </motion.footer>
  );
}