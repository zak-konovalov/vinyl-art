// ===== ГЛОБАЛЬНЫЕ ДАННЫЕ САЙТА =====
// Всё редактируется только здесь
// Любое изменение автоматически подтянется в Header, Footer, SEO и Schema

export const siteConfig = {
  // ===== ОСНОВНОЕ =====
  name: "Винил Арт",

  description:
    "Производство наружной рекламы, изготовление вывесок и брендирование авто в Борисовке и Белгородской области. Полный цикл работ — от идеи до монтажа.",

  url: "https://vinyl-art.pro",

  // ===== КОНТАКТЫ =====
  contacts: {
    phone: "+79606374155", // Используется для tel: ссылки
    phoneDisplay: "+7 (960) 637-41-55", // Красивое отображение

    email: "info@vinyl-art.pro",

    address:
      "Белгородская область, п. Борисовка, площадь Ушакова, д. 5",

    workingHoursDisplay: "Пн–Пт: 7:00–17:00",
	workingHoursSchema: "Mo-Fr 07:00-17:00", 
    // ⚠ Для schema лучше использовать формат Mo-Fr 07:00-17:00
  },

  // ===== СОЦСЕТИ =====
  social: {
    telegram: "https://t.me/geka_za",
    instagram: "https://instagram.com/geka_guk",
  },

  // ===== КАРТА =====
  map: {
    embedUrl:
      "https://www.google.com/maps?q=Борисовка+площадь+Ушакова+5&output=embed",

    routeUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Борисовка+площадь+Ушакова+5",
  },

  // ===== SEO =====
  ogImage: "/og-image.jpg", // 1200x630
};