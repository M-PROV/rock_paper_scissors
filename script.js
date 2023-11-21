// Get the computers choice of rock, paper or scissor
// Get the players choice of rock, paper or scissor
// Compare the computers choice to the player choice and decide win, lose or tie
// Track win, lose or tie
// Establish a winner.

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let rps = choices[(Math.floor(Math.random() * choices.length))];
    return rps;
}

function getPlayerChoice() {
    let pick = prompt('Enter Rock, Paper or Scissor: ');
    return pick.toLowerCase();
}

    

function playGame() {

    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    while (playerScore < 5 && computerScore < 5) {

        

    if (playerSelection === 'rock' && computerSelection === 'scissor' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissor' && computerSelection === 'paper') {
            playerScore++;
            if ( playerScore >= 5 ) {
                console.log(playerSelection + ' beats ' + computerSelection + '. You win! Current score is Player: ' + playerScore + ' Computer: ' + computerScore + '. You have beaten the computer. Congratulations!');
            } else {
            console.log(playerSelection + ' beats ' + computerSelection + '. You win! Current score is Player: ' + playerScore + ' Computer: ' + computerScore );
            computerSelection = getComputerChoice();
            getPlayerChoice();
            }
        } else if (
            playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissor' ||
            playerSelection === 'scissor' && computerSelection === 'rock'
        ) {
            computerScore++;
            if ( computerScore >= 5) {
                console.log( computerSelection + ' beats ' + playerSelection + '. You lose! Current score is Player: ' + playerScore + ' Computer: ' + computerScore + '. You have lost to the computer. Game Over');
            } else {
                console.log( computerSelection + ' beats ' + playerSelection + '. You lose! Current score is Player: ' + playerScore + ' Computer: ' + computerScore);
                computerSelection = getComputerChoice();
                getPlayerChoice();
            }
        } else {
            console.log(playerSelection + ' ties ' + computerSelection + '. It is a tie! Current score is Player: ' + playerScore + ' Computer: ' + computerScore);
            computerSelection = getComputerChoice();
            getPlayerChoice();
        }
    }
}



playGame();


