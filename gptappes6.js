
// GPT-Improved version converted to Constructor Class


class Game {
   constructor() {
    this.game = document.querySelector('.game');
    this.guessInput = document.querySelector('#guess-input');
    this.submitBtn = document.querySelector('#submit-btn');
    this.message = document.querySelector('#message');
    this.minNum = document.querySelector('#min-num');
    this.maxNum = document.querySelector('#max-num');
    this.min = 1;
    this.max = 10;
    this.guessesLeft = 3;
    this.winningNum = this.getRandomNum(this.min, this.max);
  
    this.minNum.textContent = this.min;
    this.maxNum.textContent = this.max;
  
    this.initializeGame();
    this.game.addEventListener('mousedown', this.handleGameRestart.bind(this));
    this.submitBtn.addEventListener('click', this.handleGuessSubmission.bind(this));
  }
  
  initializeGame() {
    this.winningNum = this.getRandomNum(this.min, this.max);
  }
  
  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  handleGameRestart(e) {
    if (e.target.textContent === 'Play Again') {
      window.location.reload();
    }
  }
  
  handleGuessSubmission() {
    const guess = this.guessInput.value.trim();
  
    if (guess === '') {
      this.setMessage('Field cannot be blank');
    } else if (isNaN(guess) || guess < this.min || guess > this.max) {
      this.setMessage(`Please enter a number between ${this.min} and ${this.max}`);
    } else {
      const parsedGuess = parseInt(guess);
      if (parsedGuess === this.winningNum) {
        this.gameOver(`${this.winningNum} is correct. YOU WON!`);
      } else {
        this.guessesLeft -= 1;
        if (this.guessesLeft === 0) {
          this.gameOver(`Game Over. The correct number was ${this.winningNum}`);
        } else {
          this.setMessage(`${parsedGuess} is incorrect. ${this.guessesLeft} guesses left`);
        }
      }
    }
  
    this.guessInput.value = '';
  }
  
  setMessage(msg) {
    this.message.textContent = msg;
  }
  
  gameOver(msg) {
    this.setMessage(msg);
    this.guessInput.disabled = true;
    this.submitBtn.textContent = 'Play Again';
    this.submitBtn.classList.add('play-again');
  }
}
  
const game = new Game();
  