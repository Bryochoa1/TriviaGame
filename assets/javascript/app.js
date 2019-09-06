// create questions with answers
// prompt user question with choices
// check array to see if the answer chosen by user is correct
// store score of right or wrong

// questions

// elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


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
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}


// counter
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;

        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// check answer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}
// progress

function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "images/thumbs-up.png" :
        (scorePerCent >= 60) ? "images/4.png" :
        (scorePerCent >= 40) ? "images/2.png" :
        (scorePerCent >= 20) ? "images/3.png" :
        "images/1.jpg";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}