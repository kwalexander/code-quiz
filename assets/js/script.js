// Tutor session
//// Saving, recalling and clearing high score list
//// View high score link
//// Go back to start button

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
    var answerCheck = document.querySelector("#answerCheck");

    // submit score view
    var inputHighScoreEl = document.querySelector("#inputHighScore");
    var scoreEl = document.querySelector("#score");
    var initialsEl = document.querySelector("#initials");
    var submitScoreBtnEl = document.querySelector("#submitScore");

    // high scores view
    var viewHighScoresEl = document.querySelector("#highScores");
    var listHighScoresEl = document.querySelector("#listScores");
    var goBackBtnEl = document.querySelector("#goBack");
    var clearScoresBtnEl = document.querySelector("#clearScores");

    var finalScore = document.querySelector("#finalScore");

// time, score, and question variables
var totalTime = 60;
var correctAnswer = 0;
var questionIndex = 0;

// function to start the quiz and timer when user clicks the start button
function startQuiz() {
    // questionIndex = 0; // will use this to track which question the user is on
    timeLeftEl.textContent = totalTime;
    initialsEl.textContent = "";
    
    // once quiz starts, hide the opening screen, input HS screen, and HS screens, but show quiz questions and time left
    openingEl.style.display = "none"
    quizEl.style.display = "block"
    inputHighScoreEl.style.display = "none"
    viewHighScoresEl.style.display = "none"
    timeLeftEl.style.display = "block"

    // use a standard timer interval, decrementing from the starting total time
    var startTimer = setInterval(function() {
        totalTime--;
        timeLeftEl.textContent = totalTime;
        
        // once time has decreased to 0, clear the interval and if there aren't any more question run the game over function
        if(totalTime <=0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000); // decrease time by 1000ms decrements

    displayQuiz();
}

// function to stop timer -- no longer need this?
function stopTimer () {
    totalTime = 1
}

function displayQuiz() {
    nextQuestion();
}

// function to display the next question
function nextQuestion() {
    // get the question and 4 options from the previously defined array
    questionEl.textContent = questions[questionIndex].question;
    option0.textContent = questions[questionIndex].options[0];
    option1.textContent = questions[questionIndex].options[1];
    option2.textContent = questions[questionIndex].options[2];
    option3.textContent = questions[questionIndex].options[3];
}

// function to check if answer is correct
//// if user's answer matches correct answer, increment the total score 1 and display Correct!
function checkAnswer(answer) {

    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].options[answer]) {
        // increment running tally of correct answers by 1
        correctAnswer++;
        answerCheck.textContent = "Correct!";
        console.log(correctAnswer);
    }
    // or else decrement 5 second penalty
    else {
        totalTime -= 5;
        timeLeftEl.textContent = totalTime;
        answerCheck.textContent = "Incorrect!";
    }

    setTimeout(() => {
        const box = document.getElementById('ansewrCheck');
        answerCheck.style.display = 'none';
    }, 2000);

    // then increment the question index and advance to the next question
    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    }
    else {
        gameOver();
    }
}

// functions to submit an answer that has been clicked in a question
function submit0() {
    checkAnswer(0);
}

function submit1() {
    checkAnswer(1);
}

function submit2() {
    checkAnswer(2);
}

function submit3() {
    checkAnswer(3);
}


// function to end the game
function gameOver() {
    openingEl.style.display = "none"
    quizEl.style.display = "none"
    inputHighScoreEl.style.display = "block"
    viewHighScoresEl.style.display = "none"
    timeLeftEl.style.display = "block"
    answerCheck.style.display = "none"
    // add more here if needed

    console.log("game over");

    finalScore.textContent = correctAnswer;

    questionIndex = 0;

    stopTimer();
}

// function to store the high score (input initials, add to local storage, stringify JSON)
function storeHighScores(event) {
    // prevent form from refreshing the page
    event.preventDefault();
    
    // display the right containers
    openingEl.style.display = "none"
    quizEl.style.display = "none"
    inputHighScoreEl.style.display = "block"
    viewHighScoresEl.style.display = "none"
    timeLeftEl.style.display = "block"
    answerCheck.style.display = "none"

    // save scores into a local storage array
    var savedHighScores = localStorage.getItem("highscores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    }
    else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialsEl.value,
        score: finalScore.textContent
    };

    // push the score to the array
    scoresArray.push(userScore);

    // stringify in local storage
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("highscores", scoresArrayString);

    showHighScores();
}

// function to show the high score
function showHighScores () {
    openingEl.style.display = "none"
    quizEl.style.display = "none"
    inputHighScoreEl.style.display = "none"
    viewHighScoresEl.style.display = "block"
    timeLeftEl.style.display = "block"
    answerCheck.style.display = "none"

    // get high scores from local storage
    var savedHighScores = localStorage.getItem("highscores");

    // convert to JSON object
    var storedHighScores = JSON.parse(savedHighScores);

    if (savedHighScores === null) {
        storedHighScores = [];
    }

    // will clear list of high scores; setting empty value in ""
    listHighScoresEl.innerHTML="";

    for (var i = 0; i < storedHighScores.length; i++) {
        var NewHighScore = document.createElement("p");
        NewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listHighScoresEl.appendChild(NewHighScore);
    }
}

// function to clear high scores
function clearScores () {
    window.localStorage.removeItem('highscores');

    showHighScores();
}

function goBack () {
    openingEl.style.display = "block"
    quizEl.style.display = "none"
    inputHighScoreEl.style.display = "none"
    viewHighScoresEl.style.display = "none"
    timeLeftEl.style.display = "block"
    answerCheck.style.display = "none"

    totalTime = 60

    startQuiz();
}

// event listeners for directing clicks
startQuizBtnEl.addEventListener("click", startQuiz);
submitScoreBtnEl.addEventListener("click", storeHighScores);
clearScoresBtnEl.addEventListener("click", clearScores);
goBackBtnEl.addEventListener("click", goBack);
viewScoresEl.addEventListener("click", showHighScores);


option0.addEventListener("click", submit0);
option1.addEventListener("click", submit1);
option2.addEventListener("click", submit2);
option3.addEventListener("click", submit3);