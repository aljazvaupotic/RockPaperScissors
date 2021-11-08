let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result>p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter) {
  if (letter === 'p') return "Paper";
  if (letter === 'r') return "Rock";
  return "Scissors";
}

function win(userChoice,compChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} . You win! `;
  console.log("WIN");
  userChoice_div.classList.add('green-glow');
  setTimeout(() => {userChoice_div.classList.remove('green-glow');}, 300);
}

function lose(userChoice,compChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  compScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord} . You lose! `;
  console.log("LOSE");
  userChoice_div.classList.add('red-glow');
  setTimeout(() => {userChoice_div.classList.remove('red-glow');}, 300);
}

function draw(userChoice,compChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;
  result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} draws with ${convertToWord(compChoice)}${smallCompWord} . It is a DRAW!`;
  console.log("DRAW");
  userChoice_div.classList.add('gray-glow');
  setTimeout( ()  => {userChoice_div.classList.remove('gray-glow');}, 300);
}


function getCompChoice(){
  const options = ['r','p','s'];
  const randomN = Math.floor(Math.random()*3);
  return options[randomN];
}

function game(userChoice) {
 const compChoice = getCompChoice();
 //console.log(userChoice+compChoice);
 switch (userChoice + compChoice) {
   case "rs":
   case "sp":
   case "pr":
    win(userChoice,compChoice);
    break;
   case "sr":
   case "ps":
   case "rp":
    lose(userChoice,compChoice);
    break;
   case "rr":
   case "ss":
   case "pp":
    draw(userChoice,compChoice);
    break;
 }
}


function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click',() => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
