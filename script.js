const anakin = document.querySelector(".anakin");
const ahsoka = document.querySelector(".ahsoka");
const obiwan = document.querySelector(".obiwan");
const yoda = document.querySelector(".yoda");

const vader = document.querySelector(".vader");
const palpatine = document.querySelector(".palpatine");
const maul = document.querySelector(".maul > img");
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

startBtn.onclick = startGame;