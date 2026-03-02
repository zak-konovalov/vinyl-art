import Image from "next/image";

export const metadata = {
  title: "Брендирование автомобилей в Борисовке — Vinyl-art",
  description:
    "Оклейка и брендирование авто в Борисовке и Белгородской области. Разработка дизайна, печать и монтаж под ключ.",
};

export default function CarBrandingPage() {
  return (
    <div className="space-y-20">

      {/* Заголовок */}
      <section>
        <h1 className="text-4xl font-bold mb-6">
          Брендирование автомобилей в Борисовке
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Превратите автомобиль в эффективный рекламный инструмент.
          Разрабатываем дизайн, печатаем и выполняем профессиональную
          оклейку транспорта любой сложности.
        </p>
      </section>

      {/* Галерея */}
      <section className="grid md:grid-cols-2 gap-6">
        <Image
          src="/images/car-branding/branding-1.jpg"
          alt="Брендирование автомобиля"
          width={800}
          height={500}
          className="rounded-lg object-cover w-full h-80"
        />
        <Image
          src="/images/car-branding/branding-2.jpg"
          alt="Оклейка коммерческого транспорта"
          width={800}
          height={500}
          className="rounded-lg object-cover w-full h-80"
        />
      </section>

      {/* Что мы делаем */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Что входит в услугу
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <ul className="space-y-3 list-disc pl-5">
            <li>Разработка индивидуального дизайна</li>
            <li>Подготовка макета под конкретную модель авто</li>
            <li>Печать на профессиональной пленке</li>
            <li>Ламинация для защиты от выгорания</li>
          </ul>

          <ul className="space-y-3 list-disc pl-5">
            <li>Полная или частичная оклейка</li>
            <li>Монтаж с гарантией качества</li>
            <li>Срок выполнения от 1–3 дней</li>
            <li>Работаем с юр. и физ. лицами</li>
          </ul>
        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-gray-100 p-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Почему брендирование авто — это выгодно
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-semibold">Работает 24/7</p>
            <p className="text-sm text-gray-600 mt-2">
              Реклама движется по городу каждый день.
            </p>
          </div>

          <div>
            <p className="font-semibold">Повышает узнаваемость</p>
            <p className="text-sm text-gray-600 mt-2">
              Клиенты быстрее запоминают ваш бренд.
            </p>
          </div>

          <div>
            <p className="font-semibold">Окупаемость</p>
            <p className="text-sm text-gray-600 mt-2">
              Один из самых эффективных видов наружной рекламы.
            </p>
          </div>
        </div>
      </section>

      {/* Этапы работы */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Этапы работы
        </h2>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Обсуждение задачи и замеры</li>
          <li>Разработка дизайн-макета</li>
          <li>Согласование с клиентом</li>
          <li>Печать и подготовка материалов</li>
          <li>Монтаж и сдача проекта</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-14 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">
          Хотите сделать автомобиль рекламой вашего бизнеса?
        </h2>
        <a
          href="/contacts"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Получить расчет
        </a>
      </section>

    </div>
  );
}