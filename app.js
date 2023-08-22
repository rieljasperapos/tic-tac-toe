const row1 = document.getElementsByName("row1");
const row2 = document.getElementsByName("row2");
const row3 = document.getElementsByName("row3");
const row = document.getElementsByName('rows');

// To start the game
// Initially the page will only have a Play button
// Once clicked the board will be shown
const board = document.getElementById('ui');
board.style.display = 'none';

const playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', game);

let gameWon = false;
let count = 0;

function game() {
    board.style.display = '';
    playBtn.style.display = 'none';
}

function vsComputer() {
    let randoms = [];
    let randomPicker = Math.floor(Math.random() * 8);
    randoms.forEach(element => {
        if (element === randomPicker) {
            randomPicker = Math.floor(Math.random() * 8);
        }
    })
    randoms.push(randomPicker);
    // console.log(`randomPicker: ${randomPicker}`);

    if (gameWon === false) {
        if (row[randomPicker].textContent === '') {
            row[randomPicker].textContent = 'O';
            // console.log(row[randomPicker].textContent);
            row[randomPicker].style.textAlign = 'center';
            row[randomPicker].value = row[randomPicker].textContent; 
    
            if (checkWin(row[randomPicker].value)) {
                let win = document.createElement('h2');
                win.innerHTML = `${row[randomPicker].value} WIN`;
                win.style.textAlign = 'center';
                document.body.appendChild(win);
                console.log(win);
    
                gameWon = true;
            }
        } else {
            if (gameWon === false) {
                vsComputer();
            }
        }
    }
    
}

function checkWin(element) {
    const win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for (const combos of win) {
        const [a, b, c] = combos;
        if (row[a].textContent === element && row[b].textContent === element && row[c].textContent === element) {
            return true;
        }
    }
    return false;
}

let start = 'X';
row.forEach(element => {
    element.addEventListener('click', function() {
        if (gameWon === false) {
            console.log(gameWon);
            // console.log(element);
            if (element.textContent === '') {
                element.value = start;
                // if (start === 'X') {
                //     start = 'O';
                // } else {
                //     start = 'X';
                // }
                element.style.textAlign = "center";
                element.textContent = element.value;
            
                if (checkWin(element.value)) {
                    let h = document.createElement('h2');
                    h.innerHTML = `${element.value} WIN`;
                    h.style.textAlign = 'center';
                    document.body.appendChild(h);
                    console.log(h);

                    gameWon = true;
                } else if (checkTie()) {
                    let tieMessage = document.createElement('h2');
                    tieMessage.innerHTML = "It's a TIE";
                    tieMessage.style.textAlign = 'center';
                    document.body.appendChild(tieMessage);
                } else {
                    vsComputer();
                }
            }
        }
    })
})

function checkTie() {
    let isTie = true;
    for (const element of row) {
        if (element.textContent === '') {
            isTie = false;
            break;
        }
    }
    return isTie;
}


