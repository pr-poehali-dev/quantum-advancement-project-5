export default function About() {
  return (
    <div id="about" className="bg-white px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/49e5d353-96cc-47e2-a287-4c68f9c3a94b/bucket/6ec93802-48b3-4d25-8b58-bb8688c3516a.jpg"
              alt="Автор проекта"
              className="w-72 lg:w-96 h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-amber-400 px-4 py-2">
              <p className="text-neutral-900 text-xs uppercase tracking-wide font-bold">4 курс · Педколледж</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Об авторе</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            Молодой педагог из Сретенска
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-4">
            Мне 19 лет, и я студент 4 курса педагогического колледжа города Сретенск. Работа с детьми — это не просто профессия, это призвание.
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-4">
            За годы учёбы я изучил, как правильно выстраивать отношения с детьми младшего школьного возраста, как сделать урок живым и интересным, чтобы каждый ребёнок хотел учиться.
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Этот проект — моя попытка поделиться знаниями с учителями и родителями, которым важно понимать детей и находить с ними общий язык.
          </p>
        </div>
      </div>
    </div>
  );
}
