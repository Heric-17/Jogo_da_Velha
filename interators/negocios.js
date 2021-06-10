let board = ["", "", "", "", "", "", "", "", ""];
let symbol = ["x", "o"];
let player = 0;
let gameover = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let jedi = 0;
let sith = 0;
let contador = 0;
let random;
let resultado = true;
let velha = 0;

function detec(position) {
    if (board[position] == "") {
        resultado = true;
    } else {
        resultado = false;
    }
}

function rand() {

    if (gameover) {
        return;
    }

    if (resultado) {
        random = Math.floor(Math.random() * 9);

        if (board[random] == "") {
            velha += 1;
            board[random] = symbol[player];

            gameover = iswin();
            if (!gameover) {
                player = (player == 0) ? 1 : 0;
            }
        } else {
            try { rand(); } catch (er) { }
        }
    }
    return gameover;
}


function boardVaz(position) {

    if (gameover) {
        return;
    }

    if (board[position] == "") {
        velha += 1;
        board[position] = symbol[player];

        gameover = iswin();
        if (!gameover) {
            player = (player == 0) ? 1 : 0;
        }
    }
    return gameover;
}

function clear() {
    board = ["", "", "", "", "", "", "", "", ""];
    player = 0;
    gameover = false;
}

function iswin() {
    for (var i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos0 = seq[0];
        let pos1 = seq[1];
        let pos2 = seq[2];

        if (board[pos0] == board[pos1] && board[pos0] == board[pos2] && board[pos0] != "") {
            return true;
        }
    }
    return false;
}

