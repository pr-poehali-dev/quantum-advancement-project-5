import Icon from "@/components/ui/icon";

const classFacts = [
  {
    grade: "1 класс",
    age: "6–7 лет",
    color: "bg-yellow-50 border-yellow-300",
    accent: "text-yellow-700",
    icon: "Smile",
    facts: [
      "Внимание удерживается всего 10–15 минут — нужна частая смена деятельности",
      "Ведущая деятельность — игровая, учёба через игру даёт лучший результат",
      "Ребёнок ориентируется на оценку учителя — важна похвала и поддержка",
      "Социализация только начинается: конфликты норма, задача педагога — учить миру",
    ],
  },
  {
    grade: "2 класс",
    age: "7–8 лет",
    color: "bg-green-50 border-green-300",
    accent: "text-green-700",
    icon: "BookOpen",
    facts: [
      "Память активно развивается — дети хорошо запоминают через образы и истории",
      "Появляется интерес к правилам и справедливости — «почему так?»",
      "Начинают формироваться дружеские связи внутри класса",
      "Концентрация растёт до 20 минут при смене форматов работы",
    ],
  },
  {
    grade: "3 класс",
    age: "8–9 лет",
    color: "bg-blue-50 border-blue-300",
    accent: "text-blue-700",
    icon: "Users",
    facts: [
      "Активно развивается логическое мышление — любят задачи с причинно-следственными связями",
      "Важно мнение сверстников — начинает формироваться репутация в коллективе",
      "Могут работать в группах, но нужно чёткое распределение ролей",
      "Проявляется самостоятельность — дайте больше выбора и ответственности",
    ],
  },
  {
    grade: "4 класс",
    age: "9–10 лет",
    color: "bg-purple-50 border-purple-300",
    accent: "text-purple-700",
    icon: "Star",
    facts: [
      "Кризис мотивации — рутина убивает интерес, нужны новые форматы и вызовы",
      "Хорошо воспринимают проектную деятельность и самостоятельные исследования",
      "Умеют критически оценивать — прислушиваются к справедливой критике",
      "Готовы к переходу в среднюю школу: важно развивать навыки самоорганизации",
    ],
  },
];

const tips = [
  {
    icon: "MessageCircle",
    title: "Говорите на уровне ребёнка",
    desc: "Присядьте, установите зрительный контакт. Дети слышат лучше, когда вы с ними на одном уровне, а не над ними.",
  },
  {
    icon: "ThumbsUp",
    title: "Хвалите процесс, а не результат",
    desc: "«Ты хорошо постарался» работает лучше, чем «ты умный». Это формирует установку на рост.",
  },
  {
    icon: "RefreshCw",
    title: "Меняйте форматы каждые 15–20 минут",
    desc: "Игра → объяснение → практика → обсуждение. Смена ритма удерживает внимание даже самых непоседливых.",
  },
  {
    icon: "Shield",
    title: "Создайте безопасную атмосферу",
    desc: "Ребёнок отвечает и рискует ошибиться только там, где не боится насмешки. Норма ошибки — основа обучения.",
  },
  {
    icon: "Target",
    title: "Давайте понятные цели",
    desc: "«Сегодня мы узнаем одну важную вещь про...» — конкретная цель в начале урока повышает вовлечённость.",
  },
  {
    icon: "Heart",
    title: "Замечайте каждого",
    desc: "Тихий ребёнок тоже хочет быть увиденным. Один личный вопрос или похвала в день меняет отношение к уроку.",
  },
];

const reviews = [
  {
    name: "Марина Алексеевна",
    role: "Учитель начальных классов, 12 лет стажа",
    text: "Вадим подходит к детям с душой. На практике видела, как он буквально за урок находит контакт с самыми сложными учениками. Редкое качество.",
    stars: 5,
  },
  {
    name: "Татьяна, мама ученика 2 класса",
    role: "Родитель",
    text: "Сын после занятий с Вадимом стал рассказывать дома о школе — раньше такого не было. Говорит, что уроки интересные и не скучные.",
    stars: 5,
  },
  {
    name: "Ольга Петровна",
    role: "Методист педколледжа",
    text: "Вадим — один из лучших практикантов. Умеет держать внимание класса, грамотно реагирует на нестандартные ситуации, любит своё дело.",
    stars: 5,
  },
];

export default function InfoSection() {
  return (
    <>
      {/* Факты по классам */}
      <div id="facts" className="bg-neutral-50 px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Знания о детях</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-2xl leading-tight">
            Факты о детях с 1 по 4 класс
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {classFacts.map((c) => (
              <div key={c.grade} className={`border rounded-none p-6 ${c.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={c.icon} fallback="Star" size={20} className={c.accent} />
                  <div>
                    <span className={`font-bold text-lg ${c.accent}`}>{c.grade}</span>
                    <span className="text-neutral-500 text-sm ml-2">({c.age})</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {c.facts.map((fact, i) => (
                    <li key={i} className="text-neutral-700 text-sm leading-relaxed flex gap-2">
                      <span className={`mt-1 shrink-0 ${c.accent}`}>•</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Рекомендации учителям */}
      <div id="tips" className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">От Вадима Широкова</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-2xl leading-tight">
            Рекомендации учителям начальных классов
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip) => (
              <div key={tip.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon name={tip.icon} fallback="Star" size={20} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-neutral-900 text-lg">{tip.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Отзывы */}
      <div id="reviews" className="bg-neutral-900 px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-wide text-neutral-400 mb-4">Что говорят другие</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
            Отзывы
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="flex flex-col gap-4 border border-neutral-700 p-6">
                <div className="flex gap-1">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">«{r.text}»</p>
                <div className="mt-auto pt-4 border-t border-neutral-700">
                  <p className="text-white font-bold text-sm">{r.name}</p>
                  <p className="text-neutral-500 text-xs mt-1">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
