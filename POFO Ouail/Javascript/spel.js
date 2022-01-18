// main.js - het Javascript bestand voor Sprint 2

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();

const button = document.querySelector('#switch');
button.addEventListener("click", toggleTheme);



document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
const playerDisplay = document.querySelector('#player')
let currentPlayer = 'playerX'

squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
})
function clickOutcome(e){
const squareArray = Array.from(squares)
const index = squareArray.indexOf(e.target)
playerDisplay.innerHTML = currentPlayer

if(currentPlayer === 'playerX'){
    squares[index].classList.add('playerX')
    currentPlayer = 'playerO'
} else{
    squares[index].classList.add('playerO')
    currentPlayer = 'playerX'
}
}

})