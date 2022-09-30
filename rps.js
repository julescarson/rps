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


// Rules
const rules = document.createElement('p')
rules.classList.add('rules');
rules.textContent = 'Rock, Paper, Scissors. First to 5 wins.'

// Creating buttons to add to DOM
// Rock
const rockBox = document.createElement('div');
rockBox.classList.add('rockBox')

const rockButton = document.createElement('button');
rockButton.classList.add('rock', 'hovering');
rockButton.classList.add('hovering');

const rockText = document.createElement('p');
rockText.classList.add('rockText');
rockText.innerText = "Rock!";

// Paper
const paperButton = document.createElement('button');
paperButton.classList.add('paper');
paperButton.classList.add('hovering');
const paperText = document.createElement('p');
paperText.classList.add('paperText');
paperText.innerText = "Paper!";

// Scissors
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissors');
scissorsButton.classList.add('hovering');
const scissorsText = document.createElement('p');
scissorsText.classList.add('scissorsText');
scissorsText.innerText = "Scissors!";

// numerical scores
const cscore = document.createElement('p');
cscore.classList.add('cscore');

const pscore = document.createElement('p');
pscore.classList.add('pscore');


// game over - display winner
function finalResult() {
    let resultText = '';

    if (computerScore > playerScore) {
        resultText = `You Lose!`
    } else {
        resultText = `You Win!`
    }
    return resultText;
}

// game over - disable buttons
function disableButtons() {
    // buttons not usable
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
    // hover animation removed
    rockButton.classList.remove('hovering');
    scissorsButton.classList.remove('hovering');
    paperButton.classList.remove('hovering');
    // gray out buttons
    rockButton.classList.add('grayedout');
    paperButton.classList.add('grayedout');
    scissorsButton.classList.add('grayedout');
    // remove text overlay for buttons
    rockText.remove(this);
    paperText.remove(this);
    scissorsText.remove(this);
}

// new game button div
const newGame = document.createElement('div');
newGame.classList.add('newGame');

const playAgain = document.createElement('button');
playAgain.classList.add('playAgain');
playAgain.innerText = ` Play Again ?`;

const winLoseText = document.createElement('p');
winLoseText.classList.add('winLoseText');

// game over display
function gameOver() {
    console.log('gameover');
    winLoseText.textContent = finalResult();
    disableButtons();

    display.appendChild(winLoseText);
    display.appendChild(newGame);
    newGame.appendChild(playAgain);
}

// elements to update as game played
const playerTextSelection = document.createElement('p');
const computerTextSelection = document.createElement('p');
playerTextSelection.classList.add('playerTextSelection');
computerTextSelection.classList.add('computerTextSelection');

const playerBox = document.createElement('div');
playerBox.classList.add('playerBox');

const computerBox = document.createElement('div');
computerBox.classList.add('computerBox');

const resultBox = document.createElement('div');
resultBox.classList.add('resultBox');

const youText = document.createElement('p');
youText.classList.add('youText');
youText.textContent = 'You ';

const computerText = document.createElement('p');
computerText.classList.add('computerText');
computerText.textContent = 'Computer ';

const textCompare = document.createElement('div');
textCompare.classList.add('textCompare');

// gameplay update
let removeRules = 1;
function output() {

    display.appendChild(resultBox);
    //remove rules ONCE
    if (removeRules == 1) {
        removeRules++;
        display.removeChild(rules);
    }

    playerTextSelection.textContent = `${playerSelection}`;
    computerTextSelection.textContent = `${computerSelection}`;

    pscore.textContent = ` ${playerScore} `;
    cscore.textContent = ` ${computerScore} `;

    resultBox.appendChild(playerBox);
    playerBox.appendChild(youText);
    playerBox.appendChild(pscore);


    resultBox.appendChild(computerBox);
    computerBox.appendChild(computerText);
    computerBox.appendChild(cscore);


    display.appendChild(textCompare);
    textCompare.appendChild(playerTextSelection);
    textCompare.appendChild(computerTextSelection);


}

// DOM at start
display.appendChild(choices);
display.appendChild(rules);
choices.appendChild(rockBox);
rockBox.appendChild(rockButton);
choices.appendChild(paperButton);
choices.appendChild(scissorsButton);
rockButton.appendChild(rockText);
paperButton.appendChild(paperText);
scissorsButton.appendChild(scissorsText);

// check button press, play game, output to user
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

//replay button 
playAgain.addEventListener('click', () => {
    location.reload();
});

