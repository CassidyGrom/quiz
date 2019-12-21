console.log(questions);
var qIndex = 0;
var startGameBtn = document.getElementById("startGame");

var gameWindow = document.getElementById("gameWindow");
var startWindow = document.getElementById("startWindow");

var optionBtns = document.getElementsByClassName("option");

var timeEl = document.querySelector("#timeVal");

var timerInterval;

var secondsLeft = 60;

for (var item of optionBtns) {
  item.onclick = optionClick;
}
startGameBtn.onclick = startGame;

function startGame() {
  startWindow.classList.toggle("hide");
  gameWindow.classList.toggle("hide");
  loadQuestion();
  setTime();
}

function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // run function to stop game
    }
  }, 1000);
}

function loadQuestion() {
  // clearMessage();
  console.log(questions[qIndex]);
  document.getElementById("question").textContent = questions[qIndex].title;
  for (var i in optionBtns) {
    optionBtns[i].textContent = questions[qIndex].choices[i];
  }
}
function optionClick() {
  if (this.textContent === questions[qIndex].answer) {
    document.getElementById("message").textContent = "Correct";
  } else {
    document.getElementById("message").textContent = "incorrect";
  }

  qIndex++;
  if (qIndex < questions.length) {
    loadQuestion();
  } else {
    // end game!
  }
}

// function clearMessage() {
//   document.getElementById("message").textContent = "";
// }
