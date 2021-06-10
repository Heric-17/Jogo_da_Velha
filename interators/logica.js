'use strict'

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
});

function handleClick(event) {
    let position = event.target.id
    detec(position);

    if (boardVaz(position)) {
        setTimeout(() => {
            alert("jogador " + (player + 1) + " ganhou")
        }, 30);
    }
    review1(position);

    if (document.getElementById("bot").checked) {
        if (rand()) {
            setTimeout(() => {
                alert("jogador " + (player + 1) + " ganhou")
            }, 30);
        }
        review_bot();
    }
    if (gameover && contador == 0) {
        contador = 1;
        if (player == 0) {
            jedi += 1;
            document.getElementById("jedi_placar").innerHTML = jedi;
        } else {
            sith += 1;
            document.getElementById("sith_placar").innerHTML = sith;
        }
    }
    console.log(velha)
    deuVelha();
}

function review1(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];

    try {
        square.innerHTML = `<div class="${symbol}"></div>`;
    }
    catch (err) {
        console.log("Impossivel adicionar sobre  ")
    }
}
function review_bot() {
    let randSquare = document.getElementById(random.toString());
    let rand_symbol = board[random];

    try {
        randSquare.innerHTML = `<div class="${rand_symbol}"></div>`;
    }
    catch (err) {
        console.log("Impossivel adicionar sobre")
    }
}

function deuVelha() {
    if (!gameover && velha >= 9) {
        setTimeout(() => {
            alert("Deu velha!")
        }, 30);
    }
}

function restart() {
    velha = 0;
    contador = 0;
    let squares = document.querySelectorAll(".square");
    clear();
    squares.forEach((square) => {
        if (square.firstElementChild != null) {
            square.removeChild(square.firstElementChild);
        }
    });
};

