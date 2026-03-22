import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 0,
    number: "Zn",
    subtitle: "Атомный номер 30",
    title: "Цинк",
    description:
      "Химический элемент 12-й группы четвёртого периода периодической системы Д. И. Менделеева",
    icon: "Atom",
    tag: "ВВЕДЕНИЕ",
  },
  {
    id: 1,
    number: "01",
    tag: "ОСОБЕННОСТИ",
    title: "Физические\nи химические\nсвойства",
    icon: "Flask",
    blocks: [
      {
        label: "Физические",
        icon: "Layers",
        text: "Голубовато-белый металл. Хрупок в холодном состоянии, но при 100–150 °C становится пластичным. Легко плавится, имеет низкую температуру кипения.",
      },
      {
        label: "Химические",
        icon: "Zap",
        text: "Проявляет амфотерные свойства — реагирует как с кислотами, так и со щелочами. При нагревании взаимодействует с кислородом, серой и галогенами.",
      },
      {
        label: "В природе",
        icon: "Mountain",
        text: "Встречается только в виде соединений. Важнейшие руды: сфалерит ZnS и цинковый шпат ZnCO₃.",
      },
    ],
  },
  {
    id: 2,
    number: "02",
    tag: "СОЕДИНЕНИЯ",
    title: "Основные\nсоединения",
    icon: "Beaker",
    compounds: [
      { formula: "ZnO", name: "Оксид цинка", desc: "Белый амфотерный порошок. Мало растворим в воде, растворяется в кислотах и щелочах." },
      { formula: "Zn(OH)₂", name: "Гидроксид цинка", desc: "Белое амфотерное вещество. Образуется при действии щелочей на соли цинка." },
      { formula: "ZnCl₂", name: "Хлорид цинка", desc: "Белое гигроскопичное вещество. Используется как флюс в паяльном деле." },
      { formula: "ZnSO₄", name: "Сульфат цинка", desc: "Белый кристаллогидрат. Применяется в сельском хозяйстве и медицине." },
      { formula: "ZnCO₃", name: "Карбонат цинка", desc: "Амфотерное соединение. При нагревании разлагается с образованием оксида." },
    ],
  },
  {
    id: 3,
    number: "03",
    tag: "ПРИМЕНЕНИЕ",
    title: "Сферы\nприменения",
    icon: "Wrench",
    applications: [
      { area: "Промышленность", icon: "Factory", items: ["Цинкование — защита стали от коррозии", "Воздушно-цинковые аккумуляторы и батарейки", "Твёрдые припои"] },
      { area: "Металлургия", icon: "Flame", items: ["Восстановление золота и серебра", "Подземное выщелачивание", "Извлечение из чернового свинца"] },
      { area: "Медицина", icon: "Heart", items: ["Оксид цинка как антисептик", "Лечение цинковой недостаточности"] },
      { area: "Косметология", icon: "Sparkles", items: ["Противовоспалительные свойства", "Средства ухода за кожей", "Борьба с патогенной микрофлорой"] },
    ],
  },
  {
    id: 4,
    number: "04",
    tag: "ПОЛУЧЕНИЕ",
    title: "Способы\nполучения",
    icon: "Settings",
    methods: [
      {
        name: "Пирометаллургический",
        icon: "Flame",
        step: "01",
        desc: "Оксид цинка восстанавливают углём или коксом при температуре 1200–1300 °C.",
      },
      {
        name: "Электролитический",
        icon: "Zap",
        step: "02",
        desc: "Сульфид цинка обрабатывают серной кислотой. Полученный раствор сульфата очищают и подвергают электролизу. Чистый цинк осаждается на алюминиевых катодах.",
      },
    ],
  },
  {
    id: 5,
    number: "05",
    tag: "ИНТЕРЕСНОЕ",
    title: "Факты\nо цинке",
    icon: "Star",
    facts: [
      { icon: "MessageSquare", text: "Название происходит от немецкого «zine» — «заострённый». Отсылка к заострённым кристаллам, которые образуются после выплавки." },
      { icon: "Flame", text: "Соли цинка горят в пламени сине-зелёным цветом — это характерная качественная реакция на ион Zn²⁺." },
      { icon: "Heart", text: "Цинк — жизненно важный микроэлемент. Участвует в работе ферментов карбоангидраза и алкогольдегидрогеназа." },
      { icon: "Shield", text: "Недостаток цинка вызывает замедление роста, нарушения иммунитета и дерматологические проблемы." },
    ],
  },
];

