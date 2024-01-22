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


function getPlayerChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else{
        return null;
    }
}


function playRound(playerChoice, computerChoice){
    if(playerChoice === null){
        alert("Invalid input, Try again!");
        return null;
    }
    if(playerChoice === computerChoice){
        return 0;
    }

    if( 
        (playerChoice == "rock" && computerChoice == "scissors")||
        (playerChoice == "paper" && computerChoice == "rock")||
        (playerChoice == "scissors" && computerChoice == "paper")
        ) {
        return 1;
    } else{
        return 2;
    }
}

function playGame(){
    let userScore = 0;
    let computerScore = 0;
    for(i = 0; i < 5; i++){
        let result = playRound(getPlayerChoice(), getComputerChoice());
        switch(result){
            case 0:
                console.log("It's a Tie!");
                break;
            case 1:
                console.log("You Win! " + getPlayerChoice() + " beats " + getComputerChoice() + "!");
                userScore + 1;
                break;
            case 2:
                console.log("You Lose! " + getComputerChoice() + " beats " + getPlayerChoice() + "!");
                computerScore +1;
                break;
        }
    }
    if(userScore > computerScore){
        console.log("You Won!")
    } else{
        console.log("You Lost!")
    }
}

playGame();