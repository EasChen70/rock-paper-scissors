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
let updateScore = document.querySelector(".YourLives");
let computerScore = 5;
let updateComp = document.querySelector(".EnemyLives");

let rounds = document.querySelector(".Round");

let outcome = document.querySelector(".Outcome");

let yourChoice = document.querySelector(".YourElementChoice");

let compChoice = document.querySelector(".EnemyElementChoice");

let border = document.querySelector(".Outcomes");
let insideBorders1 = document.querySelector(".BattleStats");
let insideBorders2 = document.querySelector(".ComputerChoice");

let playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', function() {
    window.location.reload();
});
playAgain.style.visibility = 'hidden';

let roundNum = 0;
//Get buttons + id name then passes to getPlayerChoice function
const buttons = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if(userScore > 0 && computerScore > 0){
            const playerChoice = this.getAttribute('id').toLowerCase();
            const computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            roundNum++;
            rounds.textContent = "Round: " + roundNum
            yourChoice.textContent = playerChoice;
            compChoice.textContent = computerChoice;

                switch (result) {
                    case 0:
                        outcome.textContent = "It's a Tie!"
                        border.style.borderColor = "gray";
                        insideBorders1.style.borderLeftColor = "gray";
                        insideBorders2.style.borderLeftColor = "gray";
                        break;
                    case 1:
                        outcome.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                        computerScore--;
                        updateComp.textContent = "Enemy's Lives: " + computerScore;
                        border.style.borderColor = "green";
                        insideBorders1.style.borderLeftColor = "green";
                        insideBorders2.style.borderLeftColor = "green";
                        break;
                    case 2:
                        outcome.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
                        userScore--;
                        updateScore.textContent = "Your Lives: " + userScore;
                        border.style.borderColor = "red";
                        insideBorders1.style.borderLeftColor = "red";
                        insideBorders2.style.borderLeftColor = "red";
                        break;
                }
            
            if(computerScore == 0){
                outcome.textContent = "You are the Victor Young Sorcerer!"
                playAgain.style.visibility = 'visible';
            } else if (userScore == 0){
                outcome.textContent = "The Dark Sorcerer has emerged the Victor..."
                playAgain.style.visibility = 'visible';
            }
        }
    });
});

        



