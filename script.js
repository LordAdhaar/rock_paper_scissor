console.log("hello world");

//computer options
const options = ["ROCK","PAPER","SCISSOR"];

function getComputerChoice(){
    return options[Math.floor(Math.random()*3)];
}

let playerWins = 0;
let computerWins = 0;

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

function game(){

    for (let i = 0;  i<5 ; i++) {
        console.log(playRound(prompt("Choose from Rock, Paper or Scissor", "Rock"),getComputerChoice()));
        console.log(i);
        
    }

    console.log(playerWins);
    console.log(computerWins);

    if (playerWins>computerWins){
        return "YOU WON THE GAME";
    }
    else if(playerWins===computerWins){
        return "ITS A TIE";
    }
    else{
        return "YOU LOST THE GAME"
    }

}

console.log(game());
