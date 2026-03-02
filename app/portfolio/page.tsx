"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    category: "вывески",
    image: "/images/vyveski/vyveski-1.jpg",
    title: "Вывеска магазина",
    description: "Световые объемные буквы с подсветкой",
  },
  {
    id: 2,
    category: "вывески",
    image: "/images/vyveski/vyveski-2.jpg",
    title: "Фасадная конструкция",
    description: "Комплексное оформление входной группы",
  },
  {
    id: 3,
    category: "брендирование",
    image: "/images/car-branding/branding-1.jpg",
    title: "Брендирование фургона",
    description: "Полная оклейка коммерческого транспорта",
  },
  {
    id: 4,
    category: "брендирование",
    image: "/images/car-branding/branding-2.jpg",
    title: "Оклейка легкового авто",
    description: "Частичное брендирование с защитной ламинацией",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("все");
  const [selected, setSelected] = useState<any>(null);

  const filtered =
    filter === "все"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">

      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          Наши проекты
        </h1>
        <p className="text-gray-600">
          Реализованные работы компании «Винил Арт»
        </p>
      </motion.div>

      {/* Фильтр */}
      <div className="flex justify-center gap-4">
        {["все", "вывески", "брендирование"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              filter === cat
                ? "bg-yellow-500 text-black"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Сетка */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => setSelected(project)}
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full"
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={1200}
                height={800}
                className="rounded-xl object-cover w-full"
              />

              <div className="bg-white p-6 rounded-b-xl">
                <h3 className="text-xl font-semibold">
                  {selected.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}