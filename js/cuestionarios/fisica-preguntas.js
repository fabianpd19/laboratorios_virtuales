const practica1_fisica = [
  {
    question:
      "¿Cuál es la ecuación matemática que expresa la Segunda Ley de Newton?",
    options: [
      { type: "text", value: "a) F = m * a" },
      { type: "text", value: "b) F = m / a" },
      { type: "text", value: "c) F = a / m" },
      { type: "text", value: "d) F = m + a" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué sucede cuando se aumenta la masa de un objeto manteniendo la fuerza constante?",
    options: [
      { type: "text", value: "a) La aceleración aumenta" },
      { type: "text", value: "b) La aceleración disminuye" },
      { type: "text", value: "c) La aceleración se mantiene igual" },
      { type: "text", value: "d) No se puede determinar" },
    ],
    correctOption: 2,
  },
  {
    question:
      "¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional de Unidades?",
    options: [
      { type: "text", value: "a) Kilogramo (kg)" },
      { type: "text", value: "b) Metro (m)" },
      { type: "text", value: "c) Segundo (s)" },
      { type: "text", value: "d) Newton (N)" },
    ],
    correctOption: 4,
  },
  {
    question:
      "La Segunda Ley de Newton establece que la fuerza neta aplicada a un objeto es inversamente proporcional a su masa y aceleración.",
    options: [
      { type: "text", value: "a) Verdadero" },
      { type: "text", value: "b) Falso" },
    ],
    correctOption: 2,
  },
  {
    question:
      "La Segunda Ley de Newton tiene numerosas aplicaciones prácticas, como en el diseño de vehículos y el análisis de movimientos deportivos.",
    options: [
      { type: "text", value: "a) Verdadero" },
      { type: "text", value: "b) Falso" },
    ],
    correctOption: 1,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  startQuiz(1, practica1_fisica);
});
