function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        
        switch (randomNumber) {
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
        }
    }
    
    function getHumanChoice() {
        return prompt("Rock, paper, or scissors?");
    }

    function playRound(humanChoice, computerChoice) {

        if (humanChoice.toLowerCase() === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper");
            humanScore++;
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        }

        console.log("Your score is: " + humanScore);
        console.log("The computer's score is: " + computerScore);
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose");
    } else {
        console.log("It's a tie!");
    }
}

playGame();