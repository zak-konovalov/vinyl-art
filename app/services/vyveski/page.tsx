import Image from "next/image";

export const metadata = {
  title: "Вывески в Борисовке — Vinyl-art",
  description:
    "Изготовление вывесок и световых коробов в Борисовке и Белгородской области. Производство и монтаж под ключ.",
};

export default function VyveskiPage() {
  return (
    <div className="space-y-16">

      <section>
        <h1 className="text-4xl font-bold mb-6">
          Изготовление вывесок в Борисовке
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Производим световые и несветовые вывески, объемные буквы,
          короба и фасадные конструкции для бизнеса.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
  <Image
    src="/images/vyveski/vyveski-1.jpg"
    alt="Световая вывеска магазин"
    width={600}
    height={400}
    className="rounded-lg object-cover w-full h-64"
  />
  <Image
    src="/images/vyveski/vyveski-2.jpg"
    alt="Объемные буквы фасад"
    width={600}
    height={400}
    className="rounded-lg object-cover w-full h-64"
  />
  </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Этапы работы
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Обсуждение задачи</li>
          <li>Разработка дизайна</li>
          <li>Производство</li>
          <li>Монтаж</li>
        </ol>
      </section>

    </div>
  );
}