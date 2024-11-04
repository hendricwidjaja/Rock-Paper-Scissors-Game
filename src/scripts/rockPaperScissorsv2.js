// Get the elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

const modeSelect = document.getElementById("mode");
const roundsInput = document.getElementById("rounds");
const startGameButton = document.getElementById("startGame");
const gameContentDiv = document.getElementById("game-content")

// Initialise the scores to be 0.
let userScore = 0;
let computerScore = 0;

let rounds = 0;
let maxRounds = null;

// Show or hide the rounds input based on the game mode selection
modeSelect.addEventListener("change", () => {
    if (modeSelect.value === "best-of") {
        // Update the CSS property
        roundsInput.style.display = "inline";
    } else {
        roundsInput.style.display = "none";
        roundsInput.value = "";
    }
});

// Start the game and set up the selected mode
startGameButton.addEventListener("click", () => {
    if (modeSelect.value === "best-of") {
        maxRounds = parseInt(roundsInput.value);
        if (isNaN(maxRounds) || maxRounds < 1) {
            alert("Please enter a valid number of rounds.");
            return;
        }
    } else {
        maxRounds = null; // Endless Mode
    }
    gameContentDiv.style.display = "block";

    resultDiv.textContent = `Game started in ${modeSelect.value === "best-of" ? `Best-of-${maxRounds}` : "Endless"} mode`;
});


// Get the computer's choice of input
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};


// Determine the winner based on user's choice and the computer's choice
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
};


// Implement the Game Play Logic
// Handle the button clicks for Rock, Paper and Scissors
function playGame(userChoice) {
    // Check if the maxRounds is entered and if the rounds are over
    // Display the result of the play
    // Check if the game should end in best of x mode
}


// Add Event Listeners
// Reset the game