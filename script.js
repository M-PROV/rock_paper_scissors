// Get the computers choice of rock, paper or scissor
// Get the players choice of rock, paper or scissor
// Compare the computers choice to the player choice and decide win, lose or tie
// Track win, lose or tie
// Establish a winner.

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return 'rock';
    } else if (number % 3 === 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function getPlayerChoice() {
    let pick = prompt('Enter Rock, Paper or Scissor: ');
    return pick.toLowerCase();
}

function playGame(playerSelection, computerSelection) {
    getComputerChoice();
    getPlayerChoice();
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper' && 
            computerScore <= 5 || playerScore <= 5 )
    ) {
        playerScore++;
        if (playerScore >= 5) {
            console.log('Player pick: ' + playerSelection + ' Computer pick: ' + computerSelection + ' You got to 5 first! You win! Player: ' + playerScore + ' Computer: ' + computerScore);
        } else {
        console.log('Player pick: ' + playerSelection + ' Computer pick: ' + computerSelection + ' You win! Score is now Player: ' + playerScore + ' Computer: ' + computerScore);
        getComputerChoice();
        getPlayerChoice();
        }
        
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'rock')
    ) {
        computerScore++;
        if (computerScore >= 5) {
            console.log('Player pick: ' + playerSelection + ' Computer pick: ' + computerSelection + ' Computer got to 5 first. You lose! Player: ' + playerScore + ' Computer: ' + computerScore);
        } else {
            console.log('Player pick: ' + playerSelection + ' Computer pick: ' + computerSelection + ' You lose! Player: ' + playerScore + ' Computer: ' + computerScore);
            getComputerChoice();
            getPlayerChoice();
        }
    } else {
        console.log('Player pick: ' + playerSelection + ' Computer pick: ' + computerSelection + ' The round is a tie! Player: ' + playerScore + ' Computer: ' + computerScore);
        getComputerChoice();
        getPlayerChoice();
    }
}

playGame();