const navItems = ["Введение", "Особенности", "Соединения", "Применение", "Получение", "Интересное"];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const goTo = useCallback((index: number) => {
    if (index === current || animating) return;
    setDirection(index > current ? "down" : "up");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  }, [current, animating]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goTo(Math.min(current + 1, slides.length - 1));
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goTo(Math.max(current - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, animating, goTo]);

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-[#F8F7F4] font-ibm text-[#1A1A1A] overflow-hidden relative">
      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6">
        <div className="font-cormorant text-sm tracking-[0.3em] text-[#888] uppercase">
          Химический элемент
        </div>
        <div className="flex gap-8">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                current === i
                  ? "text-[#1A1A1A] font-medium"
                  : "text-[#AAAAAA] hover:text-[#666]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Slide counter */}
      <div className="fixed bottom-8 right-12 z-50 flex items-center gap-3">
        <span className="font-cormorant text-4xl text-[#E8E6E0] font-light">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-[#CCC] text-xs">/</span>
        <span className="text-[#CCC] text-xs">{slides.length}</span>
      </div>

      {/* Vertical dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              current === i ? "w-1.5 h-6 bg-[#1A1A1A]" : "w-1.5 h-1.5 bg-[#CCC] hover:bg-[#999]"
            }`}
          />
        ))}
      </div>

      {/* Slide content */}
      <div
        className="min-h-screen flex items-center justify-center px-16 pt-20"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? direction === "down"
              ? "translateY(24px)"
              : "translateY(-24px)"
            : "translateY(0)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        {/* SLIDE 0 — Введение */}
        {slide.id === 0 && (
          <div className="w-full max-w-5xl">
            <div className="flex items-start gap-24">
              <div className="flex-1">
                <div className="text-xs tracking-[0.4em] text-[#AAAAAA] uppercase mb-8">{slide.tag}</div>
                <div
                  className="font-cormorant font-light text-[10rem] leading-none text-[#E8E6E0] select-none"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {slide.number}
                </div>
                <h1
                  className="font-cormorant text-[6rem] leading-none font-light mt-2"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {slide.title}
                </h1>
                <div className="w-12 h-px bg-[#1A1A1A] my-8" />
                <p className="text-[#666] font-ibm font-light text-lg leading-relaxed max-w-lg">
                  {slide.description}
                </p>
              </div>
              <div className="flex flex-col gap-6 pt-16">
                <div className="border border-[#E0DED8] p-6 w-44">
                  <div className="text-xs text-[#AAAAAA] tracking-widest uppercase mb-1">Период</div>
                  <div className="font-cormorant text-3xl font-light">4-й</div>
                </div>
                <div className="border border-[#E0DED8] p-6 w-44">
                  <div className="text-xs text-[#AAAAAA] tracking-widest uppercase mb-1">Группа</div>
                  <div className="font-cormorant text-3xl font-light">12-я</div>
                </div>
                <div className="border border-[#E0DED8] p-6 w-44">
                  <div className="text-xs text-[#AAAAAA] tracking-widest uppercase mb-1">Атомная масса</div>
                  <div className="font-cormorant text-3xl font-light">65,38</div>
                </div>
                <div className="border border-[#E0DED8] p-6 w-44">
                  <div className="text-xs text-[#AAAAAA] tracking-widest uppercase mb-1">Символ</div>
                  <div className="font-cormorant text-3xl font-light italic">Zn</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 1 — Особенности */}
        {slide.id === 1 && (
          <div className="w-full max-w-5xl">
            <div className="text-xs tracking-[0.4em] text-[#AAAAAA] uppercase mb-4">{slide.tag}</div>
            <h2 className="font-cormorant text-7xl font-light leading-none mb-12" style={{ letterSpacing: "-0.02em" }}>
              {slide.title!.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
            </h2>
            <div className="grid grid-cols-3 gap-px bg-[#E0DED8]">
              {slide.blocks?.map((block, i) => (
                <div key={i} className="bg-[#F8F7F4] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name={block.icon} size={16} className="text-[#888]" />
                    <span className="text-xs tracking-[0.25em] uppercase text-[#888]">{block.label}</span>
                  </div>
                  <p className="text-[#333] font-light leading-relaxed text-sm">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 2 — Соединения */}
        {slide.id === 2 && (
          <div className="w-full max-w-5xl">
            <div className="text-xs tracking-[0.4em] text-[#AAAAAA] uppercase mb-4">{slide.tag}</div>
            <h2 className="font-cormorant text-7xl font-light leading-none mb-12" style={{ letterSpacing: "-0.02em" }}>
              {slide.title!.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
            </h2>
            <div className="space-y-px bg-[#E0DED8]">
              {slide.compounds?.map((c, i) => (
                <div key={i} className="bg-[#F8F7F4] flex items-start gap-12 px-8 py-5">
                  <div className="font-cormorant text-2xl italic text-[#1A1A1A] w-28 shrink-0">{c.formula}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#888] w-44 shrink-0 pt-1">{c.name}</div>
                  <div className="text-[#555] font-light text-sm leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 3 — Применение */}
        {slide.id === 3 && (
          <div className="w-full max-w-5xl">
            <div className="text-xs tracking-[0.4em] text-[#AAAAAA] uppercase mb-4">{slide.tag}</div>
            <h2 className="font-cormorant text-7xl font-light leading-none mb-12" style={{ letterSpacing: "-0.02em" }}>
              {slide.title!.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
            </h2>
            <div className="grid grid-cols-2 gap-px bg-[#E0DED8]">
              {slide.applications?.map((app, i) => (
                <div key={i} className="bg-[#F8F7F4] p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon name={app.icon} size={16} className="text-[#888]" />
                    <span className="text-xs tracking-[0.25em] uppercase text-[#888]">{app.area}</span>
                  </div>
                  <ul className="space-y-2">
                    {app.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#444] font-light">
                        <span className="text-[#CCC] mt-1">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 4 — Получение */}
        {slide.id === 4 && (
          <div className="w-full max-w-5xl">
            <div className="text-xs tracking-[0.4em] text-[#AAAAAA] uppercase mb-4">{slide.tag}</div>
            <h2 className="font-cormorant text-7xl font-light leading-none mb-16" style={{ letterSpacing: "-0.02em" }}>
              {slide.title!.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
            </h2>
            <div className="grid grid-cols-2 gap-12">
              {slide.methods?.map((m, i) => (
                <div key={i} className="relative">
                  <div className="font-cormorant text-[7rem] font-light text-[#EEECE8] leading-none absolute -top-8 -left-2 select-none">
                    {m.step}
                  </div>
                  <div className="relative z-10 pt-10 pl-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name={m.icon} size={16} className="text-[#888]" />
                      <span className="text-xs tracking-[0.25em] uppercase text-[#888]">{m.name}</span>
                    </div>
                    <p className="text-[#444] font-light leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 5 — Интересное */}
        {slide.id === 5 && (
          <div className="w-full max-w-5xl">
            <div className="text-xs tracking-[0.4em] text-[#AAAAAA] uppercase mb-4">{slide.tag}</div>
            <h2 className="font-cormorant text-7xl font-light leading-none mb-12" style={{ letterSpacing: "-0.02em" }}>
              {slide.title!.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
            </h2>
            <div className="grid grid-cols-2 gap-px bg-[#E0DED8]">
              {slide.facts?.map((fact, i) => (
                <div key={i} className="bg-[#F8F7F4] p-8 flex gap-5">
                  <Icon name={fact.icon} size={18} className="text-[#AAAAAA] shrink-0 mt-0.5" />
                  <p className="text-[#444] font-light leading-relaxed text-sm">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom nav arrows */}
      <div className="fixed bottom-8 left-12 z-50 flex gap-4">
        <button
          onClick={() => goTo(Math.max(current - 1, 0))}
          disabled={current === 0}
          className="w-10 h-10 border border-[#E0DED8] flex items-center justify-center text-[#888] hover:border-[#999] hover:text-[#333] disabled:opacity-20 transition-all"
        >
          <Icon name="ChevronLeft" size={16} />
        </button>
        <button
          onClick={() => goTo(Math.min(current + 1, slides.length - 1))}
          disabled={current === slides.length - 1}
          className="w-10 h-10 border border-[#E0DED8] flex items-center justify-center text-[#888] hover:border-[#999] hover:text-[#333] disabled:opacity-20 transition-all"
        >
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>

      {/* Subtle background decoration */}
      <div
        className="fixed top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 60%, rgba(180,175,165,0.04) 100%)",
        }}
      />
    </div>
  );
}