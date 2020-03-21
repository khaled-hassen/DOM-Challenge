const diceFace = [
    "fas fa-dice-one dice",
    "fas fa-dice-two dice",
    "fas fa-dice-three dice",
    "fas fa-dice-four dice",
    "fas fa-dice-five dice",
    "fas fa-dice-six dice"
];

let gameStatus = document.querySelector(".game-status");

let firstFace = Math.floor(Math.random() * 6); // the first player dice number (face)
let secondFace = Math.floor(Math.random() * 6); // the second player dice number (face)
let firstDice = document.querySelector("#player1 .dice"); // the first player dice
let secondDice = document.querySelector("#player2 .dice"); // the second player dice

firstDice.setAttribute("class", diceFace[firstFace]);
secondDice.setAttribute("class", diceFace[secondFace]);

const flags = gameStatus.querySelectorAll(".flag");
let winMsg = "";
if (firstFace > secondFace)
{
    winMsg = "Player 1 Wins!"
    flags[0].style.display = "block-inline";
    flags[1].style.display = "none";
}
else if (firstFace < secondFace)
{
    winMsg = "Player 2 Wins!"
    flags[0].style.display = "none";
    flags[1].style.display = "block-inline";
}
else 
{
    winMsg = "Draw!";
    flags[0].style.display = "none";
    flags[1].style.display = "none";
}

gameStatus.querySelector(".winner").textContent = winMsg;