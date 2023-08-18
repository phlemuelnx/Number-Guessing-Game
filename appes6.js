class NumberGuessingGame {
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
  
      this.minNum.innerHTML = this.min;
      this.maxNum.innerHTML = this.max;
  
      this.submitBtn.addEventListener('click', this.handleGuess.bind(this));
      this.game.addEventListener('mousedown', this.handleGameReset.bind(this));
    }
  
    getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    setMessage(msg) {
      this.message.textContent = msg;
    }
  
    handleGuess() {
      let guess = this.guessInput.value.trim();
  
      if (guess === '') {
        this.setMessage('Field cannot be blank');
      } else if (isNaN(guess) || guess < this.min || guess > this.max) {
        this.setMessage(`Please enter a number between ${this.min} and ${this.max}`);
      } else {
        guess = parseInt(guess);
        if (guess === this.winningNum) {
          this.gameOver(`${this.winningNum} is correct. YOU WON!`);
        } else {
          this.guessesLeft -= 1;
          if (this.guessesLeft === 0) {
            this.gameOver(`Game Over. The correct number was ${this.winningNum}`);
          } else {
            this.setMessage(`${guess} is incorrect, ${this.guessesLeft} guesses left`);
          }
        }
      }
      this.guessInput.value = '';
    }
  
    handleGameReset(e) {
      if (e.target.textContent === 'Play Again') {
        window.location.reload();
      }
    }
  
    gameOver(msg) {
      this.setMessage(msg);
      this.guessInput.disabled = true;
      this.submitBtn.textContent = 'Play Again';
      this.submitBtn.className += ' play-again';
    }
  }
  
  const numberGuessingGame = new NumberGuessingGame();
  