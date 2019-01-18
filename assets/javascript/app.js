
function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];

      for (letter in currentQuestion.answers) {

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {

    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
 
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {

        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {

        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    document.getElementById("timer").innerHTML = "Finished!";
    timeLeft = 0;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


  const allQuestions = [
{
question: "Odin gave Thor this hammer, which only the worthy can wield. What is its name?",
answers: {
a: "ThunderWallop",
b: "Mjolnir",
c: "Asgard",
d: "StarSplitter"
},
correctAnswer: "b"
},
{
question: "What is the name of Thor's father?",
answers: {
a: "Loki",
b: "Hela",
c: "Hulk",
d: "Odin"
},
correctAnswer: "d"
},
{
question: "Thor is known as the god of what?",
answers: {
a: "Thunder",
b: "Hammers",
c: "Australia",
d: "Biceps"
},
correctAnswer: "a"
},
{ //iron man
question: "What is Iron Man's real name?",
answers: {
a: "Steve Rogers",
b: "Bruce Wayne",
c: "Bill Gates",
d: "Tony Stark"
},
correctAnswer: "d"
},
{
question: "What powers Iron Man's suit?",
answers: {
a: "Arc Reactor",
b: "Nuclear Fission",
c: "Duracel Batteries",
d: "Gasoline"
},
correctAnswer: "a"
},
{
question: "Which of following terms does Iron Man not use to describe himself?",
answers: {
a: "Millionaire",
b: "Genius",
c: "Humble",
d: "Philanthropist"
},
correctAnswer: "c"
},
{ //Captain America
question: "What is Captain America's real name?",
answers: {
a: "Bucky Barns",
b: "Steve Rogers",
c: "Bruce Banner",
d: "Teddy Roosevelt"
},
correctAnswer: "b"
},
{
question: "In which war did Captain America first make a name for himself?",
answers: {
a: "World War I",
b: "World War II",
c: "World War III",
d: "Captain America's Civil War"
},
correctAnswer: "b"
},
{
question: "What is Captain America's shield made of?",
answers: {
a: "Vibranium",
b: "Adamantium",
c: "Obsidian",
d: "Alumninum-Titanium Alloy"
},
correctAnswer: "a"
}
];

var firstQuestionChoice = Math.floor(Math.random()*3);
var secondQuestionChoice = Math.floor(Math.random()*3+3);
var thirdQuestionChoice = Math.floor(Math.random()*3+6);
const myQuestions = [allQuestions[firstQuestionChoice], allQuestions[secondQuestionChoice], allQuestions[thirdQuestionChoice]]

  buildQuiz();

  submitButton.addEventListener("click", showResults);

var timeLeft = 30;
var clock = setInterval(function() {

     timeLeft--;

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = "Time Remaining: " + timeLeft;
  
    // If the count down is finished, write some text 
    if (timeLeft < 0) {
      clearInterval(clock);
      document.getElementById("timer").innerHTML = "Finished!";
      showResults();
    }

  }, 1000);

