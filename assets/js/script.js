// define questions, options, and correct answer. Source: MDN https://developer.mozilla.org/
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
    var timeLeftEl = document.querySelector("#timeLeft");

    // opening view
    var openingEl = document.querySelector("#opening");
    var startQuizBtnEl = document.querySelector("#startQuizBtn");

    // quiz view
    var quizEl = document.querySelector("#quiz");
    var questionEl = document.querySelector("#question");
    var optionsEl = document.querySelector("#options");
    var option0 = document.querySelector("#option0");
    var option1 = document.querySelector("#option1");
    var option2 = document.querySelector("#option2");
    var option3 = document.querySelector("#option3");


    // submit score view
    var inputHighScoreEl = document.querySelector("#inputHighScore");
    var scoreEl = document.querySelector("#score");
    var initialsEl = document.querySelector("#initials");
    var submitScoreBtnEl = document.querySelector("#submitScore");

    // high scores view
    var highScoresEl = document.querySelector("#highScores");
    var scoresEl = document.querySelector("#scores");
    var goBackBtnEl = document.querySelector("#goBack");
    var clearScoresBtnEl = document.querySelector("#clearScores");

// time, score, and question variables
var startTime = 60;
var timeElapsed = 0;
var currentQuestion = 0;

// function to start the quiz and timer when user clicks the start button
function startQuiz() {
    questionIndex = 0; // will use this to track which question the user is on
    totalTime = 60
    timeLeftEl.textContent = totalTime;
    initialsEl.textContent = "";
    
    // once quiz starts, high the opening screen, input HS screen, and HS screens, but show quiz questions and time left
    openingEl.style.display = "none"
    quizEl.style.display = "block"
    inputHighScoreEl.style.display = "none"
    highScoresEl.style.display = "none"
    timeLeftEl.style.display = "block"

    // use a standard timer interval, decrementing from the starting total time
    var startTimer = setInterval(function() {
        totalTime--;
        timeLeftEl.textContent = totalTime;
        
        // once time has decreased to 0, clear the interval and if there aren't any more question run the game over function
        if(totalTime <=0) {
            clearInterval(startTimer);
            if (questionIndex <questions.length - 1) {
                gameOver();
            }
        }
    }, 1000); // decrease time by 1000ms decrements

    nextQuestion();
}

// function to stop timer -- no longer need this?
function stopTimer () {
    clearInterval(interval);
}

// function to progress to the next question (if statement or for loop?)
function nextQuestion() {
    // get the question and 4 options from the previously defined array
    question.textContent = questions[questionIndex].question;
    option0.textContent = questions[questionIndex].options[0];
    option1.textContent = questions[questionIndex].options[1];
    option2.textContent = questions[questionIndex].options[2];
    option3.textContent = questions[questionIndex].options[3];
}

// function to check if answer is correct
//// if user's answer matches correct answer, display Correct!
//// else decrement 5 second penalty
//// then increment the question index

// function to end the game
function gameOver () {
    openingEl.style.display = "none"
    quizEl.style.display = "none"
    inputHighScoreEl.style.display = "none"
    highScoresEl.style.display = "none"
    timeLeftEl.style.display = "display"

    // add more here
}

// function to store the high score (input initials, add to local storage, stringify JSON)


// function to show the high score


// event listeners for directing clicks
startQuizBtnEl.addEventListener("click", startQuiz);

option0.addEventListener("click", )
option1.addEventListener("click", )
option2.addEventListener("click", )
option3.addEventListener("click", )