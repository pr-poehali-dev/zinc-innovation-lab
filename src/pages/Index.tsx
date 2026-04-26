import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 0,
    type: "title",
    tag: "НАУЧНАЯ ПРЕЗЕНТАЦИЯ",
    title: "Биосфера как единая система:",
    subtitle: "Вклад В.И. Вернадского",
    decoration: "🌍",
  },
  {
    id: 1,
    type: "definition",
    tag: "СЛАЙД 1",
    title: "Что такое Биосфера?",
    subtitle: "Общее определение",
    quote:
      "Биосфера (от греч. βίος — жизнь и σφαῖρα — шар) — это оболочка Земли, населённая живыми организмами.",
    intro: "Она включает в себя:",
    items: [
      { icon: "Wind", label: "Нижнюю часть атмосферы", desc: "до высоты примерно 15–20 км" },
      { icon: "Waves", label: "Всю гидросферу", desc: "океаны, моря, реки, озёра" },
      { icon: "Mountain", label: "Верхнюю часть литосферы", desc: "земной коры, до глубины 2–3 км" },
    ],
    footer:
      "Это область, где взаимодействуют живое и неживое вещество, где происходят глобальные циклы веществ и энергии.",
  },
  {
    id: 2,
    type: "person",
    tag: "СЛАЙД 2",
    title: "В.И. Вернадский",
    subtitle: "Основоположник учения",
    years: "1863 – 1945",
    roles: ["естествоиспытатель", "минералог", "геохимик", "основоположник биогеохимии"],
    contributions: [
      "Впервые представил биосферу как глобальную динамическую систему, сформированную живыми организмами.",
      "Доказал геологическую роль живого вещества на планете.",
      "Разработал концепцию Ноосферы — сферы разума.",
    ],
  },
  {
    id: 3,
    type: "living",
    tag: "СЛАЙД 3",
    title: "Живое Вещество",
    subtitle: "Ключевой элемент учения Вернадского",
    definition:
      "Живое вещество — это совокупность всех живых организмов на планете, независимо от их размеров, сложности и систематической принадлежности. Это не просто сумма, а единое целое, обладающее уникальными функциями.",
    functions: [
      {
        name: "Газовая",
        desc: "Формирование атмосферы (кислород, азот, углекислый газ).",
        icon: "Wind",
        color: "#4FC3F7",
      },
      {
        name: "Окислительно-восстановительная",
        desc: "Преобразование элементов (например, железа, серы).",
        icon: "Zap",
        color: "#FFB74D",
      },
      {
        name: "Концентрационная",
        desc: "Накопление химических элементов (кальций в раковинах, углерод в торфе и угле).",
        icon: "Layers",
        color: "#81C784",
      },
      {
        name: "Биохимическая",
        desc: "Образование новых химических соединений.",
        icon: "FlaskConical",
        color: "#CE93D8",
      },
    ],
  },
  {
    id: 4,
    type: "matter",
    tag: "СЛАЙД 4",
    title: "Типы Вещества Биосферы",
    subtitle: "По классификации Вернадского",
    types: [
      {
        name: "Живое вещество",
        desc: "Совокупность всех организмов.",
        color: "#4CAF50",
        icon: "Leaf",
      },
      {
        name: "Биогенное вещество",
        desc: "Создано или переработано живыми организмами (уголь, нефть, торф, известняки, кислород атмосферы).",
        color: "#FF9800",
        icon: "Flame",
      },
      {
        name: "Косное вещество",
        desc: "Образуется без участия живых организмов (горные породы, минералы, вода, газы атмосферы).",
        color: "#9E9E9E",
        icon: "Mountain",
      },
      {
        name: "Биокосное вещество",
        desc: "Продукты совместной деятельности живых организмов и косных процессов (почвы, глины, природные воды).",
        color: "#795548",
        icon: "Globe",
      },
    ],
    footer:
      "Все эти виды вещества не существуют изолированно, а постоянно обмениваются энергией и веществом в рамках единой системы.",
  },
  {
    id: 5,
    type: "system",
    tag: "СЛАЙД 5",
    title: "Биосфера как единая динамическая система",
    subtitle: "Системный взгляд Вернадского",
    pillars: [
      {
        icon: "Sun",
        title: "Энергетическая основа",
        text: "Вся система приводится в движение солнечной энергией, усваиваемой и трансформируемой живым веществом.",
        color: "#FFD54F",
      },
      {
        icon: "RefreshCw",
        title: "Круговорот веществ",
        text: "Живое вещество непрерывно участвует в глобальных геохимических циклах (круговорот углерода, азота, фосфора, воды).",
        color: "#4FC3F7",
      },
      {
        icon: "Shield",
        title: "Гомеостаз",
        text: "Биосфера обладает способностью к саморегуляции, поддерживая условия, благоприятные для жизни.",
        color: "#81C784",
      },
    ],
    quote:
      "Биосфера — это не просто сумма компонентов, а единая система, где все части взаимосвязаны и взаимозависимы.",
  },
  {
    id: 6,
    type: "noosphere",
    tag: "СЛАЙД 6",
    title: "Концепция Ноосферы",
    subtitle: "Следующий этап эволюции",
    term: "νοῦς — разум",
    definition:
      "Ноосфера — это качественно новое состояние биосферы, в котором человеческий разум и направленная им деятельность становятся определяющим фактором развития планеты.",
    blocks: [
      {
        icon: "Brain",
        title: "Суть концепции",
        text: "Человечество, осознавая свою геологическую силу, должно взять на себя ответственность за управление природными процессами, направляя их на благо всего живого.",
        color: "#CE93D8",
      },
      {
        icon: "AlertTriangle",
        title: "Актуальная проблема",
        text: "Сегодня деятельность человека часто носит разрушительный характер, что делает актуальной задачу перехода к разумному, устойчивому развитию.",
        color: "#EF9A9A",
      },
    ],
  },
  {
    id: 7,
    type: "significance",
    tag: "СЛАЙД 7",
    title: "Значение вклада Вернадского сегодня",
    subtitle: "Идеи, актуальные в XXI веке",
    items: [
      {
        icon: "Sprout",
        title: "Основа экологии",
        text: "Его учение лежит в основе современной экологии и природоохранной деятельности.",
        color: "#81C784",
      },
      {
        icon: "Network",
        title: "Системный подход",
        text: "Подчёркивает необходимость целостного, а не фрагментарного подхода к изучению Земли.",
        color: "#4FC3F7",
      },
      {
        icon: "TrendingUp",
        title: "Прогнозирование",
        text: "Вернадский предсказал многие глобальные экологические проблемы: изменение климата, истощение ресурсов.",
        color: "#FFB74D",
      },
      {
        icon: "Scale",
        title: "Философское значение",
        text: "Поднимает вопросы об ответственности человека за будущее планеты.",
        color: "#CE93D8",
      },
    ],
  },
  {
    id: 8,
    type: "conclusion",
    tag: "СЛАЙД 8",
    title: "Заключение",
    text1:
      "Учение В.И. Вернадского о биосфере как единой живой системе, управляемой живым веществом, — это не просто научная теория.",
    text2:
      "Это мощный интеллектуальный инструмент, который позволяет нам глубже понять, что мы являемся неотъемлемой частью огромного, взаимосвязанного мира.",
    closing:
      "Осознание этой взаимосвязи и нашей роли в биосфере — это ключ к построению устойчивого будущего и переходу к ноосферному мышлению.",
  },
];

