function getComputerChoice() {
    number = Math.random() * 8

    if (number <= 2) {
        computerChoice = "Rock";
    } else if (number > 3 && number <= 5) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice
}

function game() {
    var playerScore = 0;
    var computerScore = 0;
    var winner = 0;

    winner = playRound(playerScore, computerScore)
    if (winner === "player") {
        ++playerScore;
    } else if (winner === "computer") {
        ++computerScore;
    }

    winner = playRound(playerScore, computerScore)
    if (winner === "player") {
        ++playerScore;
    } else if (winner === "computer") {
        ++computerScore;
    }

    winner = playRound(playerScore, computerScore)
    if (winner === "player") {
        ++playerScore;
    } else if (winner === "computer") {
        ++computerScore;
    }

    winner = playRound(playerScore, computerScore)
    if (winner === "player") {
        ++playerScore;
    } else if (winner === "computer") {
        ++computerScore;
    }

    winner = playRound(playerScore, computerScore)
    if (winner === "player") {
        ++playerScore;
    } else if (winner === "computer") {
        ++computerScore;
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("You lose!")
    } else if (computerScore === playerScore) {
        console.log("It's a tie!");
    }

}

function playRound(playerScore, computerScore) {
    

    let playerSelection = prompt("Make your selection");
    let computerSelection = getComputerChoice();
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats Rock");
        winner = "computer"

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beats Paper");
        winner = "computer"
        
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats Scissors");
        winner = "computer"
        
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors");
        winner = "player"
        
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rock");
        winner = "player"
        
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beats Paper");
        winner = "player"
        
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("It's a tie!");
        winner = "none"
        
    } else {
        console.log("Invalid selection");
    }

   return winner;

}

game();