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
    let validated = false;
    while(validated != true){
        let choice = prompt("Rock, Paper, or Scissors?");
        choice = choice.toLowerCase();
        if(choice == null){
            continue;
        }
        if(choice === "rock" || choice === "paper" || choice === "scissors"){
            validated = true;
            return choice;
        } 
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
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        switch (result) {
            case 0:
                console.log(`Round ${i + 1}: It's a Tie!`);
                break;
            case 1:
                console.log(`Round ${i + 1}: You Win! ${playerChoice} beats ${computerChoice}`);
                userScore++;
                break;
            case 2:
                console.log(`Round ${i + 1}: You Lose! ${computerChoice} beats ${playerChoice}`);
                computerScore++;
                break;
        }
    }
    if(userScore > computerScore){
        console.log("You Won!")
    } else if (userScore < computerScore){
        console.log("You Lost!")
    } else{
        console.log("It's A Tie!")
    }
}

playGame();