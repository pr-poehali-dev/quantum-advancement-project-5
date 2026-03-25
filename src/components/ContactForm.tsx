import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="contact" className="bg-neutral-900 px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/2">
          <p className="uppercase text-sm tracking-wide text-neutral-400 mb-4">
            Оставить заявку
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Хотите узнать методику подробнее?
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Оставьте заявку — мы расскажем, как применить методику в вашем классе или дома, и ответим на все вопросы.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-neutral-300">
              <Icon name="Phone" size={18} className="text-amber-400" />
              <span className="text-sm">Перезвоним в течение 24 часов</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <Icon name="BookOpen" size={18} className="text-amber-400" />
              <span className="text-sm">Бесплатная консультация для учителей</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <Icon name="Users" size={18} className="text-amber-400" />
              <span className="text-sm">Подходит и для родителей, и для педагогов</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center">
                <Icon name="Check" size={32} className="text-neutral-900" />
              </div>
              <h3 className="text-white text-2xl font-bold">Заявка отправлена!</h3>
              <p className="text-neutral-400">Мы свяжемся с вами в течение 24 часов.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-neutral-400 text-xs uppercase tracking-wide mb-2 block">
                  Ваше имя *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Например, Анна"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-neutral-400 text-xs uppercase tracking-wide mb-2 block">
                  Телефон *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-neutral-400 text-xs uppercase tracking-wide mb-2 block">
                  Кто вы?
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="">Выберите вариант</option>
                  <option value="teacher">Учитель / воспитатель</option>
                  <option value="parent">Родитель</option>
                  <option value="school">Школа / образовательный центр</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div>
                <label className="text-neutral-400 text-xs uppercase tracking-wide mb-2 block">
                  Ваш вопрос
                </label>
                <textarea
                  rows={3}
                  placeholder="Расскажите, что вас интересует..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-400 text-neutral-900 px-6 py-4 text-sm font-bold uppercase tracking-wide hover:bg-amber-300 transition-colors cursor-pointer w-full"
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
