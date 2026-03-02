import Image from "next/image";

export const metadata = {
  title: "О компании — Винил Арт",
  description:
    "Производство наружной рекламы и брендирование авто в Борисовке.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 space-y-16">

      <section>
        <h1 className="text-4xl font-bold mb-6">
          О компании «Винил Арт»
        </h1>
        <p className="text-gray-600 max-w-3xl">
          «Винил Арт» — это производство наружной рекламы полного цикла
          в Борисовке и Белгородской области.
          Мы изготавливаем вывески, выполняем брендирование авто,
          печатаем баннеры и реализуем проекты любой сложности.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Наш подход
          </h2>
          <p className="text-gray-600 mb-4">
            Мы контролируем весь процесс: от идеи до монтажа.
            Собственное производство позволяет нам обеспечивать
            высокое качество и соблюдение сроков.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Современное оборудование</li>
            <li>✔ Опытная команда специалистов</li>
            <li>✔ Индивидуальный подход</li>
            <li>✔ Работаем официально по договору</li>
          </ul>
        </div>

        <div className="relative h-80">
          <Image
            src="/images/vyveski/vyveski-1.jpg"
            alt="Производство Винил Арт"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </section>

      <section className="bg-gray-100 p-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Почему выбирают нас
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-xl font-semibold text-yellow-500">5+</p>
            <p>Лет опыта</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-yellow-500">500+</p>
            <p>Проектов реализовано</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-yellow-500">100%</p>
            <p>Собственное производство</p>
          </div>
        </div>
      </section>

    </div>
  );
}