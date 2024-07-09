// Define las preguntas específicas para cada página aquí

const questionsPage1 = [
  {
    question: "¿Cuál de estas imágenes muestra un gato?",
    options: [
      { type: "image", value: "https://picsum.photos/200/200?random=4" },
      { type: "text", value: "Un gato" },
      { type: "text", value: "Un perro" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Cuál de estas imágenes muestra un perro?",
    options: [
      { type: "image", value: "https://picsum.photos/200/200?random=5" },
      { type: "text", value: "Un gato" },
      { type: "text", value: "Un perro" },
    ],
    correctOption: 3,
  },
  // Agrega más preguntas aquí
];

const questionsPage2 = [
  {
    question: "¿Qué animal es conocido como el mejor amigo del hombre?",
    options: [
      { type: "text", value: "Un gato" },
      { type: "text", value: "Un perro" },
      { type: "text", value: "Un elefante" },
    ],
    correctOption: 2,
  },
  {
    question: "¿Cuál es el animal más rápido del mundo?",
    options: [
      { type: "text", value: "El guepardo" },
      { type: "text", value: "El león" },
      { type: "text", value: "El halcón peregrino" },
    ],
    correctOption: 3,
  },
];

const preguntasBiologia = [
  {
    question: "¿Cuál es el objetivo de la práctica realizada?",
    options: [
      { type: "text", value: "a) Estudiar la fotosíntesis" },
      {
        type: "text",
        value: "b) Observar la división celular en raíces de cebolla",
      },
      { type: "text", value: "c) Analizar la estructura de las hojas" },
      { type: "text", value: "d) Examinar la composición del suelo" },
    ],
    correctOption: 2,
  },
  {
    question:
      "¿Qué reactivo se utiliza para teñir las células en esta práctica?",
    options: [
      { type: "text", value: "a) Azul de metileno" },
      { type: "text", value: "b) Lugol" },
      { type: "text", value: "c) Orceína" },
      { type: "text", value: "d) Safranina" },
    ],
    correctOption: 3,
  },
  {
    question: "¿Cuántas fases principales tiene la mitosis?",
    options: [
      { type: "text", value: "a) 2" },
      { type: "text", value: "b) 3" },
      { type: "text", value: "c) 4" },
      { type: "text", value: "d) 5" },
    ],
    correctOption: 3,
  },
  {
    question:
      "¿Qué parte de la cebolla se utiliza para observar la división celular?",
    options: [
      { type: "text", value: "a) Hojas" },
      { type: "text", value: "b) Tallo" },
      { type: "text", value: "c) Bulbo" },
      { type: "text", value: "d) Raíces" },
    ],
    correctOption: 4,
  },
  {
    question: "¿Cuál es la función de la meiosis en las plantas?",
    options: [
      { type: "text", value: "a) Crecimiento vegetativo" },
      { type: "text", value: "b) Producción de gametos" },
      { type: "text", value: "c) Fotosíntesis" },
      { type: "text", value: "d) Absorción de nutrientes" },
    ],
    correctOption: 2,
  },
];
