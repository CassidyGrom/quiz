console.log(questions);
var qIndex = 0;
var startGameBtn = document.getElementById("startGame");

var gameWindow = document.getElementById("gameWindow");
var startWindow = document.getElementById("startWindow");

var optionBtns = document.getElementsByClassName("option");
// for(var i in optionBtns){
//   optionBtns[i].onclick = function(){
//     console.log(this)
//   }
// }
for (var item of optionBtns) {
  item.onclick = optionClick;
}
startGameBtn.onclick = startGame;

function startGame() {
  startWindow.classList.toggle("hide");
  gameWindow.classList.toggle("hide");
  loadQuestion();
}
function loadQuestion() {
  console.log(questions[qIndex]);
  document.getElementById("question").textContent = questions[qIndex].title;
  for (var i in optionBtns) {
    optionBtns[i].textContent = questions[qIndex].choices[i];
  }
}
function optionClick() {
  if (this.textContent === questions[qIndex].answer) {
    console.log("Correct");
  } else {
    console.log("Incorrrect");
  }

  qIndex++;
  if (qIndex < questions.length) {
    loadQuestion();
  } else {
    // end game!
  }
}
