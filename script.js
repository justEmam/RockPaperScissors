function getComputerChoice() {
    let randomnumber = Math.random();
    if (randomnumber <= 0.33) {
        return 'rock';
    } else if (randomnumber <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let ans = prompt('Enter your move, Rock, Paper or Scissors?').toLowerCase();
    if (ans !== 'rock' && ans !== 'paper' && ans !== 'scissors') {
        console.log('Enter rock, paper, or scissors, not anything else.');
        return null;  // Return null for invalid input
    } else {
        return ans;
    }
}

let humanScore = 0;
let computerScore = 0;

// Function to play a round
function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    // Check for valid human choice
    if (!humanChoice) return;

    // Game logic
    if (computerChoice === humanChoice) {
        console.log('Draw');
    } else {
        switch (computerChoice) {
            case 'rock':
                if (humanChoice !== 'paper') {
                    console.log('Computer (left) wins, the score now is ' + (computerScore + 1) + '-' + humanScore);
                    computerScore++;
                } else {
                    console.log('Human (right) wins, the score is now ' + computerScore + '-' + (humanScore + 1));
                    humanScore++;
                }
                break;
            case 'paper':
                if (humanChoice !== 'scissors') {
                    console.log('Computer (left) wins, the score is now ' + (computerScore + 1) + '-' + humanScore);
                    computerScore++;
                } else {
                    console.log('Human (right) wins, the score is now ' + computerScore + '-' + (humanScore + 1));
                    humanScore++;
                }
                break;
            case 'scissors':
                if (humanChoice !== 'rock') {
                    console.log('Computer (left) wins, the score now is ' + (computerScore + 1) + '-' + humanScore);
                    computerScore++;
                } else {
                    console.log('Human (right) wins, the score is now ' + computerScore + '-' + (humanScore + 1));
                    humanScore++;
                }
        }
    }
}

// Function to play game
function playGame() {
    while (computerScore < 5 && humanScore < 5) {
        playRound();
    }

    // Announce winner
    if (computerScore === 5) {
        console.log('COMPUTER WON! BETTER LUCK NEXT TIME!');
    } else {
        console.log('YOU WON! CONGRATULATIONS!');
    }

    // Reset scores
    computerScore = 0;
    humanScore = 0;
}

// Start the game
playGame();
