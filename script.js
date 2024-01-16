


// Initial score for player and computer
let playerScore = 0;
let updatePlayerScore = document.getElementById('playerScore');
updatePlayerScore.innerText = playerScore;
let computerScore = 0;
let updateComputerScore = document.getElementById('computerScore');
updateComputerScore.innerText = computerScore;

let updateResults = document.getElementById('results');




// Get the computers choice of rock, paper or scissor
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let rps = choices[(Math.floor(Math.random() * choices.length))];
    return rps;
}

function resetAll() {
    computerScore = 0;
    updateComputerScore.innerText = computerScore;
    playerScore = 0;
    updatePlayerScore.innerText = playerScore;
    updateResults.innerHTML = '';
    let playBtnReset = document.getElementsByClassName('playAgainBtn');
    playBtnReset[0].remove();
}

function playAgain() {
    let playBtn = document.createElement('button');
    playBtn.classList.add('playAgainBtn');
    playBtn.innerHTML = ('Play Again?');
    playBtn.setAttribute('onclick', 'resetAll()');
    document.getElementById('playAgainDiv').appendChild(playBtn);
}



    

// Compare the computers choice to the player choice and decide win, lose or tie
function playGame(playerSelection) {

    let computerSelection = getComputerChoice();
    
    if (playerScore < 5 && computerScore < 5) {

        

    if (playerSelection === 'rock' && computerSelection === 'scissor' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissor' && computerSelection === 'paper') {
            playerScore++
            updatePlayerScore.innerText = playerScore;
            if ( playerScore >= 5 ) {
                updateResults.innerHTML = (playerSelection + ' beats ' + computerSelection + '. You win! Congratulations!');
                playAgain();
            } else {
            updateResults.innerHTML = (playerSelection + ' beats ' + computerSelection + '. You win!');
            
            }
        } else if (
            playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissor' ||
            playerSelection === 'scissor' && computerSelection === 'rock'
        ) {
            computerScore++
            updateComputerScore.innerText = computerScore;
            if ( computerScore >= 5) {
                updateResults.innerHTML = ( computerSelection + ' beats ' + playerSelection + '. You lose! You have lost to the computer. Game Over');
                playAgain();
            } else {
                updateResults.innerHTML = ( computerSelection + ' beats ' + playerSelection + '. You lose!');
                
            }
        } else {
            updateResults.innerHTML = (playerSelection + ' ties ' + computerSelection + '. It is a tie!');
        }
    }
}





