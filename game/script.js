const cell_1 = document.querySelector("#cell_1");
const cell_2 = document.querySelector("#cell_2");
const cell_3 = document.querySelector('#cell_3');

const cell_4 = document.querySelector("#cell_4");
const cell_5 = document.querySelector("#cell_5");
const cell_6 = document.querySelector('#cell_6');

const cell_7 = document.querySelector("#cell_7");
const cell_8 = document.querySelector("#cell_8");
const cell_9 = document.querySelector('#cell_9');

const winner = document.querySelector('#winner');

const startScreen = document.querySelector('.playground');
const finishScreen = document.querySelector('.result');

let cells = Array.from(document.querySelectorAll('.cell'));

const obj = {
    cell_1: '',
    cell_2: '',
    cell_3: '',
    cell_4: '',
    cell_5: '',
    cell_6: '',
    cell_7: '',
    cell_8: '',
    cell_9: '',
};

let turn = 0;
let gameOver = false;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const checkGameStatus = () => {
    if (
        // horizontal lines
        (obj.cell_1 == 'X' && obj.cell_2 == 'X' && obj.cell_3 == 'X') ||
        (obj.cell_4 == 'X' && obj.cell_5 == 'X' && obj.cell_6 == 'X') ||
        (obj.cell_7 == 'X' && obj.cell_8 == 'X' && obj.cell_9 == 'X') ||

        // vertical lines
        (obj.cell_1 == 'X' && obj.cell_4 == 'X' && obj.cell_7 == 'X') ||
        (obj.cell_2 == 'X' && obj.cell_5 == 'X' && obj.cell_8 == 'X') ||
        (obj.cell_3 == 'X' && obj.cell_6 == 'X' && obj.cell_9 == 'X') ||

        // diagonals
        (obj.cell_1 == 'X' && obj.cell_5 == 'X' && obj.cell_9 == 'X') ||
        (obj.cell_3 == 'X' && obj.cell_5 == 'X' && obj.cell_7 == 'X')) {
        winner.innerHTML = 'X-player won!';
        showResult();
        gameOver = true
        return;

    } else if (

        // horizontal lines
        (obj.cell_1 == 'O' && obj.cell_2 == 'O' && obj.cell_3 == 'O') ||
        (obj.cell_4 == 'O' && obj.cell_5 == 'O' && obj.cell_6 == 'O') ||
        (obj.cell_7 == 'O' && obj.cell_8 == 'O' && obj.cell_9 == 'O') ||

        // vertical lines
        (obj.cell_1 == 'O' && obj.cell_4 == 'O' && obj.cell_7 == 'O') ||
        (obj.cell_2 == 'O' && obj.cell_5 == 'O' && obj.cell_8 == 'O') ||
        (obj.cell_3 == 'O' && obj.cell_6 == 'O' && obj.cell_9 == 'O') ||

        // diagonals
        (obj.cell_1 == 'O' && obj.cell_5 == 'O' && obj.cell_9 == 'O') ||
        (obj.cell_3 == 'O' && obj.cell_5 == 'O' && obj.cell_7 == 'O')) {
        winner.innerHTML = 'O-player won!';
        showResult();
        gameOver = true
        return;

    }

    if (turn >= 5) {
        winner.innerHTML = 'Noone won!';
        showResult();
        gameOver = true;
        return;
    }
}

const playGame = () => {
    turn++;
    insertRandomO();
    drawSymbols();
    checkGameStatus();
}

const showResult = () => {
    // switch displays
    document.querySelector('#winner').innerHTML = winner.innerHTML;
    startScreen.style.opacity = 0.65;
    finishScreen.style.display = 'flex';
}

const resetGame = () => {
    clearPlaygroud();
    drawSymbols();
    gameOver = false;
    turn = 0;
    finishScreen.style.display = 'none';
    startScreen.style.opacity = 1;

}

const clearPlaygroud = () => {
    obj.cell_1 = '';
    obj.cell_2 = '';
    obj.cell_3 = '';
    obj.cell_4 = '';
    obj.cell_5 = '';
    obj.cell_6 = '';
    obj.cell_7 = '';
    obj.cell_8 = '';
    obj.cell_9 = '';
}

const insertRandomO = (inserted = false) => {

    if (inserted || turn >= 5) {
        return;
    };

    let randomInteger = getRandomIntInclusive(1, 9);

    if (obj[`cell_${randomInteger}`] == '') {
        obj[`cell_${randomInteger}`] = 'O';
        insertRandomO(true);
    } else {
        insertRandomO();
    }
}

const drawSymbols = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = obj[`cell_${i + 1}`];
    }
}

const setX = function (event) {
    switch (this.id) {
        case 'cell_1':
            if (obj.cell_1 == '') {
                obj.cell_1 = 'X';
                playGame();
            }
            break;
        case 'cell_2':
            if (obj.cell_2 == '') {
                obj.cell_2 = 'X';
                playGame();
            }
            break;
        case 'cell_3':
            if (obj.cell_3 == '') {
                obj.cell_3 = 'X';
                playGame();
            }
            break;
        case 'cell_4':
            if (obj.cell_4 == '') {
                obj.cell_4 = 'X';
                playGame();
            }
            break;
        case 'cell_5':
            if (obj.cell_5 == '') {
                obj.cell_5 = 'X';
                playGame();
            }
            break;
        case 'cell_6':
            if (obj.cell_6 == '') {
                obj.cell_6 = 'X';
                playGame();
            }
            break;
        case 'cell_7':
            if (obj.cell_7 == '') {
                obj.cell_7 = 'X';
                playGame();
            }
            break;
        case 'cell_8':
            if (obj.cell_8 == '') {
                obj.cell_8 = 'X';
                playGame();
            }
            break;
        case 'cell_9':
            if (obj.cell_9 == '') {
                obj.cell_9 = 'X';
                playGame();
            }
            break;
        default:
            console.log('default');
            break;
    }
}

cell_1.onclick = setX;
cell_2.onclick = setX;
cell_3.onclick = setX;

cell_4.onclick = setX;
cell_5.onclick = setX;
cell_6.onclick = setX;

cell_7.onclick = setX;
cell_8.onclick = setX;
cell_9.onclick = setX;