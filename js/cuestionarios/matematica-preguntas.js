// PREGUNTAS DE CREAR FUNCIONES - TEXTO
const practica1_matematica = [
  {
    question:
      "¿Cuál de las siguientes expresiones representa una función lineal?",
    options: [
      { type: "text", value: "f(x) = 2x^2 + 3x - 1" },
      { type: "text", value: "f(x) = 5x + 2" },
      { type: "text", value: "f(x) = 3x^3 - 2x + 4" },
      { type: "text", value: "f(x) = sin(x)" },
    ],
    correctOption: 2,
  },
  {
    question:
      "Si la pendiente de una función lineal es negativa, ¿cómo se caracteriza su gráfica?",
    options: [
      { type: "text", value: "Es una línea recta creciente" },
      { type: "text", value: "Es una línea recta constante" },
      { type: "text", value: "Es una línea recta decreciente" },
      { type: "text", value: "Es una parábola" },
    ],
    correctOption: 3,
  },
  {
    question:
      "¿Qué parámetro en la ecuación de una función cuadrática f(x) = ax^2 + bx + c determina si la gráfica se abre hacia arriba o hacia abajo?",
    options: [
      { type: "text", value: "b" },
      { type: "text", value: "c" },
      { type: "text", value: "a" },
      { type: "text", value: "Todos los parámetros" },
    ],
    correctOption: 3,
  },
  {
    question:
      "La ecuación de una función lineal siempre tiene la forma f(x) = mx + b, donde m es la pendiente y b es el punto de corte con el eje y.",
    options: [
      { type: "text", value: "Verdadero" },
      { type: "text", value: "Falso" },
    ],
    correctOption: 1,
  },
  {
    question:
      "Para graficar una función cuadrática en GeoGebra, se debe crear una tabla de valores y trazar los puntos correspondientes en el plano cartesiano.",
    options: [
      { type: "text", value: "Verdadero" },
      { type: "text", value: "Falso" },
    ],
    correctOption: 1,
  },
];

const practica2_matematica = [
  {
    question:
      "¿Cuál es el método de resolución de ecuaciones exponenciales que consiste en igualar los exponentes con la misma base?",
    options: [
      { type: "text", value: "Método de sustitución" },
      { type: "text", value: "Método de reducción" },
      { type: "text", value: "Método de igualación" },
      { type: "text", value: "Método de factorización" },
    ],
    correctOption: 3,
  },
  {
    question:
      "¿Qué herramientas son necesarias para resolver ecuaciones exponenciales y logarítmicas según el documento?",
    options: [
      { type: "text", value: "Regla y compás" },
      { type: "text", value: "Calculadora y acceso a Internet" },
      { type: "text", value: "Papel y lápiz" },
      { type: "text", value: "Geogebra y libro de texto" },
    ],
    correctOption: 2,
  },
  {
    question:
      "¿Qué se recomienda para mejorar las habilidades matemáticas en ecuaciones exponenciales y logarítmicas?",
    options: [
      { type: "text", value: "Practicar resolviendo problemas y ejercicios" },
      { type: "text", value: "Evitar el uso de recursos en línea" },
      { type: "text", value: "No consultar libros de texto" },
      { type: "text", value: "No utilizar Geogebra" },
    ],
    correctOption: 1,
  },
  {
    question:
      "La resolución de ecuaciones exponenciales implica igualar los exponentes con la misma base.",
    options: [
      { type: "text", value: "Verdadero" },
      { type: "text", value: "Falso" },
    ],
    correctOption: 1,
  },
  {
    question:
      "Las ecuaciones logarítmicas solo se resuelven cuando la base es mayor que 1.",
    options: [
      { type: "text", value: "Verdadero" },
      { type: "text", value: "Falso" },
    ],
    correctOption: 2,
  },
];

const practica3_matematica = [
  {
    question:
      "¿Cuál es una característica del dominio de las funciones exponenciales?",
    options: [
      { type: "text", value: "Solo incluye números enteros" },
      { type: "text", value: "Son todos los números reales" },
      { type: "text", value: "Son todos los números reales positivos" },
      { type: "text", value: "No tiene un dominio definido" },
    ],
    correctOption: 2,
  },
  {
    question: "¿Qué propiedad cumple la función logarítmica del producto?",
    options: [
      { type: "text", value: "Suma de logaritmos" },
      { type: "text", value: "Resto de logaritmos" },
      { type: "text", value: "Multiplicación de logaritmos" },
      { type: "text", value: "División de logaritmos" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Cuál es una característica de las funciones logarítmicas?",
    options: [
      { type: "text", value: "Siempre son decrecientes" },
      { type: "text", value: "Tienen un dominio limitado" },
      { type: "text", value: "Son todas las inyecciones" },
      { type: "text", value: "No tienen recorrido definido" },
    ],
    correctOption: 3,
  },
  {
    question:
      "La función exponencial se puede expresar como ( f(x) = a^x ), donde 'a' es la base de la exponencial y 'x' es la variable independiente.",
    options: [
      { type: "text", value: "Verdadero" },
      { type: "text", value: "Falso" },
    ],
    correctOption: 1,
  },
  {
    question: "La función logarítmica siempre es decreciente si ( a > 1 ).",
    options: [
      { type: "text", value: "Verdadero" },
      { type: "text", value: "Falso" },
    ],
    correctOption: 2,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  startQuiz(1, practica1_matematica);
  startQuiz(2, practica2_matematica);
  startQuiz(3, practica3_matematica);
});
