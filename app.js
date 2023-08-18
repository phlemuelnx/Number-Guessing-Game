
// My ORIGINAL code

const game = document.querySelector('.game');
const guessInput = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#submit-btn');
const message = document.querySelector('#message');
const minNum = document.querySelector('#min-num');
const maxNum = document.querySelector('#max-num');


let min = 1;
let max = 10;
let guessesLeft = 3;
let winningNum = getRandomNum(min, max);


minNum.innerHTML = min;
maxNum.innerHTML = max;

game.addEventListener('mousedown', function(e){
    if(e.target.textContent === 'Play Again'){
      window.location.reload();
    }
});



submitBtn.addEventListener('click', function(){

    // trim() removes blank space in the guessInput
    let guess = guessInput.value.trim();

    if (guess === '') {
        setMessage('Field cannot be blank');

      // isNaN(guess) checks if the value inside guessInput is number or not (true or false)  
    } else if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} & ${max}`);
    } else {
        // parseInt converts input in guess into a number
        guess = parseInt(guess);
        if (guess === winningNum) {
            gameOver(`${winningNum} is correct. YOU WON!`)
        } else {
            guessesLeft -= 1;
            if (guessesLeft === 0) {
                gameOver(`Game Over. The correct number was ${winningNum}`);
            } else {
                setMessage(`${guess} is incorrect, ${guessesLeft} guesses left`);
            }
        }
    }
    guessInput.value = '';
});


function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg) {
    message.textContent = msg;
}

function gameOver(msg) {
    setMessage(msg);
    guessInput.disabled = true;

    submitBtn.textContent = 'Play Again';
    submitBtn.className += 'play-again';
}





// submitBtn.addEventListener('click', function(){

//     // Actions if number is not between 1-10
//     let guess = parseInt(guessInput.value);
//     if (isNaN(guess) || guess < min || guess > max) {
//         setMessage(`Please enter a number between ${min} and ${max}`);
//     }

//     // Check if correct
//     if (guess === winningNum) {
//         // alert(`${winningNum} is correct, YOU WON!`);
//         gameOver(`${winningNum} is correct. YOU WON!`)
//     } else {
        
//         // Wrong Number
//         guessesLeft -= 1;

//         if (guessesLeft === 0) {
//             // alert('Game Over');
//             // gameOver('Game Over, you lost.')
//             gameOver(`Game Over. The correct number was ${winningNum}`);
//         } else {
//             setMessage(`${guess} is incorrect, ${guessesLeft} guesses left`);
//         }
//     }


//     guessInput.value = '';
// });