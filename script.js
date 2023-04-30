// Declaring Global Variables

let helpButton = document.getElementById('helpBtn');
let instructForm = document.getElementById('helpForm');
let cancelButton = document.getElementById('cancelBtn');
let menuButton = document.getElementById('menuBtn');
let keyboardButton = document.getElementById('keyboardBtns');



function showForm() {
    instructForm.style.display = 'flex';
    keyboardButton.style.display = 'none';
}


function hideForm() {
    instructForm.style.display = 'none';
    keyboardButton.style.display = 'flex';
}
