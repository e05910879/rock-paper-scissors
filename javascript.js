// getComputerChoice returns rock, paper, or scissors at random.
function getComputerChoice() {
    // Let rock = 1, paper = 2, scissor = 3.
    // Math.random returns a random float between 0 and 1, so multiply that by 100 and floor it to get
    // random number between 0 and 100. Then modulo 3 to get random number between 0 and 2,
    // then add 1.  
    let randomNum = (Math.floor(Math.random() * 100) % 3) + 1;
    if (randomNum === 1) {
        return "rock";
    }
    else if (randomNum === 2) {
        return "paper";
    }
    else if (randomNum === 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    if (noWinnerYet) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === 'rock') {
            if (computerSelection === 'rock') {
                scoreMessage.textContent = "You tied! Rock ties rock";
            } else if (computerSelection === 'paper') {
                scoreMessage.textContent = "You lose! Paper beats rock";
                computerScore++;
            } else {
                scoreMessage.textContent = "You win! Rock beats scissors";
                playerScore++;           
            }
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                scoreMessage.textContent = "You win! Paper beats rock";
                playerScore++;
            } else if (computerSelection === 'paper') {
                scoreMessage.textContent = "You tied! Paper ties paper";
            } else {
            scoreMessage.textContent = "You lose! Scissors beats paper";
            computerScore++;
            }
        }
        else {
            if (computerSelection === 'rock') {
                scoreMessage.textContent = "You lose! Rock beats scissors";
                computerScore++;
            } else if (computerSelection === 'paper') {
                scoreMessage.textContent = "You win! Scissors beats paper";
                playerScore++;
            } else {
                scoreMessage.textContent = "You tied! Scissors ties scissors";
            } 
        } 
        updateScore();
    }
}

function updateScore() {
    scoreNumbers.textContent = `${playerScore}-${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        noWinnerYet = false;
        scoreMessage.textContent = '';
        if (playerScore === 5) {
            scoreNumbers.textContent += ". Player wins!";
        } else {
            scoreNumbers.textContent += ". Computer wins!";
        }
    }
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const scoreNumbers = document.querySelector('.score-numbers');
const scoreMessage = document.querySelector('.score-message');

let playerScore = 0;
let computerScore = 0;
let noWinnerYet = true;

scoreNumbers.textContent = `${playerScore}-${computerScore}`;
scoreMessage.textContent = 'Howdy!';

rockButton.addEventListener('click', () => {playRound('rock', getComputerChoice())});
paperButton.addEventListener('click', () => {playRound('paper', getComputerChoice())});
scissorsButton.addEventListener('click', () => {playRound('scissors', getComputerChoice())});

