let computerSelection = '';
let playerSelection = '';
let playerScore = 0;
let computerScore = 0;


function tie() { };
function win() { playerScore++; }
function lose() { computerScore++; }

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

    if (comp === player) { tie(); }

    else if (player == 'Rock') {
        if (comp == 'Paper') { lose(); }
        else if (comp == 'Scissors') { win(); }
    }

    else if (player == 'Paper') {
        if (comp == 'Rock') { win(); }
        else if (comp == 'Scissors') { lose(); }
    }

    else if (player == 'Scissors') {
        if (comp == 'Paper') { win(); }
        else if (comp == 'Rock') { lose(); }
    }
}

// play game instance - until win condition
function game() {
    if (computerScore < 5 && playerScore < 5) {
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
    } else {
        gameOver();
    }
}


// *** UI configuration ***
const display = document.querySelector('#game');
const choices = document.createElement('div');

choices.classList.add('choices');
choices.style.cssText = (`display: flex;  `); // button style css



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

// End Results
let endResults = document.createElement('p');
endResults.classList.add('endResults');

function finalResult() {
    let resultText = '';
    if (computerScore > playerScore) {
        resultText = `You Lose!`
    } else {
        resultText = `You Win!`
    }
    return resultText;
}


function gameOver() {
    choices.remove();
    console.log('gameover');
    endResults.textContent = finalResult();
    display.appendChild(endResults);
}

function output() {
    p.textContent = `You: ${playerSelection} --- Computer: ${computerSelection}`;
    score.textContent = `Player Score: ${playerScore} --- Computer Score: ${computerScore}`
    display.appendChild(score);
    display.appendChild(roundResult);
    roundResult.appendChild(p);
}


// *** Add to DOM ***
display.appendChild(choices);
choices.appendChild(rockButton);
choices.appendChild(paperButton);
choices.appendChild(scissorsButton);

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

