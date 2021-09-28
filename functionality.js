const playerScoreDiv = document.getElementById('playerScore');
const computerScoreDiv = document.getElementById('computerScore');
const rockButton = document.getElementById('playerRockHand');
const paperButton = document.getElementById('playerPaperHand');
const scissorsButton = document.getElementById('playerScissorsHand');
const endGameScreen = document.getElementById('endGameScreen');
const endGameMessage = document.getElementById('mainMessage');
const restartButton = document.getElementById('restartButton');

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

rockButton.addEventListener('click', () => clickHandler('Rock'))
paperButton.addEventListener('click', () => clickHandler('Paper'))
scissorsButton.addEventListener('click', () => clickHandler('Scissors'))
restartButton.addEventListener('click', restartGame);

function randomComputerSelection(){
    
    let number = Math.floor(Math.random()*3);

    document.getElementById('computerRockHand').style.filter = "brightness(70%)";
    document.getElementById('computerPaperHand').style.filter = "brightness(70%)";
    document.getElementById('computerScissorsHand').style.filter = "brightness(70%)";

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

function isGameOver(){
    return playerScore === 5 || computerScore === 5;
}

function openEndGameScreen(){
    endGameScreen.classList.add('active')
}

function finishEndGameScreen(){
    endGameScreen.classList.remove('active')
}

function setEndingMessage(){
    return playerScore > computerScore ? (endGameMessage.textContent = 'You won !') : (endGameMessage.textContent = 'You lost !')
}

function restartGame(){
    playerScore = 0
    computerScore = 0
    updateScore()
    finishEndGameScreen();
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
  
    if(isGameOver()){
        
        openEndGameScreen()
        return
    }

    let computerSelection = randomComputerSelection();
    playRound(playerSelection, computerSelection)
    updateScore()

    if(isGameOver()){
        
        openEndGameScreen()
        setEndingMessage()
        return
    }
}