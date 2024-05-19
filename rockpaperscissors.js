function getComputerChoice(){
    array=["rock","papper","scissors"];
    let index=(Math.floor(Math.random()*3));
    return array[index];
};

function playRound(playerSelection,computerSelection){
    let condtion;

    if (playerSelection == "rock" & computerSelection == "scissors") {
        condtion = "you win rock beats scissors";
    } else if (playerSelection == "papper" & computerSelection == "rock") {
        condtion = "you win papper beats rock";
    } else if (playerSelection == "scissors" & computerSelection == "papper") {
        condtion = "you win scissors beats papper";
    } else if (playerSelection == "scissors" & computerSelection == "rock") {
        condtion = "you lose rock beats scissors";
    } else if (playerSelection == "papper" & computerSelection == "scissors") {
        condtion = "you lose scissors beats papper";
    } else if (playerSelection == "rock" & computerSelection == "papper") {
        condtion = "you lose papper beats rock";
    } else {
        condtion = "it's a tie";
    }
    return condtion;
};

function checkResult(result){
        if(result =="you win rock beats scissors"){
            playerCounter += 1;
        } else if (result =="you win papper beats rock"){
            playerCounter += 1;
        }else if (result =="you win scissors beats papper"){
            playerCounter += 1;
        }else if (result =="you lose rock beats scissors"){
            computerCounter += 1;
        }else if (result =="you lose scissors beats papper"){
            computerCounter += 1;
        }else if (result =="you lose papper beats rock"){
            computerCounter += 1
        }
};

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const playerChoice = document.querySelector("#playerCoice");
const computerChoice = document.querySelector("#computerChoice");
const roundWinner = document.querySelector("#roundWinner");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const gameWinner = document.querySelector("#gameWinner");

let playerCounter = 0;
let computerCounter = 0;

    
btn1.addEventListener("click", () => {
    if (playerCounter < 5 && computerCounter < 5){
    playerChoice.textContent = "rock";
    computerChoice.textContent = getComputerChoice();
    let result = playRound(playerChoice.textContent,computerChoice.textContent);
    roundWinner.textContent = result;
    checkResult(result);
    playerScore.textContent = playerCounter;
    computerScore.textContent = computerCounter;
    if (playerCounter == 5 || computerCounter == 5){
        if (playerCounter < computerCounter){
            gameWinner.textContent = "you lost against the computer";
        } else if (playerCounter > computerCounter){
            gameWinner.textContent = "congratulations you won against the computer";
        }
    }
    };
})

btn2.addEventListener("click", () => {
    if (playerCounter < 5 && computerCounter < 5){
    playerChoice.textContent = "papper";
    computerChoice.textContent = getComputerChoice();
    let result = playRound(playerChoice.textContent,computerChoice.textContent);
    roundWinner.textContent = result;
    checkResult(result);
    playerScore.textContent = playerCounter;
    computerScore.textContent = computerCounter;
    if (playerCounter == 5 || computerCounter == 5){
        if (playerCounter < computerCounter){
            gameWinner.textContent = "you lost against the computer";
        } else if (playerCounter > computerCounter){
            gameWinner.textContent = "congratulations you won against the computer";
        }
    }
    } 
})
    
btn3.addEventListener("click", () => {
    if (playerCounter < 5 && computerCounter < 5){
    playerChoice.textContent = "scissors";
    computerChoice.textContent = getComputerChoice();
    let result = playRound(playerChoice.textContent,computerChoice.textContent);
    roundWinner.textContent = result;
    checkResult(result);
    playerScore.textContent = playerCounter;
    computerScore.textContent = computerCounter;
    if (playerCounter == 5 || computerCounter == 5){
        if (playerCounter < computerCounter){
            gameWinner.textContent = "you lost against the computer";
        } else if (playerCounter > computerCounter){
            gameWinner.textContent = "congratulations you won against the computer";
        }
    }
    };
})
