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
let randomIndex= words[Math.floor(Math.random() * words.length)]; 

console.log(Math.floor(Math.random() * words.length), randomIndex)


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
  guessesLeft--
  for (let i = 0; i < wordsArr.length; i++){
    for (let j = 0; j < randomIndex.length; j++){
      if (wordsArr[i] === randomIndex[j]){
        inputs[i].style.backgroundColor="green";
      } else if (randomIndex.includes(wordsArr[i])){
        inputs[i].style.backgroundColor="yellow";
      } else {
        inputs[i].style.backgroundColor="gray";
      }
    }
  }
}

function checkWin(){
  if (wordsArr === randomIndex){
    alert("Congratulations, You Won!!!");
  }
}

function enterValue(){
  
  // guessesLeft--;
  
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
  window.location.reload()
  onLoader();
  
});

// Get the loader element
const loader = document.getElementById('loader');

// Add event listener to button or link
document.querySelector('.restartBtn').addEventListener('click', function() {
  // Show the loader element
  
});

let loaderDiv = document.getElementsByClassName("loader");

function onLoader() {
  loaderDiv.style.display = "block";
}

function offLoader() {
  loaderDiv.style.display = "none";
}
