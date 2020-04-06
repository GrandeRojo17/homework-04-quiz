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
    question: "What is the state bird of Kansas",
    choices: [
      "Cardinal",
      "BlueJay",
      "Western Meadowlark",
      "Barrow's Goldeneye",
    ],
    answer: "Western Meadowlark",
  },
  {
    question: "What is the opposite of Right",
    choices: ["Left", "Up", "Wrong", "Canada"],
    answer: "Wrong",
  },
  {
    question: "Finish the name. Fresh prince of ___ air",
    choices: ["belle", "Bel", "fresh", "bell"],
    answer: "Bel",
  },
  {
    question: "Who won the 2020 Super Bowl",
    choices: ["Cardinals", "Colorado Boulders ", "Seahawks", "Chiefs"],
    answer: "Chiefs",
  },
];

//create variables
var Q = 0; //questions
var correct = [];
var time = 1000;

var startBtn = document.getElementById("start");
var startScreenEl = document.getElementById("start-screen");
var endScreenEl = document.getElementById("end-screen");
var quizScreenEl = document.getElementById("quiz-screen");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");

function startQuiz() {
  startScreenEl.setAttribute("class", "hide");
  quizScreenEl.removeAttribute("class");
  buildQuestionCard();
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
    console.log("wrong the answer is"+ questions[Q].answer) ;
  } else {
    correct.push(questions[Q]);
    console.log("correct");
    //show right on screen
    //add time to timer
  }

  Q++;

  buildQuestionCard();
}

  //if else for if we run out of questions. Q===questions.length
  //create function to end quiz remove hide attribute from..remove class
  //show end screen

  // if (Q === questions ){
  //     console.log("You have made it to the last question.")
  // }

  
}
