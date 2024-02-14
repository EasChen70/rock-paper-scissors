function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "earth";
        case 1:
            return "water";
        case 2:
            return "fire";
    }
}

//Get buttons + id name then passes to getPlayerChoice function
const buttons = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const choice = this.getAttribute('id');
        getPlayerChoice(choice);
    });
});


function getPlayerChoice(input){
    let choice = input.toLowerCase();
    if(choice === "earth" || choice === "water" || choice === "fire"){
        console.log(choice);
        return choice;
    }else{
        console.log("Something went wrong!");
    }  
}


function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 0;
    }
    if( 
        (playerChoice == "earth" && computerChoice == "water")||
        (playerChoice == "water" && computerChoice == "fire")||
        (playerChoice == "fire" && computerChoice == "earth")
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