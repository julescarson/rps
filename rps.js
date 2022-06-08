
const tie = 'It\'s a tie!';
const win = 'You win!';
const lose = 'You lose!';

let computerSelection = '';
let playerSelection = '';


// assign computer with rock, paper or scissors
function computerPlay() {
    let computerResult = '';
    let rangeOptions = Math.round(Math.random() * 100);

    if (rangeOptions >= 0 && rangeOptions <= 33) { computerResult = 'Rock'; }
    else if (rangeOptions > 33 && rangeOptions <= 66) { computerResult = 'Paper'; }
    else { computerResult = 'Scissors'; }

    return computerResult;
}


// determine round winner
function playRound(comp, player) {

    if (comp === player) { return `${tie}`; }

    else if (player == 'Rock') {
        if (comp == 'Paper') {
            return lose;
        } else if (comp == 'Scissors') {
            return win;
        }
    } else if (player == 'Paper') {
        if (comp == 'Rock') {
            return win;
        } else if (comp == 'Scissors') {
            return lose;
        }
    } else if (player == 'Scissors') {
        if (comp == 'Paper') {
            return win;
        } else if (comp == 'Rock') {
            return lose;
        }
    }
}

// play game instance
function game() {
    computerSelection = computerPlay();
    playRound(computerSelection, playerSelection);

}

// *** UI configuration ***
const display = document.querySelector('#game');
const choices = document.createElement('div');
choices.classList.add('choices');
choices.style.cssText = `display: flex;`; // button style css

// Rock
const rockButton = document.createElement('button');
rockButton.classList.add('rock');
rockButton.textContent = "Rock!";

// Paper
const paperButton = document.createElement('button');
paperButton.classList.add('paper');
paperButton.textContent = "Paper!";

// Scissors
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissors');
scissorsButton.textContent = "Scissors!";

// Round Results
let roundResult = document.createElement('div');
roundResult.classList.add('result');

let p = document.createElement('p');
p.classList.add('p');

let score = document.createElement('p');
score.classList.add('score');
score.textContent = `Player Score: ? --- Computer Score: ?`



function output() {
    p.textContent = `You: ${playerSelection} --- Computer: ${computerSelection}`;
    display.appendChild(roundResult);
    roundResult.appendChild(p);

}


// *** Add to DOM ***
display.appendChild(choices);
choices.appendChild(rockButton);
choices.appendChild(paperButton);
choices.appendChild(scissorsButton);
display.appendChild(score);



// *** Gameplay ***
rockButton.addEventListener('click', () => {
    playerSelection = 'Rock';
    game();
    output();
});

paperButton.addEventListener('click', () => {
    playerSelection = 'Paper';
    game();
    output();
});

scissorsButton.addEventListener('click', () => {
    playerSelection = 'Scissors';
    game();
    output();
});

