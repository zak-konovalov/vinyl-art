import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="relative h-[600px] flex items-center justify-center text-white">

        <Image
          src="/images/hero/hero.jpg"
          alt="Наружная реклама"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Наружная реклама и печать под ключ
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Производство вывесок, брендирование авто и широкоформатная печать
            в Борисовке и Белгородской области.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contacts"
              className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Получить расчет
            </Link>

            <Link
              href="/portfolio"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Наши работы
            </Link>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Наши направления
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Вывески",
              desc: "Световые и несветовые конструкции любой сложности",
              link: "/services/vyveski",
            },
            {
              title: "Брендирование авто",
              desc: "Оклейка транспорта под ключ",
              link: "/services/car-branding",
            },
            {
              title: "Широкоформатная печать",
              desc: "Баннеры, пленка, витрины",
              link: "/services/wide-print",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="border p-8 rounded-xl hover:shadow-xl transition group"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-yellow-500">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

{/* ПОРТФОЛИО ПРЕВЬЮ */}
<section className="max-w-6xl mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-12">
    Наши работы
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="relative h-64 rounded-xl overflow-hidden">
      <Image
        src="/images/vyveski/vyveski-1.jpg"
        alt="Вывеска магазин"
        fill
        className="object-cover hover:scale-110 transition duration-500"
      />
    </div>

    <div className="relative h-64 rounded-xl overflow-hidden">
      <Image
        src="/images/car-branding/branding-1.jpg"
        alt="Брендирование авто"
        fill
        className="object-cover hover:scale-110 transition duration-500"
      />
    </div>

    <div className="relative h-64 rounded-xl overflow-hidden">
      <Image
        src="/images/vyveski/vyveski-2.jpg"
        alt="Наружная реклама"
        fill
        className="object-cover hover:scale-110 transition duration-500"
      />
    </div>
  </div>

  <div className="text-center mt-8">
    <Link
      href="/portfolio"
      className="border border-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
    >
      Смотреть все проекты
    </Link>
  </div>
</section>

      {/* О НАС */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Полный цикл производства
            </h2>
            <p className="text-gray-600 mb-6">
              Работаем от идеи до монтажа. Собственное производство
              позволяет контролировать качество и сроки выполнения.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Современное оборудование</li>
              <li>✔ Опытные специалисты</li>
              <li>✔ Работаем по договору</li>
              <li>✔ Монтаж по всей области</li>
            </ul>
          </div>

          <div className="relative h-80">
            <Image
              src="/images/vyveski/vyveski-1.jpg"
              alt="Производство наружной рекламы"
              fill
              className="object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

		{/* ЦИФРЫ */}
<section className="bg-black text-white py-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
    <div>
      <p className="text-4xl font-bold text-yellow-500">15+</p>
      <p className="mt-2 text-sm">Лет на рынке</p>
    </div>
    <div>
      <p className="text-4xl font-bold text-yellow-500">1000+</p>
      <p className="mt-2 text-sm">Выполненных проектов</p>
    </div>
    <div>
      <p className="text-4xl font-bold text-yellow-500">100%</p>
      <p className="mt-2 text-sm">Собственное производство</p>
    </div>
    <div>
      <p className="text-4xl font-bold text-yellow-500">1-3</p>
      <p className="mt-2 text-sm">Дня на изготовление</p>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="text-center py-20 bg-black text-white">
        <h2 className="text-3xl font-bold mb-6">
          Готовы обсудить ваш проект?
        </h2>
        <Link
          href="/contacts"
          className="bg-yellow-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Связаться с нами
        </Link>
      </section>

{/* SEO БЛОК */}
<section className="max-w-6xl mx-auto px-4 py-20">
  <h2 className="text-2xl font-bold mb-6">
    Наружная реклама в Борисовке и Белгородской области
  </h2>

  <p className="text-gray-600 leading-relaxed">
    Компания «Винил Арт» занимается производством наружной рекламы,
    изготовлением вывесок, брендированием автомобилей и широкоформатной
    печатью в Борисовке и по всей Белгородской области.
    Мы выполняем полный цикл работ: от разработки дизайна до монтажа.
    Собственное производство позволяет нам гарантировать качество,
    точность сроков и выгодные цены.
  </p>
</section>

    </div>
  );
}