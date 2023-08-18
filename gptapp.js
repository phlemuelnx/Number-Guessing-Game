
// GPT-Improved version


const game = document.querySelector('.game');
const guessInput = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#submit-btn');
const message = document.querySelector('#message');
const minNum = document.querySelector('#min-num');
const maxNum = document.querySelector('#max-num');

let min = 1;
let max = 10;
let guessesLeft = 3;
let winningNum;

minNum.textContent = min;
maxNum.textContent = max;

//////////////////////////////////////////////////////////////

initializeGame();

game.addEventListener('mousedown', handleGameRestart);

submitBtn.addEventListener('click', handleGuessSubmission);

function initializeGame() {
  winningNum = getRandomNum(min, max);
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleGameRestart(e) {
  if (e.target.textContent === 'Play Again') {
    window.location.reload();
  }
}

function handleGuessSubmission() {
  const guess = guessInput.value.trim();

  if (guess === '') {
    setMessage('Field cannot be blank');
  } else if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`);
  } else {
    const parsedGuess = parseInt(guess);
    if (parsedGuess === winningNum) {
      gameOver(`${winningNum} is correct. YOU WON!`);
    } else {
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        gameOver(`Game Over. The correct number was ${winningNum}`);
      } else {
        setMessage(`${parsedGuess} is incorrect. ${guessesLeft} guesses left`);
      }
    }
  }

  guessInput.value = '';
}

function setMessage(msg) {
  message.textContent = msg;
}

function gameOver(msg) {
  setMessage(msg);
  guessInput.disabled = true;
  submitBtn.textContent = 'Play Again';
  submitBtn.classList.add('play-again');
}
