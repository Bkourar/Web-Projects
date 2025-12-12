// 'use strict';

const setText =  (element,value) =>{
     document.querySelector(element).textContent = value
}

let random_number = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (meassage) {
    document.querySelector(".message").textContent = meassage;
}

function manuplaitEven() {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        displayMessage("invalid input value !!");
    } else if (guess === random_number) {
        displayMessage('🎉 Correct Number! ');
        document.querySelector(".number").textContent = random_number;
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== random_number) {
        if (score > 1) {
            displayMessage(guess > random_number ? 'Highnumber !' : 'Low number !');
            score--;
            setText(".score",score);
        } else {
            displayMessage("you lose !!");
            setText(".score",0);
        }
    }
}

function restartGame() {
    random_number = Math.trunc((Math.random() * 20) + 1);
    score = 20;
    displayMessage('Start guessing...');
    setText(".score",score);
    setText(".number",'?');
    document.querySelector(".guess").value  = '';
    document.querySelector("body").style.backgroundColor = '#000000ff';
    document.querySelector(".number").style.width = '15rem';
}

document.querySelector('.check').addEventListener('click', manuplaitEven);
document.querySelector('.again').addEventListener('click', restartGame);