const navItems = [
  "Титул",
  "Биосфера",
  "Вернадский",
  "Живое вещество",
  "Типы вещества",
  "Единая система",
  "Ноосфера",
  "Значение",
  "Заключение",
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (index === current || animating) return;
      setDirection(index > current ? "right" : "left");
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 340);
    },
    [current, animating]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(Math.min(current + 1, total - 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(Math.max(current - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, animating, goTo, total]);

  const s = slides[current];

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "#0D1117",
        color: "#E8EDF2",
        fontFamily: "'Golos Text', sans-serif",
      }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 py-3 border-b"
        style={{ borderColor: "#1E2A38", background: "#111820" }}
      >
        <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#4A7FA5" }}>
          В.И. Вернадский · Биосфера
        </div>
        <div className="hidden md:flex gap-1.5 flex-wrap justify-end max-w-3xl">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="px-3 py-1 rounded text-xs font-medium transition-all"
              style={{
                background: current === i ? "#1E4A6B" : "transparent",
                color: current === i ? "#7EC8E3" : "#6B8099",
                border: current === i ? "1px solid #2A6090" : "1px solid transparent",
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="text-xs" style={{ color: "#4A7FA5" }}>
          {current + 1} / {total}
        </div>
      </header>

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center px-10 py-6"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? direction === "right"
                ? "translateX(50px)"
                : "translateX(-50px)"
              : "translateX(0)",
            transition: "opacity 0.34s ease, transform 0.34s ease",
          }}
        >
          {/* СЛАЙД 0 — Титул */}
          {s.type === "title" && (
            <div className="text-center max-w-3xl">
              <div
                className="text-8xl mb-8"
                style={{ filter: "drop-shadow(0 0 40px rgba(78,198,230,0.3))" }}
              >
                {s.decoration}
              </div>
              <div
                className="inline-block px-4 py-1.5 rounded text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ background: "#1E3A52", color: "#7EC8E3", border: "1px solid #2A6090" }}
              >
                {s.tag}
              </div>
              <h1
                className="font-bold leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#E8F4F8" }}
              >
                {s.title}
              </h1>
              <h2
                className="font-light"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: "#7EC8E3" }}
              >
                {s.subtitle}
              </h2>
              <div
                className="mt-10 w-24 h-px mx-auto"
                style={{ background: "linear-gradient(90deg, transparent, #2A6090, transparent)" }}
              />
            </div>
          )}

          {/* СЛАЙД 1 — Биосфера */}
          {s.type === "definition" && (
            <div className="w-full max-w-5xl">
              <SlideHeader tag={s.tag!} title={s.title} subtitle={s.subtitle} />
              <blockquote
                className="mt-6 px-5 py-4 rounded-lg text-lg italic leading-relaxed"
                style={{
                  background: "#131E2A",
                  borderLeft: "3px solid #2A6090",
                  color: "#A8C8D8",
                }}
              >
                {s.quote}
              </blockquote>
              <p className="mt-4 text-sm font-semibold tracking-wider uppercase" style={{ color: "#4A7FA5" }}>
                {s.intro}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {s.items?.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border"
                    style={{ background: "#0F1922", borderColor: "#1E3A52" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: "#1E3A52" }}
                    >
                      <Icon name={item.icon as string} size={20} style={{ color: "#7EC8E3" }} />
                    </div>
                    <div className="font-semibold text-base mb-1" style={{ color: "#C8E8F4" }}>
                      {item.label}
                    </div>
                    <div className="text-sm" style={{ color: "#6B8099" }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="mt-5 text-base leading-relaxed"
                style={{
                  color: "#8FA8B8",
                  background: "#0F1922",
                  borderRadius: 12,
                  padding: "14px 18px",
                  border: "1px solid #1E3A52",
                }}
              >
                {s.footer}
              </p>
            </div>
          )}

          {/* СЛАЙД 2 — Вернадский */}
          {s.type === "person" && (
            <div className="w-full max-w-5xl">
              <SlideHeader tag={s.tag!} title={s.title} subtitle={s.subtitle} />
              <div className="grid grid-cols-5 gap-6 mt-6">
                <div
                  className="col-span-2 rounded-xl p-6 border flex flex-col justify-center items-center text-center"
                  style={{ background: "#0F1922", borderColor: "#1E3A52" }}
                >
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center text-5xl mb-4"
                    style={{ background: "#1E3A52", border: "2px solid #2A6090" }}
                  >
                    👨‍🔬
                  </div>
                  <div className="font-bold text-xl mb-1" style={{ color: "#E8F4F8" }}>
                    В.И. Вернадский
                  </div>
                  <div className="text-sm mb-4" style={{ color: "#7EC8E3" }}>
                    {s.years}
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {s.roles?.map((r, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{ background: "#1A3350", color: "#A8C8D8" }}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-3 space-y-4">
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#4A7FA5" }}>
                    Основной вклад:
                  </div>
                  {s.contributions?.map((c, i) => (
                    <div
                      key={i}
                      className="flex gap-4 rounded-xl p-4 border"
                      style={{ background: "#0F1922", borderColor: "#1E3A52" }}
                    >
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ background: "#1E3A52", color: "#7EC8E3" }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-base leading-relaxed" style={{ color: "#A8C8D8" }}>
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* СЛАЙД 3 — Живое вещество */}
          {s.type === "living" && (
            <div className="w-full max-w-5xl">
              <SlideHeader tag={s.tag!} title={s.title} subtitle={s.subtitle} />
              <div
                className="mt-5 p-4 rounded-xl border text-base leading-relaxed italic"
                style={{
                  background: "#0F1922",
                  borderColor: "#1E3A52",
                  color: "#A8C8D8",
                  borderLeft: "3px solid #4A7FA5",
                }}
              >
                <span className="font-bold not-italic" style={{ color: "#7EC8E3" }}>
                  Определение:{" "}
                </span>
                {s.definition}
              </div>
              <div className="mt-4">
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7FA5" }}>
                  Функции живого вещества:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {s.functions?.map((f, i) => (
                    <div
                      key={i}
                      className="flex gap-4 rounded-xl p-4 border"
                      style={{ background: "#0F1922", borderColor: "#1E3A52" }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: f.color + "22" }}
                      >
                        <Icon name={f.icon as string} size={20} style={{ color: f.color }} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-1" style={{ color: f.color }}>
                          {f.name}
                        </div>
                        <div className="text-sm leading-snug" style={{ color: "#7A9AB0" }}>
                          {f.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* СЛАЙД 4 — Типы вещества */}
          {s.type === "matter" && (
            <div className="w-full max-w-5xl">
              <SlideHeader tag={s.tag!} title={s.title} subtitle={s.subtitle} />
              <div className="grid grid-cols-2 gap-4 mt-6">
                {s.types?.map((t, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border flex gap-4"
                    style={{ background: "#0F1922", borderColor: "#1E3A52" }}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: t.color + "22" }}
                    >
                      <Icon name={t.icon as string} size={24} style={{ color: t.color }} />
                    </div>
                    <div>
                      <div className="font-bold mb-1.5" style={{ color: t.color }}>
                        {t.name}
                      </div>
                      <div className="text-sm leading-snug" style={{ color: "#7A9AB0" }}>
                        {t.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 px-5 py-3 rounded-xl text-sm leading-relaxed font-medium"
                style={{ background: "#1A2E40", color: "#A8C8D8", border: "1px solid #2A4F6A" }}
              >
                💡 <span className="font-bold">Главная идея:</span> {s.footer}
              </div>
            </div>
          )}

          {/* СЛАЙД 5 — Единая система */}
          {s.type === "system" && (
            <div className="w-full max-w-5xl">
              <SlideHeader tag={s.tag!} title={s.title} subtitle={s.subtitle} />
              <blockquote
                className="mt-5 px-5 py-4 rounded-lg text-base italic leading-relaxed text-center"
                style={{
                  background: "#131E2A",
                  borderLeft: "3px solid #2A6090",
                  color: "#A8C8D8",
                }}
              >
                «{s.quote}»
              </blockquote>
              <div className="grid grid-cols-3 gap-4 mt-5">
                {s.pillars?.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-6 border text-center"
                    style={{ background: "#0F1922", borderColor: "#1E3A52" }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: p.color + "22" }}
                    >
                      <Icon name={p.icon as string} size={28} style={{ color: p.color }} />
                    </div>
                    <div className="font-bold text-base mb-2" style={{ color: p.color }}>
                      {p.title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "#7A9AB0" }}>
                      {p.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* СЛАЙД 6 — Ноосфера */}
          {s.type === "noosphere" && (
            <div className="w-full max-w-4xl">
              <SlideHeader tag={s.tag!} title={s.title} subtitle={s.subtitle} />
              <div className="mt-5 flex items-center justify-center gap-3 mb-4">
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: "#2A1E4A", color: "#CE93D8", border: "1px solid #6A3D8A" }}
                >
                  от греч. {s.term}
                </span>
              </div>
              <div
                className="p-5 rounded-xl border mb-5 text-base leading-relaxed"
                style={{
                  background: "#1A1028",
                  borderColor: "#3D1E5A",
                  color: "#D8B4E8",
                  borderLeft: "3px solid #9C27B0",
                }}
              >
                <span className="font-bold" style={{ color: "#CE93D8" }}>Определение: </span>
                {s.definition}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {s.blocks?.map((b, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border flex gap-4"
                    style={{ background: "#0F1922", borderColor: "#1E3A52" }}
                  >
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{ background: b.color + "22" }}
                    >
                      <Icon name={b.icon as string} size={22} style={{ color: b.color }} />
                    </div>
                    <div>
                      <div className="font-bold mb-1.5" style={{ color: b.color }}>
                        {b.title}
                      </div>
                      <div className="text-sm leading-snug" style={{ color: "#7A9AB0" }}>
                        {b.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* СЛАЙД 7 — Значение */}
          {s.type === "significance" && (
            <div className="w-full max-w-5xl">
              <SlideHeader tag={s.tag!} title={s.title} subtitle={s.subtitle} />
              <div className="grid grid-cols-2 gap-4 mt-6">
                {s.items?.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border flex gap-4"
                    style={{ background: "#0F1922", borderColor: "#1E3A52" }}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: item.color + "22" }}
                    >
                      <Icon name={item.icon as string} size={24} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="font-bold mb-1.5" style={{ color: item.color }}>
                        {item.title}
                      </div>
                      <div className="text-sm leading-snug" style={{ color: "#7A9AB0" }}>
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* СЛАЙД 8 — Заключение */}
          {s.type === "conclusion" && (
            <div className="w-full max-w-3xl text-center">
              <SlideHeader tag={s.tag!} title={s.title} center />
              <div
                className="mt-6 p-6 rounded-2xl border mb-5 text-lg leading-relaxed"
                style={{ background: "#0F1922", borderColor: "#1E3A52", color: "#C8E8F4" }}
              >
                <p className="mb-3">{s.text1}</p>
                <p className="font-semibold" style={{ color: "#7EC8E3" }}>
                  {s.text2}
                </p>
              </div>
              <div
                className="p-5 rounded-xl text-base leading-relaxed font-medium"
                style={{
                  background: "linear-gradient(135deg, #1A2E40, #1A1028)",
                  color: "#A8C8D8",
                  border: "1px solid #2A4F6A",
                }}
              >
                🌿 {s.closing}
              </div>
              <div className="mt-8 text-sm tracking-widest uppercase" style={{ color: "#2A4F6A" }}>
                В.И. Вернадский · 1863–1945
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex items-center justify-between px-8 py-3 border-t"
        style={{ borderColor: "#1E2A38", background: "#111820" }}
      >
        <button
          onClick={() => goTo(Math.max(current - 1, 0))}
          disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-25"
          style={{ background: "#1E3A52", color: "#7EC8E3" }}
        >
          <Icon name="ChevronLeft" size={16} />
          Назад
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all"
              style={{
                width: current === i ? 24 : 8,
                height: 8,
                background: current === i ? "#4A7FA5" : "#1E3A52",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(Math.min(current + 1, total - 1))}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-25"
          style={{ background: "#1E3A52", color: "#7EC8E3" }}
        >
          Далее
          <Icon name="ChevronRight" size={16} />
        </button>
      </footer>
    </div>
  );
}

function SlideHeader({
  tag,
  title,
  subtitle,
  center = false,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <div
        className="inline-block px-3 py-1 rounded text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ background: "#1E3A52", color: "#4A7FA5" }}
      >
        {tag}
      </div>
      <h2
        className="font-bold leading-tight"
        style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", color: "#E8F4F8" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-base" style={{ color: "#4A7FA5" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}