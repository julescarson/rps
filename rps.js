// console.log('properly connected to .js');


// user vs computer
// user input rock paper or scissors
// computer get random rock paper or scissors result
// compare and show winner

const tie = 'It\'s a tie!';
const win = 'You win!';
const lose = 'You lose!';

const computerSelection = computerPlay();
const playerSelection =  'Rock';

console.log('You: '+playerSelection);
console.log('Computer: '+computerSelection);



function computerPlay() {

    let computerResult = '';
    //random number used to decide choice
    let rangeOptions = Math.round(Math.random()*100);
    // console.log(rangeOptions); //test
    
    //ock paper scissors into thirds of 0 - 99
    if (rangeOptions >= 0 && rangeOptions <= 33) {
        computerResult = 'Rock';
    } else if (rangeOptions > 33 && rangeOptions <= 66) {
        computerResult = 'Paper';
    } else {
        computerResult = 'Scissors';
    }
    // return string result
    return computerResult;
}


function playRound(computerSelection, playerSelection) {
    // check tie first, exit function if tie
    if (computerSelection === playerSelection) {
        return tie;
    } else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            return lose;
        } else if (computerSelection == 'Scissors') {
            return win;
        }    
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            return win;
        } else if (computerSelection == 'Scissors') {
            return lose;
        }   
    } else if (playerSelection == 'Scissors'){
        if (computerSelection == 'Paper') {
            return win;
        } else if (computerSelection == 'Rock') {
            return lose;
        }
    }
}

console.log(playRound(computerSelection, playerSelection));


function game() {

}

