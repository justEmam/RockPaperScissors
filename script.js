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
const userRock = document.querySelector('#rock')
const userPaper = document.querySelector('#paper')
const userScissors = document.querySelector('#scissors')
const anyButton = document.querySelectorAll('button')
const score = document.querySelector('#humanText')
const para = document.querySelector('p')
const container = document.querySelector('#buttonscontainer')

const getclickedbuttonID = (e) => {
    const clickedButtonID = e.target.id;
    if (clickedButtonID === 'rock') {return 'rock';

    } else if 
        (clickedButtonID === 'scissors') {return 'scissors';

    } else {return 'paper';}
};

   

function scoreChecker(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) { para.textContent= `DRAW! score is still ${humanScore}-${computerScore}`
} else {
    para.textContent=`Score is now ${humanScore} - ${computerScore}`
    if (humanScore === 5) {
        score.textContent = 'YOU WON. CONGRATS!!!'
        score.style.color = 'green';
        humanScore = 0 //reset 
        computerScore = 0 //reset  
    } else if (computerScore ===5) {
        score.textContent = 'Computer won, you lost!'
        score.style.color = 'red';
        humanScore = 0 //reset 
        computerScore = 0 //reset 
    }
}
}

    let humanScore = 0;
    let computerScore = 0;
    const computerChoiceDiv = document.createElement('div');
    computerChoiceDiv.classList.add('PCchoice');
    container.appendChild(computerChoiceDiv);

    // Function to play a round
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        
        if (computerChoice === humanChoice) {
            if (computerChoice === 'rock') {
                computerChoiceDiv.textContent = '👊';
            } else if (computerChoice === 'paper') {
                computerChoiceDiv.textContent = '📝';
            } else { 
                computerChoiceDiv.textContent = '✂️'; 
            }
        } else {
            switch (computerChoice) {
                case 'rock':
                    computerChoiceDiv.textContent = '👊';
                    if (humanChoice !== 'paper') {
                        console.log('Computer (left) wins, the score now is ' + (computerScore + 1) + '-' + humanScore);
                        computerScore++;
                    } else {
                        console.log('Human (right) wins, the score is now ' + computerScore + '-' + (humanScore + 1));
                        humanScore++;
                    }
                    break;
                case 'paper':
                    computerChoiceDiv.textContent = '📝';
                    if (humanChoice !== 'scissors') {
                        console.log('Computer (left) wins, the score is now ' + (computerScore + 1) + '-' + humanScore);
                        computerScore++;
                    } else {
                        console.log('Human (right) wins, the score is now ' + computerScore + '-' + (humanScore + 1));
                        humanScore++;
                    }
                    break;
                case 'scissors':
                    computerChoiceDiv.textContent = '✂️';
                    if (humanChoice !== 'rock') {
                        console.log('Computer (left) wins, the score now is ' + (computerScore + 1) + '-' + humanScore);
                        computerScore++;
                    } else {
                        console.log('Human (right) wins, the score is now ' + computerScore + '-' + (humanScore + 1));
                        humanScore++;
                    }
                    break;
            }
        }
     scoreChecker(humanChoice,computerChoice)
    }
 


function getHumanChoice() {
        anyButton.forEach(button => {
            button.addEventListener('click', function (e) {
                const humanChoice = getclickedbuttonID(e); // Get the user's choice
                console.log("User selected:", humanChoice); // Log the user's choice
                playRound(humanChoice); // Start the round
                anyButton.forEach(button => {
                    button.addEventListener('click', () => { if ((humanScore === 1 && computerScore === 0) || (computerScore === 1 && humanScore === 0)) {
                        score.style.color = "black"
                        score.textContent= 'Goodluck!'
                    }

                    })
                })
            
            });
        });
    }
getHumanChoice()