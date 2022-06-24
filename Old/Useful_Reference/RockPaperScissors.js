//The game = Rock - Paper - Scissors
//Global Variables
const rock = '🪨';
const paper = '📄';
const scissors = '✂️';
const myElm = document.createElement("p");	// Create a new element

//Functions
function rockPaperScissors(playerChoice){
  let comp = ['🪨','📄','✂️'];
  comp = comp[Math.floor(Math.random() * 3)];

  if (playerChoice === comp) myElm.innerText ='Computer chose the same as you so it\'s a draw';
  else if(playerChoice === '🪨' && comp === '📄') myElm.innerText = `Computer chose ${comp} so you Lose`;
  else if(playerChoice === '🪨' && comp === '✂️') myElm.innerText = `Computer chose ${comp} so you Win`;
  else if(playerChoice === '📄' && comp === '🪨') myElm.innerText = `Computer chose ${comp} so you Win`;
  else if(playerChoice === '📄' && comp === '✂️') myElm.innerText = `Computer chose ${comp} so you Lose`;
  else if(playerChoice === '✂️' && comp === '🪨') myElm.innerText = `Computer chose ${comp} so you Lose`;
  else if(playerChoice === '✂️' && comp === '📄') myElm.innerText = `Computer chose ${comp} so you Win`;
  document.body.appendChild(myElm);
}
//Same function but using ternary operators rather than if else if
function rockPaperScissorsTernary(playerChoice){
  let comp = ['🪨','📄','✂️'];
  comp = comp[Math.floor(Math.random() * 3)]; 

  playerChoice === comp ? console.log('draw') : 
  playerChoice === '🪨' && comp === '📄' ? console.log(`Computer chose ${comp} so you Lose`) :
  playerChoice === '🪨' && comp === '✂️' ? console.log(`Computer chose ${comp} so you Win`):
  playerChoice === '📄' && comp === '🪨' ? console.log(`Computer chose ${comp} so you Win`):
  playerChoice === '📄' && comp === '✂️' ? console.log(`Computer chose ${comp} so you Lose`):
  playerChoice === '✂️' && comp === '🪨' ? console.log(`Computer chose ${comp} so you Lose`):
  playerChoice === '✂️' && comp === '📄' ? console.log(`Computer chose ${comp} so you Win`):
  console.log('else'); 
  
  
}
//On screen but selectors
function rpsButton(buttonText){
  let btn = document.createElement("button");
  btn.innerHTML = buttonText;
  btn.onclick = function () {
    rockPaperScissors(buttonText); 
  };
  document.body.appendChild(btn);
}

//Page elements

decision = rpsButton(rock);
decision = rpsButton(paper);
decision = rpsButton(scissors);






  



