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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "You tied! Rock ties rock";
        } else if (computerSelection === 'paper') {
            return "You lose! Paper beats rock";
        }
        return "You win! Rock beats scissors";
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "You win! Paper beats rock";
        } else if (computerSelection === 'paper') {
            return "You tied! Paper ties paper";
        } return "You lose! Scissors beats paper";
    }
    else {
        if (computerSelection === 'rock') {
            return "You lose! Rock beats scissors";
        } else if (computerSelection === 'paper') {
            return "You win! Scissors beats paper";
        } return "You tied! Scissors ties scissors";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let playerChoice = prompt("Rock, paper, or scissors?");
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    console.log(result);
    let outcome = result.slice(4,7);
    if (outcome === 'win') {
        playerScore++;
    } else if (outcome === 'lose') {
        computerScore++;
    }

    playerChoice = prompt("Rock, paper, or scissors?");
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    console.log(result);
    outcome = result.slice(4,7);
    if (outcome === 'win') {
        playerScore++;
    } else if (outcome === 'lose') {
        computerScore++;
    }
    
    playerChoice = prompt("Rock, paper, or scissors?");
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    console.log(result);
    outcome = result.slice(4,7);
    if (outcome === 'win') {
        playerScore++;
    } else if (outcome === 'lose') {
        computerScore++;
    }

    playerChoice = prompt("Rock, paper, or scissors?");
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    console.log(result);
    outcome = result.slice(4,7);
    if (outcome === 'win') {
        playerScore++;
    } else if (outcome === 'lose') {
        computerScore++;
    }

    playerChoice = prompt("Rock, paper, or scissors?");
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    console.log(result);
    outcome = result.slice(4,7);
    if (outcome === 'win') {
        playerScore++;
    } else if (outcome === 'lose') {
        computerScore++;
    }

    declareWinner(playerScore, computerScore);
}