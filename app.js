// Global Varibales
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;


// Getting Player's choice by clicking buttons
buttons.forEach(button => button.addEventListener('click', playerChoice));


// Calling all functions inside a single function
function playerChoice(e) {
   userChoice = e.target.id;
   if(userChoice === 'rock') {
      userChoice = '🗿';
   }
   else if(userChoice === 'paper') {
      userChoice = '📃';
   }
   else if(userChoice === 'scissors') {
      userChoice = '✂️';
   }
   userChoiceDisplay.textContent = userChoice;
   machineChoice();
   getResult();
}

// Getting Computer Choice
function machineChoice() {
   const randomNumber = Math.floor(Math.random() * buttons.length) + 1;
   
   if(randomNumber === 1) {
      computerChoice = '🗿';
   }
   else if(randomNumber === 2) {
      computerChoice = '📃';
   }
   else if(randomNumber === 3) {
      computerChoice = '✂️';
   }

   computerChoiceDisplay.textContent = computerChoice;
}

// Getting Result inside HTML DOM
function getResult() {
   if(userChoice === computerChoice) {
      result = "It's a draw";
   }
   else if(userChoice === '🗿' && computerChoice === '📃') {
      result = "You Lose";
   }
   else if(userChoice === '🗿' && computerChoice === '✂️') {
      result = "You Win!";
   }
   else if(userChoice === '📃' && computerChoice === '🗿') {
      result = "You Win!";
   }
   else if(userChoice === '📃' && computerChoice === '✂️') {
      result = "You Lose";
   }
   else if(userChoice === '✂️' && computerChoice === '🗿') {
      result = "You Lose";
   }
   else if(userChoice === '✂️' && computerChoice === '📃') {
      result = "You Win!";
   }
   
   resultDisplay.textContent = result;
   resultDisplay.style.textTransform = "capitalize";   
}
