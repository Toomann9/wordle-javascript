// Declaring Global Variables

let helpButton = document.getElementById('helpBtn');
let instructForm = document.getElementById('helpForm');
let deleteBtn = document.querySelector('#keyboardCancelBtn');
let menuButton = document.getElementById('menuBtn');
let keyboardButton = document.getElementById('keyboardBtns');
let displayScreen = document.getElementById('displayInput');
let inputs = document.querySelectorAll('.input');
let enterButton = document.getElementById('enterBtn');


// Declaration of variable to store values generated from the clicked buttons
let wordsArr = [];
let wordLetter =[];

// Number of guesses left
let guessesLeft = 6;
// Display the initial number of guesses left
document.getElementById('guessesLeft').innerHTML = guessesLeft;

function showForm() {
    instructForm.style.display = 'flex';
    keyboardButton.style.display = 'none';
    displayScreen.style.display = 'none';
    restartBtn.style.display = 'none';
}

function hideForm() {
    instructForm.style.display = 'none';
    keyboardButton.style.display = 'flex';
    displayScreen.style.display = 'flex';
    restartBtn.style.display = 'inline';
}

// Add event listener to the cancel button

function deleteValue() {

  for (let i = inputs.length - 1; i >= 0; i--) {
    if (inputs[i].innerText !== '') {
      inputs[i].innerText = '';
      break;
    }
  }
}


let words = ['APPLE', 'EXACT', 'JUICE', 'LEVEL', 'PETER', 'GRAPE', 'LEMON', 'MANGO'];
let randomIndex;
// Generate a random index between 0 and the length of the array
for (let i = 0; i < words.length; i++) {
  randomIndex = Math.floor(Math.random() * words.length); 
}
// const restartBtn = document.getElementById("restartBtn");

// restartBtn.addEventListener('click', () => {
//   location.reload();
// });


// Function to display the clicked button value in the input field
function displayValue(btnValue) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].innerHTML === '' && guessesLeft > 0) {
      inputs[i].innerHTML = btnValue;
      wordLetter.push(inputs[i].innerHTML);
      if (wordLetter.length === 5){
        wordsArr = wordLetter;
        wordLetter = [];
      }
      break;
    }
  }
}

// Event listeners for the buttons
document.querySelectorAll('.normalBtn, .normalBtnTwo').forEach(btn => {
  btn.addEventListener('click', () => {
    displayValue(btn.value);
  });
});


function checkValue (){
  for (let i = 0; i < wordsArr.length; i++){
    for (let j = 0; j < randomIndex.length; j++){
      if (wordsArr[i] === randomIndex[j]){
        this.style.backgroundColor="green";
      } else if (randomIndex.includes(wordsArr[i])){
        this.style.backgroundColor="yellow";
      } else {
        this.style.backgroundColor="gray";
      }
    }
  }
}

function checkWin(wordsArr, randomIndex){
  if (wordsArr === randomIndex){
    alert("Congratulations, You Won!!!");
  }
}

function enterValue(){
  guessesLeft--;
  
  if (wordsArr === randomIndex && guessesLeft > 0){
    checkWin();
  } else if (wordsArr !== randomIndex && guessesLeft === 0){
    alert("You Lost, Try Again");
  }
  checkValue();
}
// Add event listener for restart button click
const restartBtn = document.querySelector('.restartBtn');
restartBtn.addEventListener("click", function() {
  guessesLeft = 6;
  const inputFields = displayScreen.querySelectorAll(".input");
  inputFields.forEach(function(input) {
    input.textContent = "";
    input.style.backgroundColor = "white";
  });
  const guessesLeftDisplay = document.getElementById("guessesLeft");
  guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;
  const gameResult = document.getElementById("gameResult");
  gameResult.textContent = "";
  keyboardBtns.style.display = "block";
  restartBtn.style.display = "none";
});