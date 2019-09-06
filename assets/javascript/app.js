// create questions with answers
// prompt user question with choices
// check array to see if the answer chosen by user is correct
// store score of right or wrong

// questions
var questions = [{
        prompt: "Who was the 21st president of the United states? \n(a) George Washington\n\(b) Richard Nixon\n(c) Chester A. Arthur",
        answer: "c"
    }, {
        prompt: "How many Iphones where sold in 2018?\n(a) 1 million\n\(b) 217.72 Million\n(c) 100.2 Million",
        answer: "b"
    }, {
        prompt: "What is the most highest luxury car brand in the United States this year?\n(a) BMW/n/(b) Audi/n(c) Mercedes-Benz",
        answer: "a"
    }]
    // score
var score = 0;
for (let i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("You got that Right!")
    } else {
        alert("No, No, No, You are wrong!")
    }
}