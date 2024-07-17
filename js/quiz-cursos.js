// quiz-cursos.js
let quizzes = {
  1: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  2: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  3: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  4: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  5: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  6: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  7: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  8: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  9: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
  10: { answers: [], currentQuestion: 0, totalQuestions: 0, questions: [] },
};

function startQuiz(quizId, questionsData) {
  quizzes[quizId].questions = questionsData;
  quizzes[quizId].totalQuestions = questionsData.length;
  showQuestion(quizId);
}

function showQuestion(quizId) {
  const quiz = quizzes[quizId];
  const questionData = quiz.questions[quiz.currentQuestion];
  let optionsHTML = "";

  questionData.options.forEach((option, index) => {
    if (option.type === "image") {
      optionsHTML += `
        <div class="option-img-container" onclick="checkAnswer(${quizId}, ${
        index + 1
      })">
          <img class="option-img" src="${option.value}">
        </div>
      `;
    } else {
      optionsHTML += `<button class="btn btn-secondary btn-block" onclick="checkAnswer(${quizId}, ${
        index + 1
      })">${option.value}</button>`;
    }
  });

  const questionHTML = `
    <div class="question">
      <h3 class="mb-3">Pregunta ${quiz.currentQuestion + 1}: ${
    questionData.question
  }</h3>
      <div class="options">${optionsHTML}</div>
    </div>
  `;

  document.getElementById(`quiz${quizId}`).innerHTML = questionHTML;
}

function checkAnswer(quizId, selectedOption) {
  const quiz = quizzes[quizId];

  if (quiz.answers[quiz.currentQuestion] !== undefined) {
    return;
  }

  quiz.answers[quiz.currentQuestion] = selectedOption;

  const options = document.querySelectorAll(
    `#quiz${quizId} .options button, #quiz${quizId} .options .option-img-container`
  );
  options.forEach((option, index) => {
    if (index + 1 !== selectedOption) {
      option.style.opacity = 0.5;
      option.onclick = null;
    }
  });

  const questionData = quiz.questions[quiz.currentQuestion];
  if (selectedOption === questionData.correctOption) {
    options[selectedOption - 1].style.border = "2px solid green";
  } else {
    options[selectedOption - 1].style.border = "2px solid red";
    options[questionData.correctOption - 1].style.border = "2px solid green";
    options[questionData.correctOption - 1].style.opacity = 1;
  }

  options.forEach((option) => {
    option.onclick = null;
  });

  document.getElementById(`nextBtn${quizId}`).classList.remove("disabled");
}

function nextQuestion(quizId) {
  const quiz = quizzes[quizId];

  if (quiz.answers[quiz.currentQuestion] === undefined) {
    alert("Por favor, selecciona una opción antes de continuar.");
    return;
  }

  quiz.currentQuestion++;
  if (quiz.currentQuestion < quiz.totalQuestions) {
    showQuestion(quizId);
    document.getElementById(`nextBtn${quizId}`).classList.add("disabled");
  } else {
    document.getElementById(`nextBtn${quizId}`).style.display = "none";
    document.getElementById(`restartBtn${quizId}`).style.display = "block";
    document.getElementById(`quiz${quizId}`).style.display = "none";
    document.getElementById(`scoreContainer${quizId}`).style.display = "block";
    showScore(quizId);
  }
}

function restartQuiz(quizId) {
  const quiz = quizzes[quizId];
  quiz.currentQuestion = 0;
  quiz.answers = [];
  showQuestion(quizId);
  document.getElementById(`nextBtn${quizId}`).style.display = "block";
  document.getElementById(`restartBtn${quizId}`).style.display = "none";
  document.getElementById(`quiz${quizId}`).style.display = "block";
  document.getElementById(`scoreContainer${quizId}`).style.display = "none";
  document.getElementById(`score${quizId}`).innerText = ""; // Limpiar el puntaje
}

function showScore(quizId) {
  const quiz = quizzes[quizId];
  let score = 0;

  quiz.answers.forEach((answer, index) => {
    if (answer === quiz.questions[index].correctOption) {
      score++;
    }
  });

  const scoreMessage = `
    <strong>Has completado el quiz.</strong><br>
    <span class="score-value">Puntaje: ${score}/${quiz.totalQuestions}</span>
  `;

  document.getElementById(`score${quizId}`).innerHTML = scoreMessage;
}
