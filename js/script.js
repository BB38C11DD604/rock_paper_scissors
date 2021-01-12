//Randomized computer plays Rock, Paper, or Scissors at equal chance.
function computerPlay() {

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) +1) + min; //This function returns a random number between min and max (inclusive).
    }

    const randomNumber = getRandomInteger(1, 9999)

    if (randomNumber <= 3333) {
        return "Rock" //RNG resulting in 1-3333 (3333 total) results in Rock.;
    } else if (randomNumber >= 5000) {
        return "Paper" //RNG resulting in 6667-9999 (3333 total) results in Paper.
    } else {
        return "Scissors" //RNG resulting in 3334-6666 (3333 total) results in Scissors.
    }
}

//Test RNG
function testComputerPlay(numberOfRolls) {

    let numberOfRock = 0
    let numberOfPaper = 0
    let numberOfScissors = 0

    for (i = 0; i < numberOfRolls; i++) {
        if (computerPlay() === "Rock") {
            numberOfRock += 1;
        } else if (computerPlay() === "Paper") {
            numberOfPaper += 1;
        } else {
            numberOfScissors += 1;
        }
    }

    return "Rock: " + numberOfRock + ". Paper:" + numberOfPaper + ". Scissors:" + numberOfScissors + ".";
}

//Plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {

    playerSelection = String(playerSelection).toLowerCase(); //Make sure that playerSelection is a string then convert to lowercase within this function in order to make it case insensitive.
    computerSelection = String(computerSelection).toLowerCase(); //Same idea as above.

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie! Go again!" //Rock ties to Rock.
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock." //Rock loses to Paper.
        } else {
            return "You Win! Rock beats Scissors." //Rock wins against Scissors.
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "Tie! Go again!" //Paper ties to Paper.
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper." //Paper loses to Scissors.
        } else {
            return "You Win! Paper beats Rock." //Paper wins against Rock.
        }
        
    } else { //Player selects scissors.
        if (computerSelection === "scissors") {
            return "Tie! Go again!" //Scissors ties to Scissors.
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors." //Scissors loses to Rock.
        } else {
            return "You Win! Scissors beats Paper." //Scissors wins againt Paper.
        }       
    }
}

//Game of five rounds that keeps score and reports a winner and loser at the end. Not iterated ATM.
function game(playerSelection1, playerSelection2, playerSelection3, playerSelection4, playerSelection5) {

    let playerScore = 0;
    let computerScore = 0;

    //Round 1.
    
    if (playRound(playerSelection1, computerPlay()) === "Tie! Go again!") {
        playerScore += 0; //If tied, neither the player nor computer gets a point.
    } else if (playRound(playerSelection1, computerPlay()) === "You Win! Rock beats Scissors."
            || playRound(playerSelection1, computerPlay()) === "You Win! Paper beats Rock."
            || playRound(playerSelection1, computerPlay()) === "You Win! Scissors beats Paper.") {
        playerScore += 1; //If player wins, player gets a point. There needs to be a better way to return win/loss values...
    } else {
        computerScore += 1; //If computer wins, computer gets a point.
    }

    //Round 2.
    if (playRound(playerSelection2, computerPlay()) === "Tie! Go again!") {
        playerScore += 0; //If tied, neither the player nor computer gets a point.
    } else if (playRound(playerSelection2, computerPlay()) === "You Win! Rock beats Scissors."
            || playRound(playerSelection2, computerPlay()) === "You Win! Paper beats Rock."
            || playRound(playerSelection2, computerPlay()) === "You Win! Scissors beats Paper.") {
        playerScore += 1; //If player wins, player gets a point.
    } else {
        computerScore += 1; //If computer wins, computer gets a point.
    }

    //Round 3.
    if (playRound(playerSelection3, computerPlay()) === "Tie! Go again!") {
        playerScore += 0; //If tied, neither the player nor computer gets a point.
    } else if (playRound(playerSelection3, computerPlay()) === "You Win! Rock beats Scissors."
            || playRound(playerSelection3, computerPlay()) === "You Win! Paper beats Rock."
            || playRound(playerSelection3, computerPlay()) === "You Win! Scissors beats Paper.") {
        playerScore += 1; //If player wins, player gets a point.
    } else {
        computerScore += 1; //If computer wins, computer gets a point.
    }

    //Round 4.
    if (playRound(playerSelection4, computerPlay()) === "Tie! Go again!") {
        playerScore += 0; //If tied, neither the player nor computer gets a point.
    } else if (playRound(playerSelection4, computerPlay()) === "You Win! Rock beats Scissors."
            || playRound(playerSelection4, computerPlay()) === "You Win! Paper beats Rock."
            || playRound(playerSelection4, computerPlay()) === "You Win! Scissors beats Paper.") {
        playerScore += 1; //If player wins, player gets a point.
    } else {
        computerScore += 1; //If computer wins, computer gets a point.
    }

    //Round 5.
    if (playRound(playerSelection5, computerPlay()) === "Tie! Go again!") {
        playerScore += 0; //If tied, neither the player nor computer gets a point.
    } else if (playRound(playerSelection5, computerPlay()) === "You Win! Rock beats Scissors."
            || playRound(playerSelection5, computerPlay()) === "You Win! Paper beats Rock."
            || playRound(playerSelection5, computerPlay()) === "You Win! Scissors beats Paper.") {
        playerScore += 1; //If player wins, player gets a point.
    } else {
        computerScore += 1; //If computer wins, computer gets a point.
    }

    //Final Tally of points. No ties have counted, so there must be a winner with an odd number of results recorded.
    if (playerScore > computerScore) {
        return "You win, " + playerScore + " to " + computerScore + "!"
    } else if (playerScore < computerScore) {
        return "You lose, " + computerScore + " to " + playerScore + "!"
    } else {
        return "Tied, " + playerScore + " to " +computerScore + "!"
    }
}

//Iterated Game of computers playing for player. To test if my RNG is working properly. Ok, it's not working properly. Expected value should be 33% for all outcomes, but i'm only getting 18.5% for player 1 win, and 45.5% for player loss??
function test(numberOfGames) {
        
    let playerScore = 0
    let computerScore = 0

    for (i = 0; i < numberOfGames; i++) {
        if (playRound(computerPlay(), computerPlay()) === "Tie! Go again!") {
            playerScore += 0; //If tied, neither the player nor computer gets a point.
        } else if (playRound(computerPlay(), computerPlay()) === "You Win! Rock beats Scissors."
                || playRound(computerPlay(), computerPlay()) === "You Win! Paper beats Rock."
                || playRound(computerPlay(), computerPlay()) === "You Win! Scissors beats Paper.") {
            playerScore += 1; //If player wins, player gets a point.
        } else {
            computerScore += 1; //If computer wins, computer gets a point.
        }
    }

    let numberOfTies = numberOfGames - (playerScore + computerScore)

    return "Player 1: " + playerScore + ". Player 2: " + computerScore + ". Ties: " + numberOfTies + ".";

}


