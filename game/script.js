const cell_1 = document.querySelector("#cell_1");
const cell_2 = document.querySelector("#cell_2");
const cell_3 = document.querySelector('#cell_3');

const cell_4 = document.querySelector("#cell_4");
const cell_5 = document.querySelector("#cell_5");
const cell_6 = document.querySelector('#cell_6');

const cell_7 = document.querySelector("#cell_7");
const cell_8 = document.querySelector("#cell_8");
const cell_9 = document.querySelector('#cell_9');

let cells = Array.from(document.querySelectorAll('.cell'));

// console.log(cells);

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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const insertRandomO = (inserted = false) => {

    if (inserted || turn >= 4) { return }; //!!!

    let randomInteger = getRandomIntInclusive(1, 9);

    console.log(`It's randomInteger ${randomInteger}`);

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
                turn++;
                insertRandomO();
                drawSymbols();
            }
            break;
        case 'cell_2':
            if (obj.cell_2 == '') {
                obj.cell_2 = 'X';
                insertRandomO();
                drawSymbols();
                turn++;
            }
            break;
        case 'cell_3':
            if (obj.cell_3 == '') {
                obj.cell_3 = 'X';
                insertRandomO();
                drawSymbols();
                turn++;
            }
            break;
        case 'cell_4':
            if (obj.cell_4 == '') {
                obj.cell_4 = 'X';
                insertRandomO();
                drawSymbols();
                turn++;
            }
            break;
        case 'cell_5':
            if (obj.cell_5 == '') {
                obj.cell_5 = 'X';
                insertRandomO();
                drawSymbols();
                turn++;
            }
            break;
        case 'cell_6':
            if (obj.cell_6 == '') {
                obj.cell_6 = 'X';
                insertRandomO();
                drawSymbols();
                turn++;
            }
            break;
        case 'cell_7':
            if (obj.cell_7 == '') {
                obj.cell_7 = 'X';
                insertRandomO();
                drawSymbols();
                turn++;
            }
            break;
        case 'cell_8':
            if (obj.cell_8 == '') {
                obj.cell_8 = 'X';
                insertRandomO();
                drawSymbols();
                turn++;
            }
            break;
        case 'cell_9':
            if (obj.cell_9 == '') {
                obj.cell_9 = 'X';
                insertRandomO();
                drawSymbols();
                turn++;
            }
            break;
        default:
            console.log('default');
            break;
    }
}

// const checkGameStatus = () => {
// if (&& && &&) {
//     alert('Game over');
// }
// }


cell_1.onclick = setX;
cell_2.onclick = setX;
cell_3.onclick = setX;

cell_4.onclick = setX;
cell_5.onclick = setX;
cell_6.onclick = setX;

cell_7.onclick = setX;
cell_8.onclick = setX;
cell_9.onclick = setX;
