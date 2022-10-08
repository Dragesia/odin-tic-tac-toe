const anakin = document.querySelector(".anakin");
const ahsoka = document.querySelector(".ahsoka");
const obiwan = document.querySelector(".obiwan");
const yoda = document.querySelector(".yoda");

const vader = document.querySelector(".vader");
const palpatine = document.querySelector(".palpatine");
const maul = document.querySelector(".maul");
const dooku = document.querySelector(".dooku");

let chosenJedi = "";
let chosenSith = "";

function chooseJedi(e) {
    let clickedAvatar = e.target;

    chosenJedi = clickedAvatar.getAttribute("alt");

    changeSelected();
}

function chooseSith(e) {
    let clickedAvatar = e.target;

    chosenSith = clickedAvatar.getAttribute("alt");

    changeSelected();
}

function changeSelected() {
    if (chosenJedi == "anakin") {
        anakin.style = "background-color: rgb(173, 131, 24);";
        ahsoka.style = "";
        obiwan.style = "";
        yoda.style = "";
    } else if (chosenJedi == "ahsoka") {
        ahsoka.style = "background-color: rgb(173, 131, 24);";
        anakin.style = "";
        obiwan.style = "";
        yoda.style = "";
    } else if (chosenJedi == "obiwan") {
        obiwan.style = "background-color: rgb(173, 131, 24);";
        anakin.style = "";
        ahsoka.style = "";
        yoda.style = "";
    } else if (chosenJedi == "yoda") {
        yoda.style = "background-color: rgb(173, 131, 24);";
        anakin.style = "";
        obiwan.style = "";
        ahsoka.style = "";
    }

    if (chosenSith == "vader") {
        vader.style = "background-color: rgb(173, 131, 24);";
        palpatine.style = "";
        maul.style = "";
        dooku.style = "";
    } else if (chosenSith == "maul") {
        maul.style = "background-color: rgb(173, 131, 24);";
        palpatine.style = "";
        vader.style = "";
        dooku.style = "";
    } else if (chosenSith == "palpatine") {
        palpatine.style = "background-color: rgb(173, 131, 24);";
        vader.style = "";
        maul.style = "";
        dooku.style = "";
    } else if (chosenSith == "dooku") {
        dooku.style = "background-color: rgb(173, 131, 24);";
        palpatine.style = "";
        maul.style = "";
        vader.style = "";
    }
}

const jedi = document.querySelectorAll(".jedi > .photo-div");
jedi.forEach((jediDiv) => {
    jediDiv.onclick = chooseJedi;
});

const sith = document.querySelectorAll(".sith > .photo-div");
sith.forEach((sithDiv) => {
    sithDiv.onclick = chooseSith;
});

const selectScreen = document.querySelector(".character-selector");
const gameScreen = document.querySelector(".game");
const startBtn = document.querySelector(".start-game");

function startGame() {
    if (!chosenJedi || !chosenSith) return;

    selectScreen.style = "display: none;";
    gameScreen.style = "display: flex;"
}

let gameBoard = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let gameTour = 2;

startBtn.onclick = startGame;

function playRound(e) {
    if (!e.target.classList.contains("gamebox")) return;

    let jediSign = document.querySelector(`.${chosenJedi} > img`).cloneNode();
    let sithSign = document.querySelector(`.${chosenSith} > img`).cloneNode();
    jediSign.classList.add("sign");
    sithSign.classList.add("sign");

    if (gameTour % 2 == 0) {
        gameBoard[e.target.getAttribute("data-index")] = "jedi";
        e.target.appendChild(jediSign);
    } else {
        gameBoard[e.target.getAttribute("data-index")] = "sith";
        e.target.appendChild(sithSign);
    }

    checkWinner();

    gameTour++;
}

const gameboxes = document.querySelectorAll(".gamebox");

gameboxes.forEach((gamebox) => {
    gamebox.addEventListener('click', playRound);
});

function checkWinner() {
    const winnerWays = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const allEqual = arr => arr.every( v => v === arr[0] );

    for (let i=0; i<8; i++) {
        console.log(i);
        let temp = [];
        for (let j=0; j<3; j++) {
            console.log(j);
            temp.push(gameBoard[winnerWays[i][j]]);
        }
        if (allEqual(temp)) {
            const winner = temp[0];
            finishGame();
            return;
        }
    }
}

function finishGame() {
    console.log("oyun bitti hacı");
}