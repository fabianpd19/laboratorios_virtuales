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

const practica2_biologia = [
  {
    question: "¿Qué compuesto descompone la enzima catalasa?",
    options: [
      { type: "text", value: "a) Peróxido de hidrógeno" },
      { type: "text", value: "b) Dióxido de carbono" },
      { type: "text", value: "c) Ácido láctico" },
      { type: "text", value: "d) Glucosa" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿En qué se descompone el peróxido de hidrógeno por acción de la catalasa?",
    options: [
      { type: "text", value: "a) Agua y oxígeno" },
      { type: "text", value: "b) Hidrógeno y oxígeno" },
      { type: "text", value: "c) Dióxido de carbono y agua" },
      { type: "text", value: "d) Metano y oxígeno" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué tipo de enzima es la catalasa?",
    options: [
      { type: "text", value: "a) Antioxidante" },
      { type: "text", value: "b) Digestiva" },
      { type: "text", value: "c) Hormonal" },
      { type: "text", value: "d) Estructural" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué se observa cuando la catalasa actúa sobre el peróxido de hidrógeno?",
    options: [
      { type: "text", value: "a) Formación de espuma" },
      { type: "text", value: "b) Cambio de color a rojo" },
      { type: "text", value: "c) Precipitación" },
      { type: "text", value: "d) Congelación" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué tejido es buena fuente de catalasa?",
    options: [
      { type: "text", value: "a) Hígado de pollo" },
      { type: "text", value: "b) Músculo de res" },
      { type: "text", value: "c) Piel de cerdo" },
      { type: "text", value: "d) Riñón de cordero" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué puede causar la acumulación de peróxido de hidrógeno en las células?",
    options: [
      { type: "text", value: "a) Daño celular" },
      { type: "text", value: "b) Aumento de la energía celular" },
      { type: "text", value: "c) Mejora en la síntesis de proteínas" },
      { type: "text", value: "d) Aumento de la división celular" },
    ],
    correctOption: 1,
  },
  {
    question: "¿En qué organismos se encuentra presente la catalasa?",
    options: [
      { type: "text", value: "a) Animales, vegetales y microorganismos" },
      { type: "text", value: "b) Solo en animales" },
      { type: "text", value: "c) Solo en plantas" },
      { type: "text", value: "d) Solo en bacterias" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué factor puede influir en la actividad de la catalasa?",
    options: [
      { type: "text", value: "a) Temperatura" },
      { type: "text", value: "b) Presión atmosférica" },
      { type: "text", value: "c) Campo magnético" },
      { type: "text", value: "d) Humedad relativa" },
    ],
    correctOption: 1,
  },
];

const practica3_biologia = [
  {
    question:
      "¿Qué contiene la información genética de la mayoría de los seres vivos?",
    options: [
      { type: "text", value: "a) ADN" },
      { type: "text", value: "b) ARN" },
      { type: "text", value: "c) Proteínas" },
      { type: "text", value: "d) Lípidos" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué componente se utiliza para romper las membranas celulares?",
    options: [
      { type: "text", value: "a) Detergente" },
      { type: "text", value: "b) Alcohol" },
      { type: "text", value: "c) Sal" },
      { type: "text", value: "d) Agua destilada" },
    ],
    correctOption: 1,
  },
  {
    question: "¿En qué se disuelve normalmente el ADN?",
    options: [
      { type: "text", value: "a) Agua" },
      { type: "text", value: "b) Alcohol" },
      { type: "text", value: "c) Aceite" },
      { type: "text", value: "d) Vinagre" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué se observa como resultado de la extracción?",
    options: [
      { type: "text", value: "a) Una capa blanca gelatinosa" },
      { type: "text", value: "b) Un líquido transparente" },
      { type: "text", value: "c) Un precipitado negro" },
      { type: "text", value: "d) Burbujas de gas" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Cuál es la función principal de la sal (NaCl) en la solución?",
    options: [
      { type: "text", value: "a) Ayudar a precipitar el ADN" },
      { type: "text", value: "b) Colorear la muestra" },
      { type: "text", value: "c) Neutralizar el pH" },
      { type: "text", value: "d) Disolver las proteínas" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué característica tiene el ADN en todos los seres vivos?",
    options: [
      { type: "text", value: "a) Estructura química idéntica" },
      { type: "text", value: "b) Secuencia de bases idéntica" },
      { type: "text", value: "c) Longitud idéntica" },
      { type: "text", value: "d) Peso molecular idéntico" },
    ],
    correctOption: 1,
  },
  {
    question: "¿En qué interfase precipita el ADN?",
    options: [
      { type: "text", value: "a) Entre el alcohol y el agua" },
      { type: "text", value: "b) Entre el aceite y el agua" },
      { type: "text", value: "c) Entre el detergente y el agua" },
      { type: "text", value: "d) Entre la sal y el agua" },
    ],
    correctOption: 1,
  },
];

const practica4_biologia = [
  {
    question: "¿Cuál es el sistema de clasificación sanguínea más conocido?",
    options: [
      { type: "text", value: "a) Sistema ABO" },
      { type: "text", value: "b) Sistema Rh" },
      { type: "text", value: "c) Sistema MNS" },
      { type: "text", value: "d) Sistema Duffy" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué determina el factor Rh en la sangre?",
    options: [
      { type: "text", value: "a) Si la sangre es Rh positiva o negativa" },
      { type: "text", value: "b) Si la sangre es tipo A o B" },
      { type: "text", value: "c) La cantidad de glóbulos rojos" },
      { type: "text", value: "d) La presencia de antígenos C y D" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué tipo de sangre no expresa los antígenos A ni B?",
    options: [
      { type: "text", value: "a) Tipo O" },
      { type: "text", value: "b) Tipo AB" },
      { type: "text", value: "c) Tipo A" },
      { type: "text", value: "d) Tipo B" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué reactivo se utiliza para determinar el tipo A en una muestra de sangre?",
    options: [
      { type: "text", value: "a) Anti-A" },
      { type: "text", value: "b) Anti-B" },
      { type: "text", value: "c) Anti-D" },
      { type: "text", value: "d) Anti-AB" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué se observa cuando hay una reacción positiva en la prueba de tipificación sanguínea?",
    options: [
      { type: "text", value: "a) Aglutinación" },
      { type: "text", value: "b) Cambio de color" },
      { type: "text", value: "c) Formación de burbujas" },
      { type: "text", value: "d) Precipitación" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué dispositivo se usa para obtener la muestra de sangre del dedo?",
    options: [
      { type: "text", value: "a) Lanceta" },
      { type: "text", value: "b) Jeringa" },
      { type: "text", value: "c) Aguja" },
      { type: "text", value: "d) Bisturí" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué se utiliza para mezclar la sangre con los reactivos en el portaobjetos?",
    options: [
      { type: "text", value: "a) Palillos" },
      { type: "text", value: "b) Pipetas" },
      { type: "text", value: "c) Agujas" },
      { type: "text", value: "d) Hisopos" },
    ],
    correctOption: 1,
  },
];

// Preguntas adicionales sobre semen bovino
const practica5_biologia = [
  {
    question:
      "¿Cuál es el principal indicador de la calidad del semen bovino mencionado?",
    options: [
      { type: "text", value: "a) La actividad espermática" },
      { type: "text", value: "b) El color del semen" },
      { type: "text", value: "c) El volumen de la muestra" },
      { type: "text", value: "d) La temperatura de almacenamiento" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué porcentaje de movilidad progresiva se considera normal en semen bovino?",
    options: [
      { type: "text", value: "a) Al menos el 50%" },
      { type: "text", value: "b) Menos del 30%" },
      { type: "text", value: "c) Exactamente el 75%" },
      { type: "text", value: "d) Más del 90%" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Qué equipo es esencial para observar la actividad espermática?",
    options: [
      { type: "text", value: "a) Microscopio" },
      { type: "text", value: "b) Centrífuga" },
      { type: "text", value: "c) Espectrofotómetro" },
      { type: "text", value: "d) Incubadora" },
    ],
    correctOption: 1,
  },
  {
    question:
      "¿Qué tipo de movimiento caracteriza a los espermatozoides con movilidad progresiva?",
    options: [
      { type: "text", value: "a) Movimiento lineal y constante" },
      { type: "text", value: "b) Movimiento circular" },
      { type: "text", value: "c) Movimiento errático" },
      { type: "text", value: "d) Ausencia de movimiento" },
    ],
    correctOption: 1,
  },
  {
    question: "¿Cómo se expresa la actividad espermática?",
    options: [
      {
        type: "text",
        value: "a) Como un porcentaje de espermatozoides móviles progresivos",
      },
      { type: "text", value: "b) En unidades por mililitro" },
      { type: "text", value: "c) En grados Celsius" },
      { type: "text", value: "d) En escala de pH" },
    ],
    correctOption: 1,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  startQuiz(1, practica1_biologia);
  startQuiz(2, practica2_biologia);
  startQuiz(3, practica3_biologia);
  startQuiz(4, practica4_biologia);
  startQuiz(5, practica5_biologia);
});
