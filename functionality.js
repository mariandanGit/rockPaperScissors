const playerScoreDiv = document.getElementById('playerScore');
const computerScoreDiv = document.getElementById('computerScore');
const rockButton = document.getElementById('playerRockHand');
const paperButton = document.getElementById('playerPaperHand');
const scissorsButton = document.getElementById('playerScissorsHand');

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

rockButton.addEventListener('click', () => clickHandler('Rock'))
paperButton.addEventListener('click', () => clickHandler('Paper'))
scissorsButton.addEventListener('click', () => clickHandler('Scissors'))

function randomComputerSelection(){
    
    let number = Math.floor(Math.random()*3);

    document.getElementById('computerRockHand').style.filter = "brightness(70%)";

    if(number === 0){
        
        document.getElementById('computerRockHand').style.filter = "brightness(100%)";

        return 'Rock';
    }

    if (number === 1){

        document.getElementById('computerPaperHand').style.filter = "brightness(100%)";

        return 'Paper';
    }
    if (number === 2){

        document.getElementById('computerScissorsHand').style.filter = "brightness(100%)";

        return 'Scissors'
    }
    
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        roundWinner = 'Tie';
    }

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {

        playerScore++
        roundWinner = 'Player';
      }

    if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
      (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
      (computerSelection === 'Paper' && playerSelection === 'Rock')) {
          
      computerScore++
      roundWinner = 'Computer';
    }      
}

function updateScore(){

    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}

function clickHandler(playerSelection) {
  
    let computerSelection = randomComputerSelection();
    playRound(playerSelection, computerSelection)
    updateScore()
}