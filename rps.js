let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", getHumanChoiceByButton("#id"));
});

function playGame(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log("The computer chose: " + computerChoice);
    console.log("The human chose: " + humanChoice);
    playRound(computerChoice,humanChoice);
    let keepPlaying = playAgainQ();
    if (keepPlaying === "yes"){
        playGame();
    } else {
        console.log("Thanks for playing! Goodbye.");
    }
}

playGame();



function playRound(computerChoice, humanChoice){
    let result = "It's a tie!";

    if (computerChoice === "Rock"){
        switch(humanChoice){
            case "Rock": break;
            case "Paper": result = "The human wins!"; humanScore++; break;
            case "Scissors": result = "The computer wins!"; computerScore++; break;
        }
    } else if (computerChoice === "Paper"){
        switch(humanChoice){
            case "Rock": result = "The computer wins!"; computerScore++; break;
            case "Paper": break;
            case "Scissors": result = "The human wins!"; humanScore++; break;
        }
    } else {
        switch(humanChoice){
            case "Rock": result = "The human wins!"; humanScore++; break;
            case "Paper": result = "The computer wins!"; computerScore++; break;
            case "Scissors": break;
        }
    }
    console.log(result);
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
}

function playAgainQ(){
    let question = prompt("Do you want to play another round?\nY = Yes\nN = No");
    let questionValidation = question.toLowerCase(); //doesn't validate ints yet
    console.log(questionValidation);
    let answer;
    switch(questionValidation){
        case "y":
        case "yes":
        case "Y": answer = "yes"; break;
        case "n":
        case "no":
        case "N": answer = "no"; break;
        default: console.log("Please enter valid selection"); break;
    }
    // console.log(answer);
    return answer;
}


function getComputerChoice(){
    const min = Math.ceil(1);
    const max = Math.floor(3);
   let random = Math.floor(Math.random() * (max - min + 1) + min);
   let choice;
   switch (random){
    case 1: choice = "Rock"; break;
    case 2: choice = "Paper"; break;
    case 3: choice = "Scissors"; break;
   }
//    console.log(choice);
   return choice;
}


function getHumanChoice(){
    let choice;
   let input = parseInt(prompt("Enter number to select your weapon: " +
    "\n1-Rock\n2-Paper\n3-Scissors")); 
    switch(input){
        case 1: choice = "Rock"; break;
        case 2: choice = "Paper"; break;
        case 3: choice = "Scissors"; break;
        default: choice = "Rock"; console.log("Not a valid number; weapon defaulted to Rock -- good luck!"); break;
       }
    return choice;
}

function getHumanChoiceByButton(buttonChoice){
    let choice;
    switch(buttonChoice){
        case "rock": choice = "Rock"; break;
        case "paper": choice = "Paper"; break;
        case "scissors": choice = "Scissors"; break;
    }
    console.log(choice);
    return choice;
}

