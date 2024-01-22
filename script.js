function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
console.log(getComputerChoice());


function getPlayerChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else{
        console.log("Invalid input, Try again!");
    }
}

console.log(getPlayerChoice());