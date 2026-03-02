"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ContactsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess("Заявка отправлена!");
      setForm({ name: "", phone: "", message: "" });
    } else {
      setSuccess("Ошибка отправки.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-16">

      {/* Левая часть — контакты */}
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Контакты
        </h1>

        <div className="space-y-6 text-gray-700">

          <div>
            <p className="font-semibold">Адрес:</p>
            <p>
              {siteConfig.contacts.address}
            </p>
          </div>

          <div>
            <p className="font-semibold">Телефон:</p>
            <a href={`tel:${siteConfig.contacts.phone}`} className="hover:text-yellow-500">
              {siteConfig.contacts.phoneDisplay}
            </a>
          </div>

          <div>
            <p className="font-semibold">Telegram:</p>
            <a
              href={siteConfig.contacts.telegram}
              target="_blank"
              className="hover:text-yellow-500"
            >
              {siteConfig.contacts.telegram}
            </a>
          </div>

          <div>
            <p className="font-semibold">Instagram:</p>
            <a
              href={siteConfig.contacts.instagram}
              target="_blank"
              className="hover:text-yellow-500"
            >
              {siteConfig.contacts.instagram}
            </a>
          </div>

          <div>
            <p className="font-semibold">Режим работы:</p>
            <p>{siteConfig.contacts.workingHours}</p>
          </div>

        </div>

        {/* Карта */}
        <div className="mt-10 h-80 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Борисовка+площадь+Ушакова+5&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Правая часть — форма */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Оставить заявку
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Ваше имя"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border p-4 rounded-md"
          />

          <input
            type="tel"
            placeholder="Телефон"
            required
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="w-full border p-4 rounded-md"
          />

          <textarea
            placeholder="Комментарий"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full border p-4 rounded-md"
            rows={4}
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition w-full"
          >
            Отправить
          </button>

          {success && (
            <p className="text-center mt-4">{success}</p>
          )}

        </form>
      </div>

    </div>
  );
}