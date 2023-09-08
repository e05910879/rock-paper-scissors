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