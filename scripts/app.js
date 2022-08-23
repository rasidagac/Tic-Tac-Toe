const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePLayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElemnt = document.getElementById("active-player-name");
const gameOverElment = document.getElementById("game-over");

const editPlayer1ButtonElement = document.getElementById("edit-player-1-btn");
const editPlayer2ButtonElement = document.getElementById("edit-player-2-btn");
const cancelConfigButtonElement = document.getElementById("cancel-config-btn");
const startNewGameElement = document.getElementById("start-game-btn");
/* const gameFieldElements = document.querySelectorAll("#game-board li"); */
const gameBoardElement = document.getElementById("game-board");

editPlayer1ButtonElement.addEventListener("click", openPlayerConfig);
editPlayer2ButtonElement.addEventListener("click", openPlayerConfig);
cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);

startNewGameElement.addEventListener("click", startNewGame);

/* for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener("click",selectGameField);
} */
gameBoardElement.addEventListener("click", selectGameField);
