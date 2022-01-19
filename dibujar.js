window.addEventListener('load', generateBoard);

function generateBoard() {
    const tablesPlace = document.getElementById('zonadibujo');

    let table = document.createElement('table');
    let board = document.createElement('tbody');

    for (let i = 0; i < 30; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 30; j++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        board.appendChild(row);
    }

    table.appendChild(board);
    tablesPlace.appendChild(table);
    table.setAttribute('border', '5');



    //Después de crear la tabla, añadir addEventListeners de las celdas:

    const drawZone = document.getElementById('zonadibujo');
    const boardCells = drawZone.getElementsByTagName('td');

    for (let index = 0; index < boardCells.length; index++) {
        boardCells[index].addEventListener('click', paintCell);
        boardCells[index].addEventListener('click', clickCounter);
    }

    let theClickCounter = 0

    function clickCounter() {
        if (theClickCounter === 0 || theClickCounter === 1) {
            theClickCounter++;
        } else {
            theClickCounter = 1;
        }
        hoverPainting();
    }

    function hoverPainting() {
        console.log(theClickCounter);
        if (theClickCounter === 1) {
            for (let index = 0; index < boardCells.length; index++) {
                boardCells[index].addEventListener('mouseenter', paintCell);
            }
        } else if (theClickCounter === 2) {
            for (let index = 0; index < boardCells.length; index++) {
                boardCells[index].removeEventListener('mouseenter', paintCell);
            }
        }
    }

    

    function paintCell(e) {
        e.target.className = "";

        if (theColor === 'yellow') {
            e.target.setAttribute('class', 'yellow');
        } else if (theColor === 'green') {
            e.target.setAttribute('class', 'green');
        } else if (theColor === 'black') {
            e.target.setAttribute('class', 'black');
        } else if (theColor === 'red') {
            e.target.setAttribute('class', 'red');
        } else if (theColor === 'blue') {
            e.target.setAttribute('class', 'blue');
        } else if (theColor === 'white') {
            e.target.setAttribute('class', 'white');
        }  
    }

}





const palette = document.getElementById('paleta');
const colors = palette.getElementsByTagName('td');
let theColor = 'yellow';

for (let index = 0; index < colors.length; index++) {
    colors[index].addEventListener('click', chooseColor);
}

function chooseColor(e) {

    for (let index = 0; index < colors.length; index++) {
        colors[index].classList.remove('seleccionado');
    }

    if(e.target.className === 'color1') {
        theColor = 'yellow';
        e.target.classList.add('seleccionado');
        document.getElementById('pincel').innerHTML = 'PINCEL ACTIVADO';
    } else if (e.target.className === 'color2') {
        theColor = 'green';
        e.target.classList.add('seleccionado');
        document.getElementById('pincel').innerHTML = 'PINCEL ACTIVADO';
    } else if (e.target.className === 'color3') {
        theColor = 'black';
        e.target.classList.add('seleccionado');
        document.getElementById('pincel').innerHTML = 'PINCEL ACTIVADO';
    } else if (e.target.className === 'color4') {
        theColor = 'red';
        e.target.classList.add('seleccionado');
        document.getElementById('pincel').innerHTML = 'PINCEL ACTIVADO';
    } else if (e.target.className === 'color5') {
        theColor = 'blue';
        e.target.classList.add('seleccionado');
        document.getElementById('pincel').innerHTML = 'PINCEL ACTIVADO';
    } else if (e.target.className === 'color6') {
        theColor = 'white';
        e.target.classList.add('seleccionado');
        document.getElementById('pincel').innerHTML = 'PINCEL DESACTIVADO';
    }
}


