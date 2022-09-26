console.log("hello world");

//computer options
const options = ["ROCK","PAPER","SCISSOR"];

function getComputerChoice(){
    return options[Math.floor(Math.random()*3)];
}

let playerWins = 0;
let computerWins = 0;
const playerScore = document.querySelector(".you p");
const compScore = document.querySelector(".comp p");
const roundWinner = document.querySelector(".roundWinner");

function playRound(playerSelection, computerSelection){

    if (playerSelection.toUpperCase()===computerSelection){
        return "It's a tie";
    }
    else if (playerSelection.toUpperCase()==="ROCK"){
        if (computerSelection==="PAPER"){
            computerWins+=1;
            return "YOU LOSE PAPER BEATS ROCK";
        }
        else{
            playerWins+=1;
            return "YOU WIN ROCK BEATS SCISSOR";
        }
    }
    else if (playerSelection.toUpperCase()==="PAPER"){
        if (computerSelection==="ROCK"){
            playerWins+=1;
            return "YOU WIN PAPER BEATS ROCK";
        }
        else{
            computerWins+=1;
            return "YOU LOSE SCISSOR BEATS PAPER";
        }
    }
    else{
        if (computerSelection==="ROCK"){
            computerWins+=1;
            return "YOU LOSE ROCK BEATS SCISSOR";
        }
        else{
            playerWins+=1;
            return "YOU WIN SCISSOR BEATS PAPER";
        }
    }
}

const buttons = document.querySelectorAll("button");

function clickToPlayRound(){

    let roundResult = playRound(this.textContent, getComputerChoice());
    playerScore.textContent=playerWins;
    compScore.textContent=computerWins;

    console.log(playerWins,computerWins,roundResult);

    if (playerWins===5 || computerWins===5){
        if(playerWins===5){
            roundWinner.textContent="YOU WON";
        }
        else{
            roundWinner.textContent="COMPUTER WON HEHEHAHA LOSERLUND";
        }

        playerWins=0;
        computerWins=0;
        playerScore.textContent=playerWins;
        compScore.textContent=computerWins;

        return;
    }
    
    roundWinner.textContent=roundResult;



}


for(const button of buttons){
    button.addEventListener("click",clickToPlayRound);
}