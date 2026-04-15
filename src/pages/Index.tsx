import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const ACCENT = "#FF6B35";
const ACCENT2 = "#4CAF50";
const ACCENT3 = "#2196F3";
const BG = "#FFFBF7";

const navItems = [
  "Тема урока",
  "Что такое глагол?",
  "Вопросы глагола",
  "Время глагола",
  "Число глагола",
  "Частица НЕ",
  "Закрепление",
];

type Slide =
  | { id: 0 }
  | { id: 1 }
  | { id: 2 }
  | { id: 3 }
  | { id: 4 }
  | { id: 5 }
  | { id: 6 };

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [revealed, setRevealed] = useState<number[]>([]);
  const total = navItems.length;

  const goTo = useCallback(
    (index: number) => {
      if (index === current || animating) return;
      setDirection(index > current ? "right" : "left");
      setAnimating(true);
      setRevealed([]);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 320);
    },
    [current, animating]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown")
        goTo(Math.min(current + 1, total - 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp")
        goTo(Math.max(current - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, animating, goTo, total]);

  const reveal = (i: number) => {
    setRevealed((prev) => (prev.includes(i) ? prev : [...prev, i]));
  };

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden"
      style={{ background: BG, fontFamily: "'Golos Text', sans-serif" }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 py-4 shadow-sm"
        style={{ background: ACCENT, color: "#fff" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">📚</span>
          <span className="font-bold text-lg tracking-wide">Русский язык · 3 класс</span>
        </div>
        <div className="flex gap-2 flex-wrap justify-end max-w-2xl">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="px-3 py-1 rounded-full text-xs font-medium transition-all"
              style={{
                background: current === i ? "#fff" : "rgba(255,255,255,0.2)",
                color: current === i ? ACCENT : "#fff",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className="w-full h-full flex items-center justify-center px-10 py-8"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? direction === "right"
                ? "translateX(40px)"
                : "translateX(-40px)"
              : "translateX(0)",
            transition: "opacity 0.32s ease, transform 0.32s ease",
          }}
        >
          {/* СЛАЙД 0 — Тема урока */}
          {current === 0 && (
            <div className="text-center max-w-3xl mx-auto">
              <div
                className="inline-block px-6 py-2 rounded-full text-white text-sm font-medium mb-6"
                style={{ background: ACCENT }}
              >
                Урок русского языка
              </div>
              <h1
                className="font-bold mb-6"
                style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", color: "#1A1A1A", lineHeight: 1.1 }}
              >
                Глагол
              </h1>
              <div
                className="text-2xl font-medium mb-8"
                style={{ color: "#666" }}
              >
                Часть речи, которая обозначает действие предмета
              </div>
              <div className="flex justify-center gap-6 flex-wrap">
                {["бежать 🏃", "читать 📖", "рисовать 🎨", "петь 🎵", "играть ⚽"].map(
                  (w, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-2xl text-xl font-semibold"
                      style={{
                        background: ["#FFE0D4", "#D4EDDA", "#D4E6F1", "#FFF3CD", "#F8D7DA"][i],
                        color: "#333",
                      }}
                    >
                      {w}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {/* СЛАЙД 1 — Что такое глагол */}
          {current === 1 && (
            <div className="w-full max-w-4xl">
              <SectionTitle color={ACCENT}>Что такое глагол?</SectionTitle>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card color="#FFF3E0" border="#FFCC80">
                  <div className="text-4xl mb-3">📌</div>
                  <div className="font-bold text-xl mb-2" style={{ color: "#E65100" }}>
                    Определение
                  </div>
                  <div className="text-lg leading-snug text-gray-700">
                    <b>Глагол</b> — это часть речи, которая обозначает{" "}
                    <span style={{ color: ACCENT }} className="font-bold">
                      действие предмета
                    </span>{" "}
                    и отвечает на вопросы <b>что делать? что сделать?</b>
                  </div>
                </Card>
                <Card color="#E8F5E9" border="#A5D6A7">
                  <div className="text-4xl mb-3">💡</div>
                  <div className="font-bold text-xl mb-2" style={{ color: "#2E7D32" }}>
                    Примеры в предложениях
                  </div>
                  <ul className="space-y-2 text-lg text-gray-700">
                    {[
                      ["Кот", "спит", "на диване."],
                      ["Дети", "играют", "во дворе."],
                      ["Мама", "читает", "книгу."],
                    ].map(([sub, verb, rest], i) => (
                      <li key={i}>
                        {sub}{" "}
                        <span
                          className="font-bold px-1 rounded"
                          style={{ background: "#C8E6C9", color: "#1B5E20" }}
                        >
                          {verb}
                        </span>{" "}
                        {rest}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card color="#E3F2FD" border="#90CAF9" className="col-span-2">
                  <div className="text-4xl mb-3">🔍</div>
                  <div className="font-bold text-xl mb-3" style={{ color: "#1565C0" }}>
                    Глагол в предложении — это сказуемое
                  </div>
                  <div className="text-lg text-gray-700">
                    В предложении глагол чаще всего является{" "}
                    <span
                      className="font-bold px-2 py-0.5 rounded"
                      style={{ background: "#BBDEFB", color: "#0D47A1" }}
                    >
                      сказуемым
                    </span>{" "}
                    и подчёркивается двумя чертами.
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* СЛАЙД 2 — Вопросы */}
          {current === 2 && (
            <div className="w-full max-w-4xl">
              <SectionTitle color={ACCENT3}>На какие вопросы отвечает глагол?</SectionTitle>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card color="#E3F2FD" border="#90CAF9">
                  <div className="text-3xl mb-3">❓</div>
                  <div className="font-bold text-xl mb-4" style={{ color: ACCENT3 }}>
                    Несовершенный вид
                  </div>
                  <div
                    className="text-5xl font-bold mb-3 text-center"
                    style={{ color: ACCENT3 }}
                  >
                    что делать?
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mt-3">
                    {["читать", "бежать", "петь", "рисовать", "играть"].map((w, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full font-medium"
                        style={{ background: "#BBDEFB", color: "#0D47A1" }}
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </Card>
                <Card color="#FCE4EC" border="#F48FB1">
                  <div className="text-3xl mb-3">❓</div>
                  <div className="font-bold text-xl mb-4" style={{ color: "#C62828" }}>
                    Совершенный вид
                  </div>
                  <div
                    className="text-5xl font-bold mb-3 text-center"
                    style={{ color: "#E53935" }}
                  >
                    что сделать?
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mt-3">
                    {["прочитать", "пробежать", "спеть", "нарисовать", "сыграть"].map(
                      (w, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full font-medium"
                          style={{ background: "#FFCDD2", color: "#B71C1C" }}
                        >
                          {w}
                        </span>
                      )
                    )}
                  </div>
                </Card>
                <Card color="#F3E5F5" border="#CE93D8" className="col-span-2">
                  <div className="text-3xl mb-3">🎯</div>
                  <div className="font-bold text-xl mb-3" style={{ color: "#6A1B9A" }}>
                    Задание: найди глаголы!
                  </div>
                  <div className="text-lg text-gray-700 leading-relaxed">
                    <b>Берёза шумит, ветер дует, птица летит, солнце светит, дети смеются.</b>
                    <div className="mt-2 text-base text-gray-500">
                      Выпиши все глаголы и задай к ним вопрос.
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* СЛАЙД 3 — Время глагола */}
          {current === 3 && (
            <div className="w-full max-w-5xl">
              <SectionTitle color={ACCENT2}>Времена глагола</SectionTitle>
              <div className="grid grid-cols-3 gap-5 mt-8">
                {[
                  {
                    time: "Прошедшее",
                    emoji: "⏪",
                    q: "что делал?\nчто сделал?",
                    color: "#FFF8E1",
                    border: "#FFD54F",
                    text: "#E65100",
                    words: ["читал", "прочитал", "бежал", "пел"],
                    hint: "Действие уже произошло",
                  },
                  {
                    time: "Настоящее",
                    emoji: "⏺",
                    q: "что делает?\nчто делаю?",
                    color: "#E8F5E9",
                    border: "#66BB6A",
                    text: "#1B5E20",
                    words: ["читает", "бежит", "поёт", "играет"],
                    hint: "Действие происходит сейчас",
                  },
                  {
                    time: "Будущее",
                    emoji: "⏩",
                    q: "что будет делать?\nчто сделает?",
                    color: "#E3F2FD",
                    border: "#42A5F5",
                    text: "#0D47A1",
                    words: ["прочитает", "будет бежать", "споёт", "сыграет"],
                    hint: "Действие ещё не случилось",
                  },
                ].map((t, i) => (
                  <Card key={i} color={t.color} border={t.border}>
                    <div className="text-4xl mb-2 text-center">{t.emoji}</div>
                    <div
                      className="font-bold text-xl text-center mb-1"
                      style={{ color: t.text }}
                    >
                      {t.time}
                    </div>
                    <div
                      className="text-center text-sm font-medium mb-3 opacity-70"
                      style={{ color: t.text }}
                    >
                      {t.hint}
                    </div>
                    <div
                      className="text-center font-bold text-base mb-3 whitespace-pre-line"
                      style={{ color: t.text }}
                    >
                      {t.q}
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {t.words.map((w, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 rounded-full text-sm font-medium"
                          style={{
                            background: t.border + "66",
                            color: t.text,
                          }}
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
              <div
                className="mt-5 p-4 rounded-2xl text-center text-lg font-medium"
                style={{ background: "#F3E5F5", color: "#6A1B9A" }}
              >
                🌟 Глаголы в <b>настоящем и будущем</b> времени изменяются по числам и лицам. В{" "}
                <b>прошедшем</b> — по числам и родам!
              </div>
            </div>
          )}

          {/* СЛАЙД 4 — Число глагола */}
          {current === 4 && (
            <div className="w-full max-w-4xl">
              <SectionTitle color="#9C27B0">Число глагола</SectionTitle>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card color="#F3E5F5" border="#CE93D8">
                  <div className="text-5xl text-center mb-3">1️⃣</div>
                  <div className="font-bold text-2xl text-center mb-4" style={{ color: "#6A1B9A" }}>
                    Единственное число
                  </div>
                  <div className="text-center text-gray-600 mb-4">(один предмет)</div>
                  <div className="space-y-2">
                    {[
                      ["Кот", "спит"],
                      ["Птица", "летит"],
                      ["Ученик", "пишет"],
                    ].map(([sub, verb], i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-4 py-2 rounded-xl"
                        style={{ background: "#EDE7F6" }}
                      >
                        <span className="text-lg">{sub}</span>
                        <span
                          className="font-bold text-lg"
                          style={{ color: "#6A1B9A" }}
                        >
                          {verb}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card color="#E8EAF6" border="#9FA8DA">
                  <div className="text-5xl text-center mb-3">2️⃣+</div>
                  <div className="font-bold text-2xl text-center mb-4" style={{ color: "#283593" }}>
                    Множественное число
                  </div>
                  <div className="text-center text-gray-600 mb-4">(несколько предметов)</div>
                  <div className="space-y-2">
                    {[
                      ["Коты", "спят"],
                      ["Птицы", "летят"],
                      ["Ученики", "пишут"],
                    ].map(([sub, verb], i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-4 py-2 rounded-xl"
                        style={{ background: "#C5CAE9" }}
                      >
                        <span className="text-lg">{sub}</span>
                        <span
                          className="font-bold text-lg"
                          style={{ color: "#283593" }}
                        >
                          {verb}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div
                className="mt-5 p-4 rounded-2xl text-center text-lg"
                style={{ background: "#FFF3E0", color: "#E65100" }}
              >
                🎓 Чтобы определить число глагола — найди подлежащее (о ком/о чём говорится) и
                задай от него вопрос к глаголу.
              </div>
            </div>
          )}

          {/* СЛАЙД 5 — Частица НЕ */}
          {current === 5 && (
            <div className="w-full max-w-4xl">
              <SectionTitle color="#F44336">Частица НЕ с глаголами</SectionTitle>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card color="#FFEBEE" border="#EF9A9A">
                  <div className="text-4xl mb-3">📝</div>
                  <div className="font-bold text-xl mb-3" style={{ color: "#C62828" }}>
                    Правило
                  </div>
                  <div
                    className="text-3xl font-bold text-center py-4 rounded-xl mb-3"
                    style={{ background: "#FFCDD2", color: "#B71C1C" }}
                  >
                    НЕ с глаголами<br />пишется РАЗДЕЛЬНО
                  </div>
                  <div className="text-lg text-gray-700">
                    Частица <b>не</b> с глаголами всегда пишется <b>отдельно</b>, через пробел.
                  </div>
                </Card>
                <Card color="#E8F5E9" border="#A5D6A7">
                  <div className="text-4xl mb-3">✅</div>
                  <div className="font-bold text-xl mb-3" style={{ color: "#2E7D32" }}>
                    Примеры
                  </div>
                  <div className="space-y-3">
                    {[
                      ["не читал", "не читает"],
                      ["не спал", "не спит"],
                      ["не бежал", "не бежит"],
                      ["не пел", "не поёт"],
                    ].map(([a, b], i) => (
                      <div key={i} className="flex gap-3">
                        <span
                          className="px-3 py-1 rounded-full font-bold"
                          style={{ background: "#C8E6C9", color: "#1B5E20" }}
                        >
                          {a}
                        </span>
                        <span
                          className="px-3 py-1 rounded-full font-bold"
                          style={{ background: "#C8E6C9", color: "#1B5E20" }}
                        >
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card color="#FFF9C4" border="#FFF176" className="col-span-2">
                  <div className="text-3xl mb-2">⚠️ Исключения</div>
                  <div className="text-lg text-gray-700">
                    Некоторые глаголы без <b>не</b> не употребляются и пишутся <b>слитно</b>:{" "}
                    <span className="font-bold" style={{ color: "#E65100" }}>
                      ненавидеть, негодовать, нездоровиться, несдобровать
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* СЛАЙД 6 — Закрепление */}
          {current === 6 && (
            <div className="w-full max-w-5xl">
              <SectionTitle color={ACCENT}>Закрепление</SectionTitle>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  {
                    q: "На какой вопрос отвечает глагол?",
                    a: "Что делать? Что сделать? и другие вопросы действия.",
                    emoji: "❓",
                    color: "#E3F2FD",
                    border: "#90CAF9",
                    acolor: "#0D47A1",
                  },
                  {
                    q: "Какие три времени есть у глагола?",
                    a: "Прошедшее, настоящее, будущее.",
                    emoji: "⏰",
                    color: "#FFF8E1",
                    border: "#FFD54F",
                    acolor: "#E65100",
                  },
                  {
                    q: "Каким членом предложения является глагол?",
                    a: "Глагол — это сказуемое. Подчёркивается двумя чертами.",
                    emoji: "📝",
                    color: "#E8F5E9",
                    border: "#A5D6A7",
                    acolor: "#1B5E20",
                  },
                  {
                    q: "Как пишется НЕ с глаголами?",
                    a: "Раздельно! «не читал», «не бежит».",
                    emoji: "✍️",
                    color: "#FFEBEE",
                    border: "#EF9A9A",
                    acolor: "#B71C1C",
                  },
                  {
                    q: "Как изменяются глаголы?",
                    a: "По временам, числам, лицам и (в прошедшем) по родам.",
                    emoji: "🔄",
                    color: "#F3E5F5",
                    border: "#CE93D8",
                    acolor: "#6A1B9A",
                  },
                  {
                    q: "Найди глагол: дом, бежать, красивый, петь?",
                    a: "бежать и петь — это глаголы!",
                    emoji: "🔎",
                    color: "#FFF3E0",
                    border: "#FFCC80",
                    acolor: "#BF360C",
                  },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => reveal(i)}
                    className="text-left rounded-2xl p-5 transition-all hover:scale-105 border-2"
                    style={{
                      background: revealed.includes(i) ? item.color : "#fff",
                      borderColor: item.border,
                      cursor: "pointer",
                    }}
                  >
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <div className="font-semibold text-gray-800 text-sm leading-snug mb-2">
                      {item.q}
                    </div>
                    {revealed.includes(i) ? (
                      <div
                        className="text-sm font-bold mt-2"
                        style={{ color: item.acolor }}
                      >
                        {item.a}
                      </div>
                    ) : (
                      <div className="text-xs text-gray-400 mt-2">
                        Нажми, чтобы узнать ответ
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div
                className="mt-5 text-center text-xl font-bold py-3 rounded-2xl"
                style={{ background: "#FFF3E0", color: ACCENT }}
              >
                🎉 Молодцы! Глагол — важная часть речи. Без него невозможно составить предложение!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer nav */}
      <footer
        className="flex items-center justify-between px-8 py-3 border-t"
        style={{ borderColor: "#FFD7C4", background: "#FFF5F0" }}
      >
        <button
          onClick={() => goTo(Math.max(current - 1, 0))}
          disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all disabled:opacity-30"
          style={{ background: ACCENT, color: "#fff" }}
        >
          <Icon name="ChevronLeft" size={18} />
          Назад
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all"
              style={{
                width: current === i ? 28 : 10,
                height: 10,
                background: current === i ? ACCENT : "#FFCC9E",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(Math.min(current + 1, total - 1))}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all disabled:opacity-30"
          style={{ background: ACCENT, color: "#fff" }}
        >
          Далее
          <Icon name="ChevronRight" size={18} />
        </button>
      </footer>
    </div>
  );
}

function Card({
  children,
  color,
  border,
  className = "",
}: {
  children: React.ReactNode;
  color: string;
  border: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 border-2 ${className}`}
      style={{ background: color, borderColor: border }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <h2
      className="font-bold text-center"
      style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color, lineHeight: 1.2 }}
    >
      {children}
    </h2>
  );
}
