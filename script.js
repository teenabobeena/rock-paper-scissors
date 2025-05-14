let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const body = document.querySelector("body");

const buttonContainer = document.createElement("div");
const resultsContainer = document.createElement("div");
const results = document.createElement("p");

body.appendChild(resultsContainer);
resultsContainer.appendChild(results);

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

body.appendChild(buttonContainer);
buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorsBtn);

function playGame() {
    

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
    
    // function getHumanChoice() {
    //     return prompt("Rock, paper, or scissors?");
    // }

    function playRound(humanChoice) {
        if (roundsPlayed >= maxRounds) {
            return;
        }

        const computerChoice = getComputerChoice();
        let roundResult = "";

        if (humanChoice === computerChoice) {
            roundResult = "It's a tie!"
        } else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")
        ) {
            roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            roundResult = `You lose! ${computerChoice} beats ${humanChoice}`
            computerScore++;
        }

        roundsPlayed++;

        results.textContent = `${roundResult}\nScore: You ${humanScore} - Computer ${computerScore}\nRound: ${roundsPlayed} / ${maxRounds}`;

        if (roundsPlayed === maxRounds) {
            declareFinalWinner();
        }
    }

    function declareFinalWinner() {
        let finalMessage = "\nFinal Result: ";

        if (humanScore > computerScore) {
            finalMessage += "You win!";
        } else if (computerScore > humanScore) {
            finalMessage += "You lose";
        } else {
            finalMessage += "It's a tie!";
        }

        results.textContent += finalMessage;
    }

    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());

    

    rockBtn.addEventListener("click", () => playRound("rock"));

    paperBtn.addEventListener("click", () => playRound("paper"));

    scissorsBtn.addEventListener("click", () => playRound("scissors"));
}

playGame();