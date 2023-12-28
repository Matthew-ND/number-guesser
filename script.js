let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    const secretNum = Math.floor(Math.random() * 10);
    return secretNum;
}

//Commpares the player and comptuer scores vs the random number. 
//Outputs true if player wins and false if computer wins.
const compareGuesses = (human, comp, random) => {
    if (human > 9 || human < 0) {
        window.alert('Your guess is outside acceptable range. Please enter a number between 0-9.');
    }

    let humanDif = Math.abs(human - random);
    let compDif = Math.abs(comp - random);

    if (humanDif === compDif) {
        return true;
    } else if (humanDif < compDif) {
        return true;
    } else {
        return false;
    }
}

//console.log(compareGuesses(7, 7, generateTarget()));

//Updates score by pulling in the winner and adding to their score.
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

//Updates round number.
const advanceRound = currendRoundNumber => {
    currentRoundNumber++;

}

