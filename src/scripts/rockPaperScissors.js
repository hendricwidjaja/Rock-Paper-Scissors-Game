// Get the elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

// Initialise the scores to be 0.
let userScore = 0;
let computerScore = 0;

// Get the computer choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// console.log(getComputerChoice())

// Write the logic for Winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        userScore++;
        scoreDiv.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
        return "You win!";
    } else {
        computerScore++;
        scoreDiv.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
        return "Computer wins!";
    }
}

// Listen to the button click events
rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner("Rock", computerChoice);
    resultDiv.textContent = `You chose Rock. Computer chose ${computerChoice}. ${result}`;
});

paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner("Paper", computerChoice);
    resultDiv.textContent = `You chose Paper. Computer chose ${computerChoice}. ${result}`;
});

scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner("Scissors", computerChoice);
    resultDiv.textContent = `You chose Scissors. Computer chose ${computerChoice}. ${result}`;
});