// let start = 'X';
// row.forEach(element => {
//     element.addEventListener('click', function() {
//         console.log(element);
//         if (element.textContent === '') {
//             element.value = start;
//             if (start === 'X') {
//                 start = 'O';
//             } else {
//                 start = 'X';
//             }
//             element.style.textAlign = "center";
//             console.log(element.value);
//             element.textContent = element.value;
//             console.log(`Text Content: ${element.textContent}`);
//         }
//         if (row[0].textContent === 'X' && row[1].textContent === 'X' && row[2].textContent === 'X' || row[0].textContent === 'O' && row[1].textContent === 'O' && row[2].textContent === 'O') {
//             let h = document.createElement('h2');
//             h.innerHTML = 'YOU WIN';
//             h.style.textAlign = "center";
//             document.body.appendChild(h);
//         } else if (row[0].textContent === 'X' && row[4].textContent === 'X' && row[8].textContent === 'X' || row[0].textContent === 'O' && row[4].textContent === 'O' && row[8].textContent === 'O') {
//             let h = document.createElement('h2');
//             h.innerHTML = 'YOU WIN';
//             h.style.textAlign = 'center';
//             document.body.appendChild(h);
//         } else if (row[2].textContent === 'X' && row[6].textContent === 'X' && row[4].textContent === 'X' || row[2].textContent === 'O' && row[4].textContent === 'O' && row[6].textContent === 'O') {
//             let h = document.createElement('h2');
//             h.innerHTML = 'YOU WIN';
//             h.style.textAlign = 'center';
//             document.body.appendChild(h);
//         } else if (row[3].textContent === 'X' && row[4].textContent === 'X' && row[5].textContent === 'X' || row[3].textContent === 'O' && row[4].textContent === 'O' && row[5].textContent === 'O') {
//             let h = document.createElement('h2');
//             h.innerHTML = 'YOU WIN';
//             h.style.textAlign = 'center';
//             document.body.appendChild(h);
//         } else if (row[6].textContent === 'X' && row[7].textContent === 'X' && row[8].textContent === 'X' || row[6].textContent === 'O' && row[7].textContent === 'O' && row[8].textContent === 'O') {
//             let h = document.createElement('h2');
//             h.innerHTML = 'YOU WIN';
//             h.style.textAlign = 'center';
//             document.body.appendChild(h);
//         } else if (row[0].textContent === 'X' && row[3].textContent === 'X' && row[6].textContent === 'X' || row[0].textContent === 'O' && row[3].textContent === 'O' && row[6].textContent === 'O') {
//             let h = document.createElement('h2');
//             h.innerHTML = 'YOU WIN';
//             h.style.textAlign = 'center';
//             document.body.appendChild(h);

//         } else if (row[1].textContent === 'X' && row[4].textContent === 'X' && row[7].textContent === 'X' || row[1].textContent === 'O' && row[4].textContent === 'O' && row[7].textContent === 'O') {
//             let h = document.createElement('h2');
//             h.innerHTML = 'YOU WIN';
//             h.style.textAlign = 'center';
//             document.body.appendChild(h);

//         } else if (row[2].textContent === 'X' && row[5].textContent === 'X' && row[8].textContent === 'X' || row[2].textContent === 'O' && row[5].textContent === 'O' && row[8].textContent === 'O') {
//             let h = document.createElement('h2');
//             h.innerHTML = 'YOU WIN';
//             h.style.textAlign = 'center';
//             document.body.appendChild(h);
//         }
//     })
// })




// Fix to have alternate inputs X and O
// row1.forEach(element => {
//     element.addEventListener('click', function() {
//         if (element.textContent === '') {
//             element.value = start;
//             if (start === 'X') {
//                 start = 'O';
//             } else {
//                 start = 'X';
//             }
//             element.style.textAlign = "center";
//             console.log(element.value);
//             element.textContent = element.value;
//             console.log(`Text Content: ${element.textContent}`);
//             if (row1[0].textContent === 'X' && row1[1].textContent === 'X' && row1[2].textContent === 'X') {
//                 let h = document.createElement('h1');
//                 h.innerHTML = "YOU WIN";
//                 document.body.appendChild(h);
//             }
//         }
//     })
// })

// row2.forEach(element => {
//     element.addEventListener('click', function() {
//         if (element.textContent === '') {
//             element.value = start;
//             if (start === 'X') {
//                 start = 'O';
//             } else {
//                 start = 'X';
//             }
//             element.style.textAlign = "center";
//             console.log(element.value);
//             element.textContent = element.value;
//             console.log(`Text Content: ${element.textContent}`);
//         }
//     })
// })

// row3.forEach(element => {
//     element.addEventListener('click', function() {
//         if (element.textContent === '') {
//             element.value = start;
//             if (start === 'X') {
//                 start = 'O';
//             } else {
//                 start = 'X';
//             }
//             element.style.textAlign = "center";
//             console.log(element.value);
//             element.textContent = element.value;
//             console.log(`Text Content: ${element.textContent}`);
//         }
//     })
// })


// if (row1[0].textContent === 'X' && row1[1].textContent === 'X' && row1[2].textContent === 'X') {
//     let h = document.createElement("h1");
//     h.innerHTML = "YOU WIN";
//     document.body.appendChild(h);
//     console.log(h);
// }














