
// define questions, options, and correct answer (array?). Source: MDN https://developer.mozilla.org/
var questions = [
    {
        question: "What is a function?",
        options: ["Reusable block of code", "Math equation", "Type of file", "Programming language"],
        answer: "Reusable block of code"
    },
    {
        question: "What does var mean?",
        options: ["Varnish", "Variable", "Value at risk", "Varsity"],
        answer: "Variable"
    },
    {
        question: "How do you prefix comments in Javascript?",
        options: ["//", "<!-- -->", "<comment>", "You can't"],
        answer: "//"
    },
    {
        question: "What percent of websites use Javascript?",
        options: ["1%", "100%", "98%", "61%"],
        answer: "98%"
    },
    {
        question: "Which is a type of Javascript loop?:",
        options: ["Circle", "Cycle", "Random", "For"],
        answer: "For"
    },
    {
        question: "What is one way to generate a random number?",
        options: ["random(number)", "Math.random", "random.number", "randomNumber"],
        answer: "Math.random"
    },
    {
        question: "What is a method?",
        options: ["String of data", "Function within an object", "Array of data", "Nested function"],
        answer: "Function within an object"
    },
];

// DOM element references
    // header elements
    var viewScoresEl = document.querySelector("#viewScores");
    var timeLeftEl = document.querySelector("timeLeft");

    // opening view
    var openingEl = document.querySelector("#opening");
    var startQuizBtnEl = document.querySelector("#startQuizBtn");

    // quiz view
    var quizEl = document.querySelector("#quiz");
    var questionEl = document.querySelector("#question");
    var choicesEl = document.querySelector("#choices");

    // submit score view
    var inputHighScoreEl = document.querySelector("#inputHighScore");
    var scoreEl = document.querySelector("#score");
    var initialsEl = document.querySelector("#initials");
    var submitScoreBtnEl = document.querySelecgor("#submitScore");

    // high scores view
    var highScoresEl = document.querySelector("#highScores");
    var scoresEl = document.querySelector("#scores");
    var goBackBtnEl = document.querySelector("#goBack");
    var clearScoresBtnEl = document.querySelector("#clearScores");


// function to start a timer when user clicks start button


// function to show the quiz


// function to progress to the next question (if statement or for loop?)


// function to check if answer is correct


// function to end the game


// function to store the high score (input initials, add to local storage, stringify JSON)


// function to show the high score


// event listeners for directing clicks