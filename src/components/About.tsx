import Icon from "@/components/ui/icon";

export default function About() {
  return (
    <div id="about" className="bg-white px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/49e5d353-96cc-47e2-a287-4c68f9c3a94b/bucket/55ab2295-d3a3-4c97-a0bb-45ed06defc8e.jpg"
              alt="Вадим Широков"
              className="w-72 lg:w-96 h-[480px] lg:h-[560px] object-cover object-top"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 px-4 py-2">
              <p className="text-white text-xs uppercase tracking-wide font-bold">4 курс · Педколледж · Сретенск</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Об авторе</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            Вадим Широков — будущий педагог
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-4">
            Студент 4 курса педагогического колледжа города Сретенск. Работа с детьми — это мой осознанный выбор и настоящее призвание.
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-4">
            Я изучаю, как правильно выстраивать контакт с детьми начальных классов, как сделать каждый урок живым и запоминающимся, чтобы ребёнок шёл в школу с удовольствием.
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            В свободное время занимаюсь лыжным спортом и мотокроссом — активная жизнь помогает понимать детей, которые тоже не могут сидеть на месте!
          </p>
          <div className="flex gap-6" id="hobbies">
            <div className="flex items-center gap-2 text-neutral-700">
              <Icon name="Mountain" size={20} className="text-blue-600" />
              <span className="text-sm font-medium">Лыжи</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-700">
              <Icon name="Zap" size={20} className="text-blue-600" />
              <span className="text-sm font-medium">Мотокросс</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-700">
              <Icon name="GraduationCap" size={20} className="text-blue-600" />
              <span className="text-sm font-medium">Педагогика</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
