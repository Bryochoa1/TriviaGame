// create questions with answers
// prompt user question with choices
// check array to see if the answer chosen by user is correct
// store score of right or wrong

// questions

// elements
const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choice = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

// elements

let questions = [{
    question: "Who won the 2019 Nba Championship?",
    imgSrc: "assets/images/nba-Championship.jpg",
    choiceA: "Chicago Bulls",
    choiceB: "Toronto Raptors",
    choiceC: "Golden State Warriors",
    correct: "B"
}, {
    question: "Who was the NBA Kia's Most Valuable Playern 2019 ?",
    imgSrc: "assets/images/mvp-logo.png",
    choiceA: "Russel Westbrook",
    choiceB: "Steph Curry",
    choiceC: "Giannis Antetokounmpo",
    correct: "C"
}, {
    question: "What team is worth the most in the NBA?",
    imgSrc: "assets/images/money-bag.jpeg",
    choiceA: "Chicago Bulls",
    choiceB: "New York Knicks",
    choiceC: "Los Angeles Lakers",
    correct: "B"
}];



let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

// render questions

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
renderQuestion();
runningQuestionIndex++;
renderQuestion();

// progress

function progressRender() {
    for (let qIndex = 0; qIndex < lastQuestionIndex.length; qIndex++) {
        progress.innerHTML += "<div class='prog'id=" + qIndex + "></div>";
    }
}

function answerIsCorrect() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}

function answerIsWrong() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

// counter

const questionTime = 10;