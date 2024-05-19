
// const computerSelection = getComputerChoice();

// function playRound(playerSelection,computerSelection){
//     let condtion;

//     if (playerSelection == "rock" & computerSelection == "scissors") {
//         condtion = "you win rock beats scissors";
//     } else if (playerSelection == "papper" & computerSelection == "rock") {
//         condtion = "you win papper beats rock";
//     } else if (playerSelection == "scissors" & computerSelection == "papper") {
//         condtion = "you win scissors beats papper";
//     } else if (playerSelection == "scissors" & computerSelection == "rock") {
//         condtion = "you lose rock beats scissors";
//     } else if (playerSelection == "papper" & computerSelection == "scissors") {
//         condtion = "you lose scissors beats papper";
//     } else if (playerSelection == "rock" & computerSelection == "papper") {
//         condtion = "you lose papper beats rock";
//     } else {
//         condtion = "it's a tie";
//     }
//     return condtion;
// }

// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");
// const playerChoice = document.querySelector("#playerCoice");
// const computerChoice = document.querySelector("#computerCoice");
// const roundWinner = document.querySelector("#roundWinner");
// const playerScore = document.querySelector("#playerScpre");
// const computerScore = document.querySelector("#computerScore");

// btn1.addEventListener("click" , () => {
//     playerChoice.textContent = "Rock";
//     computerChoice.textContent = computerSelection;
//     roundWinner = playRound("Rock",computerSelection)

// });
// btn2.addEventListener("click" , () => {
//     playerChoice.textContent = "Papper";
//     computerChoice.textContent = computerSelection;
//     playRound("Papper",computerSelection)

// });


// btn3.addEventListener("click" , () => { 
//     playerChoice.textContent = "Scissors";
    
//     playRound("Scissors",computerSelection)

// });
// let userWinCount = 0;
// let computerWinCount = 0;