//Drake question bank

var questionsBank = [
  {
    question: "What project did Drake release in 2020?",
    options: ["Thank me later","Dark Lane Demo Tapes", "Scropion", "Views"],
    correct: "Dark Lane Demo Tapes",
  },
  {
    question: "Who has Drizzy not yet collaborated with?",
    options: ["Jay-Z", "Chris Brown", "Lil Durk", "P. Diddy"],
    correct: "P. Diddy",
  },
  {
    question: "Where is Aubrey from?",
    options: ["United States", "France", "Canada", "Dominican Republic"],
    correct: "Canada",
  },
  {
    question: "How many movies has Drake been in?",
    options: ["2","9", "6", "11" ],
    correct: "9",
  },
  {
    question: "How old is Drizzy?",
    options: ["28", "31", "33", "34"],
    correct: "34",
  },
];

var currentQuest = document.getElementById("currentQuestion");
var paragraphSection = document.getElementById("paragraph");
var answersDiv = document.getElementById("answerBox");
var currentQuestionIndex = 0;
var timer;
var timerInterval;
var display;
var startButtEl = document.getElementById("startButton")


function answerButtonClicked(e) {

    if (e.target.type === "submit"){
    //    console.log(e.target.textContent)
    console.log(questionsBank[currentQuestionIndex].correct);
       
        if (e.target.textContent !== questionsBank
        [currentQuestionIndex].correct) {
            alert("Incorrect Answer!");
            timer -= -10;
          } else {
            alert("Correct!");
          }
          currentQuestionIndex++;
          displayQuestion();
     }
    else {
        return
    }

// console.log(e.target.type==="submit")

  
};

answersDiv.addEventListener("click", answerButtonClicked)

startButtEl.addEventListener("click", handleClick);

function handleClick() {
    displayQuestion();
}

function displayQuestion() {
    var obj = questionsBank[currentQuestionIndex];
    currentQuest.textContent= obj.question;
    if (currentQuestionIndex == 5){
        alert("Game Over!")


    }
  
      
    answersDiv.textContent= " ";
    for (var i=0; i < obj.options.length; i++) {
      var option= document.createElement("button");
      option.textContent= obj.options[i];
      answersDiv.appendChild(option);
    }}

  //   demoDiv.textContent = questionsBank[index].question;
  //   optionsDiv.innerHTML = "";

  //   for (var i = 0; i < questionsBank[index].options.length; i++) {
  //     var option = document.createElement("button"); // <button></button>
  //     option.textContent = questionsBank[index].options[i]; //<button>Thank me later</button>, <button>Scorpion</button>
  //     optionsDiv.appendChild(option); // <div id='options'> <button>Thank me later</button>,<button>Scorpion</button> </div>
  //   }

  //   index++;
  

// var timerId = setTimeout(function () {
//   console.log("setTimeout");

//   clearInterval(intervalId)
// }, 3 * 1000);

// var timer = 10;

// var intervalId = setInterval(function () {
//     console.log('x')
//   timer--;
//   convTime()

//   if (timer == 0) clearInterval(intervalId);
// }, five_mins);

// function convTime() {

//   var display = "";
//   var min = 1000 * 60;

//   display += timer / min;
//   console.log("setInterval:", display);

// timer += 5;

// var five_mins = 1000 * 60 * 5;


// var currentQuestion = questionsBank.question[currentQuestionIndex]

// document.getElementById("#currentQuestion").textContent= currentQuestion.question;

// ul.innerHTML='';



