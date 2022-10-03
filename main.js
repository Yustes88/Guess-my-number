const buttonAgain = document.querySelector('.again')
const buttonCheck = document.querySelector('.check'); 
const secretNumber = document.querySelector('.secret-number')
let clientGuess = document.querySelector('.client-guess');
let scoreNumber = document.querySelector('.number-score');
let highscoreNumber = document.querySelector('.best-highscore')
let score = 20;
let highScore = 0;

const getRandomNumber = () => {
    return Math.trunc((Math.random() * 20) + 1);
}
let randomNumber = getRandomNumber()
console.log(randomNumber)


const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const showHighScore = (score, highScore) => {
    return score > highScore ? score : highScore;
} 

const getUsersGuess = () => {
    buttonCheck.addEventListener('click', function() {
        const guess = Number(clientGuess.value);
        if(!guess) {
            displayMessage('Please enter a number!')
        } else if(guess === randomNumber) {
            displayMessage('You won!')
            document.querySelector('body').style.backgroundColor = 'green';
            highscoreNumber.textContent = showHighScore(score, highScore)
            secretNumber.textContent = guess;
        } else {
            displayMessage(guess > randomNumber ? 'Too high!' : 'Too low!')
            score--;
            scoreNumber.textContent = score;
        } 
        clientGuess.value = '';
    })
}

getUsersGuess();


const onAgainButtonClick = () => {
    buttonAgain.addEventListener('click', function() {
    score = 20
    randomNumber = getRandomNumber();
    console.log(getRandomNumber())
    document.querySelector('body').style.backgroundColor = 'black';
    displayMessage('Start guessing!')
    scoreNumber.textContent = score;
    secretNumber.textContent = '?';
    })
}

onAgainButtonClick();
