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




// function getPlayerChoice(input){
//     let choice = input.toLowerCase();
//     if(choice === "earth" || choice === "water" || choice === "fire"){
//         console.log(choice);
//         return choice;
//     }else{
//         console.log("Something went wrong!");
//     }  
// }


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


let userScore = 5;
let computerScore = 5;    
let i = 0;
//Get buttons + id name then passes to getPlayerChoice function
const buttons = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if(userScore > 0 && computerScore > 0){
            const playerChoice = this.getAttribute('id').toLowerCase();
            const computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            i++;
                switch (result) {
                    case 0:
                        console.log(`Round ${i + 1}: It's a Tie!`);
                        break;
                    case 1:
                        console.log(`Round ${i + 1}: You Win! ${playerChoice} beats ${computerChoice}`);
                        computerScore--;
                        break;
                    case 2:
                        console.log(`Round ${i + 1}: You Lose! ${computerChoice} beats ${playerChoice}`);
                        userScore--;
                        break;
                }
            
            if(computerScore == 0){
                console.log("You Won!")
            } else if (userScore == 0){
                console.log("You Lost!")
            }
        }
    });
});

        



