const questionsData = [
  {
    question: "Which action takes BIG DEAL ALERT ?",
    a: "Set opportunty stage to close lost",
    b: "Set opportunty stage to close won",
    c: "Send notfication email",
    d: "Block account",
    correct: "c",
  },
  {
    question: "What is the threshold that triggers BIG DEAL ALERT ?",
    a: "Amount",
    b: "Probability ",
    c: "Type",
    d: "Amount & Probability",
    correct: "d",
  },
  {
    question: "What is the main purpose of BIG DEAL ALERT ?",
    a: "Help managers focus on the most valuable sales",
    b: "Bring new customers",
    c: "Predict sales",
    d: "Help the salesman manage the opportunities independently",
    correct: "a",
  },
  {
    question: "What is included in the alert email body ?",
    a: "Greeting from your boss",
    b: "Option to schedule the clode date",
    c: "Snapshot of the opportunity which had reached the given threshold",
    d: "Reply confirmation which take the opportunity stage to next level",
    correct: "c",
  },
];

const quiz = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".quiz-header");
const answerA = document.querySelector(".answer-a");
const answerB = document.querySelector(".answer-b");
const answerC = document.querySelector(".answer-c");
const answerD = document.querySelector(".answer-d");

const subBtn = document.querySelector(".submit");
const answerEls = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

runQuiz();

function runQuiz() {
  deSelcetAnswer();
  let currentQuizData = questionsData[currentQuestion];
  questionEl.textContent = currentQuizData.question;
  answerA.textContent = currentQuizData.a;
  answerB.textContent = currentQuizData.b;
  answerC.textContent = currentQuizData.c;
  answerD.textContent = currentQuizData.d;
}

function getSelectet() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelcetAnswer() {
  answerEls.forEach((element) => {
    element.checked = "";
  });
}

function startConfetii() {
  if (score === 4) {
    quiz.innerHTML = `<h2 style="text-align:center;">
    You answered corrctly ${score}/ ${questionsData.length} questions
    ${confetti()}</h2>`;
  } else {
    quiz.innerHTML = `<h2 style="text-align:center;">
    You answered corrctly ${score}/ ${questionsData.length} questions</h2><button onclick=location.reload()>Reload</button`;
  }
}

subBtn.addEventListener("click", () => {
  const answer = getSelectet();
  if (answer) {
    if (answer === questionsData[currentQuestion].correct) {
      score++;
      console.log(score);
    }
    currentQuestion++;
    if (currentQuestion < questionsData.length) {
      runQuiz();
    } else {
      startConfetii();
    }
  }
});
