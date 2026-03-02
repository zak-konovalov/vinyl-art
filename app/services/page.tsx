import Link from "next/link";

export const metadata = {
  title: "Услуги — Vinyl-art Борисовка",
  description:
    "Вывески, баннеры, брендирование авто и широкоформатная печать в Борисовке и Белгородской области.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Вывески и световые короба",
      href: "/services/vyveski",
    },
    {
      title: "Широкоформатная печать",
      href: "/services/wide-print",
    },
    {
      title: "Баннеры",
      href: "/services/banners",
    },
    {
      title: "Брендирование авто",
      href: "/services/car-branding",
    },
    {
      title: "Оформление витрин",
      href: "/services/shop-windows",
    },
    {
      title: "Таблички и стенды",
      href: "/services/signs-stands",
    },
  ];

  return (
    <div className="space-y-16">

      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Услуги Vinyl-art в Борисовке
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Полный цикл производства наружной рекламы: от разработки макета до монтажа.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="border p-6 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg mb-2">
              {service.title}
            </h2>
            <p className="text-sm text-gray-600">
              Подробнее о услуге →
            </p>
          </Link>
        ))}
      </section>

    </div>
  );
}