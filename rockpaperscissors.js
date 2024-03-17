function getComputerChoice(){
    array=["rock","papper","scissors"];
    let index=(Math.floor(Math.random()*3));
    return array[index];
}

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
}

let userWinCount = 0;
let computerWinCount = 0;

function playGame(){
    for(let i=0; i<=4; i++){
        const prompt=require("prompt-sync")({sigint:true});

        let playerSelection =prompt("choose rock, papper, scissors \n").toLowerCase();
        let computerSelection =getComputerChoice();
        let result = playRound(playerSelection,computerSelection);

        console.log(playRound(playerSelection,computerSelection));   
        console.log(playerSelection);
        console.log(computerSelection);

        if(result =="you win rock beats scissors"){
            userWinCount+=1;
        } else if (result =="you win papper beats rock"){
            userWinCount += 1;
        }else if (result =="you win scissors beats papper"){
            userWinCount += 1;
        }else if (result =="you lose rock beats scissors"){
            computerWinCount += 1;
        }else if (result =="you lose scissors beats papper"){
            computerWinCount += 1;
        }else if (result =="you lose papper beats rock"){
            computerWinCount += 1
        }
        
        console.log(userWinCount);
        console.log(computerWinCount);
        console.log(result);
    }
}

console.log(playGame());

if (userWinCount<computerWinCount){
    console.log("you lost against the computer");
} else if (userWinCount>computerWinCount){
    console.log("congratulations you won against the computer");
}else{
    console.log("not bad it's a tie");
}
