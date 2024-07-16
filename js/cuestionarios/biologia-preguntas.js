// PREGUNTAS DE PRUEBA IMAGENES - TEXTO
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

// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ===================================  PREGUNTAS BIOLOGÍA ============================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================

const practica1_biologia_no = [
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

const practica2_biologia_no = [
  {
    question:
      "¿Qué equipo se menciona como esencial para la observación de los microorganismos?",
    options: [
      { type: "text", value: "a) Microscopio" },
      { type: "text", value: "b) Centrifuga" },
      { type: "text", value: "c) Espectrofotómetro" },
      { type: "text", value: "d) Autoclave" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué factor ambiental NO se menciona como objeto de estudio en el crecimiento de cianobacterias?",
    options: [
      { type: "text", value: "a) pH del suelo" },
      { type: "text", value: "b) Temperatura" },
      { type: "text", value: "c) Nutrientes" },
      { type: "text", value: "d) Intensidad de la luz" },
    ],
    correctOption: 4,
  },
  {
    question:
      "¿A qué temperatura se indica que debe mantenerse el cultivo de cianobacterias?",
    options: [
      { type: "text", value: "a) 25°C" },
      { type: "text", value: "b) 20°C" },
      { type: "text", value: "c) 30°C" },
      { type: "text", value: "d) 37°C" },
    ],
    correctOption: 3,
  },
  {
    question:
      "¿Qué tipo de agua se recomienda para preparar el medio de cultivo?",
    options: [
      { type: "text", value: "a) Agua desionizada o destilada" },
      { type: "text", value: "b) Agua de mar" },
      { type: "text", value: "c) Agua de grifo" },
      { type: "text", value: "d) Agua mineral" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué acción se recomienda realizar diariamente con el cultivo?",
    options: [
      { type: "text", value: "a) Observar y registrar el crecimiento" },
      { type: "text", value: "b) Cambiar el medio de cultivo" },
      { type: "text", value: "c) Agitar vigorosamente" },
      { type: "text", value: "d) Añadir antibióticos" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Una característica destacable de las cianobacterias?",
    options: [
      { type: "text", value: "a) Su producción de oxígeno" },
      { type: "text", value: "b) Su capacidad de producir toxinas" },
      { type: "text", value: "c) Su resistencia a los antibióticos" },
      { type: "text", value: "d) Su habilidad para fijar Pb" },
    ],
    correctOption: 1,
  },
];

const practica1_biologia = [
  {
    question:
      "¿Qué colorante se usa para teñir el almidón en las células vegetales?",
    options: [
      { type: "text", value: "a) Lugol al 1%" },
      { type: "text", value: "b) Azul de metileno al 1%" },
      { type: "text", value: "c) Eosina" },
      { type: "text", value: "d) Safranina" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué estructura celular se tiñe específicamente con azul de metileno en células animales?",
    options: [
      { type: "text", value: "a) Núcleo" },
      { type: "text", value: "b) Membrana celular" },
      { type: "text", value: "c) Cloroplasto" },
      { type: "text", value: "d) Pared celular" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué estructura celular se espera observar en las células vegetales que no está presente en las células animales?",
    options: [
      { type: "text", value: "a) Pared celular" },
      { type: "text", value: "b) Núcleo" },
      { type: "text", value: "c) Mitocondrias" },
      { type: "text", value: "d) Retículo endoplásmico" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué se recomienda hacer para evitar la contaminación de la muestra?",
    options: [
      { type: "text", value: "a) Usar guantes de nitrilo" },
      { type: "text", value: "b) Agitar vigorosamente la muestra" },
      { type: "text", value: "c) Exponer la muestra al aire" },
      { type: "text", value: "d) Usar agua del grifo" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué acción se debe evitar al colocar el cubreobjetos sobre la muestra?",
    options: [
      { type: "text", value: "a) La formación de burbujas" },
      { type: "text", value: "b) El contacto directo con la muestra" },
      { type: "text", value: "c) El uso de solución isotónica" },
      { type: "text", value: "d) La observación inmediata al microscopio" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué se debe hacer con el exceso de colorante en la muestra de células animales?",
    options: [
      { type: "text", value: "a) Retirarlo con papel secante" },
      { type: "text", value: "b) Dejarlo para intensificar la tinción" },
      { type: "text", value: "c) Lavarlo con agua corriente" },
      { type: "text", value: "d) Agregar más solución isotónica" },
    ],
    correctOption: 1,
  },
];

// Añade preguntasNuevas al banco de preguntas existente según sea necesario

document.addEventListener("DOMContentLoaded", () => {
  startQuiz(1, practica1_biologia);
  // startQuiz(2, practica2_biologia);
  // startQuiz(2, questionsPage2);
  // startQuiz(3, preguntasBiologia);
});
