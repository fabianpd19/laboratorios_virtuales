// quiz.js
let answers = [];
let currentQuestion = 0;
let totalQuestions = 0;
let questions = [];

function startQuiz(questionsData) {
  questions = questionsData;
  totalQuestions = questions.length;
  showQuestion();
}

function showQuestion() {
  const questionData = questions[currentQuestion];
  let optionsHTML = "";
  questionData.options.forEach((option, index) => {
    if (option.type === "image") {
      optionsHTML += `
        <div class="option-img-container" onclick="checkAnswer(${index + 1})">
            <img class="option-img" src="${option.value}">
        </div>
      `;
    } else {
      optionsHTML += `<button class="btn btn-secondary btn-block" onclick="checkAnswer(${
        index + 1
      })">${option.value}</button>`;
    }
  });

  const questionHTML = `
    <div class="question">
        <h3 class="mb-3">Pregunta ${currentQuestion + 1}: ${
    questionData.question
  }</h3>
        <div class="options">${optionsHTML}</div>
    </div>
  `;

  document.getElementById("quiz").innerHTML = questionHTML;
}

function checkAnswer(selectedOption) {
  if (answers[currentQuestion] !== undefined) {
    return;
  }

  answers[currentQuestion] = selectedOption;

  const options = document.querySelectorAll(
    ".options button, .options .option-img-container"
  );
  options.forEach((option, index) => {
    if (index + 1 !== selectedOption) {
      option.style.opacity = 0.5;
      option.onclick = null;
    }
  });

  const questionData = questions[currentQuestion];
  if (selectedOption === questionData.correctOption) {
    options[selectedOption - 1].style.border = "2px solid green";
  } else {
    options[selectedOption - 1].style.border = "2px solid red";
    options[questionData.correctOption - 1].style.border = "2px solid green"; // Marcar la opción correcta
    options[questionData.correctOption - 1].style.opacity = 1; // Eliminar la opacidad de la opción correcta
  }

  // Desactivar clics en todas las opciones después de mostrar la respuesta
  options.forEach((option) => {
    option.onclick = null;
  });

  document.getElementById("nextBtn").classList.remove("disabled");
}

function nextQuestion() {
  // Verificar si se ha seleccionado una opción
  if (answers[currentQuestion] === undefined) {
    alert("Por favor, selecciona una opción antes de continuar.");
    return;
  }

  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    showQuestion();
    document.getElementById("nextBtn").classList.add("disabled");
  } else {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("restartBtn").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("scoreContainer").style.display = "block";
    showScore();
  }
}

function restartQuiz() {
  currentQuestion = 0;
  answers = [];
  showQuestion();
  document.getElementById("nextBtn").style.display = "block";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("scoreContainer").style.display = "none";
  document.getElementById("score").innerText = ""; // Limpiar el puntaje
}

function showScore() {
  let score = 0;
  answers.forEach((answer, index) => {
    if (answer === questions[index].correctOption) {
      score++;
    }
  });

  const scoreMessage = `
    <strong>Has completado el quiz.</strong><br>
    <span class="score-value">Puntaje: ${score}/${totalQuestions}</span>
  `;

  document.getElementById("score").innerHTML = scoreMessage;
}
