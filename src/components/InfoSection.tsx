import Icon from "@/components/ui/icon";

const facts = [
  {
    icon: "Brain",
    number: "7–10",
    label: "лет",
    desc: "Именно в этом возрасте формируется отношение ребёнка к учёбе на всю жизнь",
  },
  {
    icon: "Lightbulb",
    number: "3×",
    label: "быстрее",
    desc: "Дети усваивают материал через игру и движение в 3 раза эффективнее, чем при стандартном уроке",
  },
  {
    icon: "Heart",
    number: "85%",
    label: "успеха",
    desc: "Вовлечённый ребёнок достигает результатов на 85% чаще, чем пассивный слушатель",
  },
  {
    icon: "Stars",
    number: "20",
    label: "минут",
    desc: "Средняя концентрация младшего школьника — всего 20 минут. Важно менять форматы вовремя",
  },
];

const principles = [
  {
    title: "Уважение к личности",
    desc: "Каждый ребёнок уникален. Правильное обращение строится на принятии, а не на давлении.",
    icon: "User",
  },
  {
    title: "Игра как инструмент",
    desc: "Игровые элементы на уроке — не развлечение, а мощный педагогический приём.",
    icon: "Gamepad2",
  },
  {
    title: "Эмоциональная безопасность",
    desc: "Ребёнок учится только там, где ему не страшно ошибиться.",
    icon: "Shield",
  },
  {
    title: "Активное участие",
    desc: "Дети хотят действовать. Давайте им роль, а не просто место за партой.",
    icon: "Zap",
  },
];

export default function InfoSection() {
  return (
    <>
      {/* Факты */}
      <div className="bg-amber-50 px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-wide text-amber-700 mb-4">
            Почему это важно
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-2xl leading-tight">
            Факты о детях младшего школьного возраста
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((f) => (
              <div key={f.number} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
                  <Icon name={f.icon} fallback="Star" size={20} className="text-amber-800" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold text-neutral-900 leading-none">
                    {f.number}
                  </span>
                  <span className="text-base text-neutral-500 mb-1">{f.label}</span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Принципы */}
      <div className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">
              Основа методики
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              Как правильно обращаться с детьми в классе
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Педагогика — это не набор правил, а живой диалог. Мы собрали принципы,
              которые работают даже в самом сложном классе.
            </p>
            <img
              src="https://cdn.poehali.dev/projects/49e5d353-96cc-47e2-a287-4c68f9c3a94b/files/b1ea2034-bc0f-41f9-99a8-69fc9af90d5e.jpg"
              alt="Ребёнок на уроке"
              className="mt-8 w-full h-64 object-cover"
            />
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div key={p.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  <Icon name={p.icon} fallback="Star" size={20} className="text-neutral-700" />
                </div>
                <h3 className="font-bold text-neutral-900 text-lg">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}