//questions: What is the state bird for Kansas?
//how old is the creator of this website?

// var questionText1 ="What is the state bird of Kansas?" ;
// var questionText2 ="How old is the creator of this website?" ;
// var questionText3 ="What did I say to you when we first met??" ;
// var questionText4 = "What's 24 plus 22?";
// var answers ="Western Meadowlark"
// var answer2 = "27";
// var answer3 = "well looky looky look who just found a cookie.";
// var answer4 = "Whats the color of a dollar bill?";
// question2:["19","23","27","56"],
// question3:["Hi, i'm Dave.","Pleasure seeing you here again!","Well looky looky look who just found a cookie."]
// question4:['68',"54","66","56"];

var questions = [
  {
    question: "What is the state bird of Kansas?",
    choices: [
      "Cardinal",
      "BlueJay",
      "Western Meadowlark",
      "Barrow's Goldeneye",
    ],
    answer: "Western Meadowlark",
  },
  {
    question: "What is the opposite of Right?",
    choices: ["Left", "Up", "Wrong", "Canada"],
    answer: "Wrong",
  },
  {
    question: "Finish the name. Fresh prince of ___ air?",
    choices: ["belle", "Bel", "fresh", "bell"],
    answer: "Bel",
  },
  {
    question: "Who won the 2020 Super Bowl",
    choices: ["Cardinals", "Colorado Boulders ", "Seahawks", "Chiefs?"],
    answer: "Chiefs",
  },
];

//create variables
var Q = 0; //questions
var correct = [];
var time = 45;
var timerId;

const startBtn = document.getElementById("start");
const startScreenEl = document.getElementById("start-screen");
const endScreenEl = document.getElementById("end-screen");
const quizScreenEl = document.getElementById("quiz-screen");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const timerEl = document.getElementById("timer");
var initialInput = document.getElementById("initials");
var initialBtn = document.getElementById("save-score");
var scoreScreen = document.getElementById("score-screen");

function setTimer() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    time = 0;
    endQuiz();
  }
}

function startQuiz() {
  startScreenEl.setAttribute("class", "hide");
  quizScreenEl.removeAttribute("class");
  quizScreenEl.setAttribute("class", " card text-center");
  buildQuestionCard();
  timerId = setInterval(setTimer, 1000);
}
startBtn.addEventListener("click", startQuiz);

function buildQuestionCard() {
  var currentQuestion = questions[Q];

  questionTitleEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = choice;

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);
  });

  function questionClick() {
    //     compare this.value not equal answer if/else console.log wrong
    // if it is wrong console.log
    if (this.value !== questions[Q].answer) {
      // show "wrong on screen"
      //penalize timer
      time -= 10;
      if (time < 0) {
        time = 0;
      }
    } else {
      correct.push(questions[Q]);
      console.log("correct");
      //show right on screen
      //add time to timer
    }
    Q++;
    if (Q === questions.length) {
      endQuiz();
    } else {
      buildQuestionCard();
    }
  }

  //if else for if we run out of questions. Q===questions.length
  //create function to end quiz remove hide attribute from..remove class
  //show end screen

  // if (Q === questions ){
  //     console.log("You have made it to the last question.")
  // }
}

function endQuiz() {
  clearInterval(timerId);
  startScreenEl.innerHTML = "";
  quizScreenEl.setAttribute("class", "hide");
  endScreenEl.removeAttribute("class", "hide");
}

function saveHighScore() {
  var initials = initialInput.value;

  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  var savedScore = {
    initials: initials,
    score: time,
  };
  highscores.push(savedScore);

  window.localStorage.setItem("highscores", JSON.stringify(highscores));

  // window.location.href = "highScores.html";
  printHighScores(highscores);
}

initialBtn.onclick = saveHighScore;

function printHighScores(highscores) {
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });
  scoreScreen.removeAttribute("class", "hide");
  highscores.forEach(function (score) {
    var li = document.createElement("li");
    li.textContent = score.initials + " - " + score.score;

    var scoreUl = document.getElementById("score-list");
    scoreUl.innerHTML = "";

    scoreUl.appendChild(li);
  });
}
