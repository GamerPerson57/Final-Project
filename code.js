import { TitleScreen } from "./states/titleScreen.js";
import { Game } from "./states/game.js";
import { GameOver } from "./states/gameOver.js";
import { Toolbox } from "./toolbox.js";
import { Player } from "player.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let toolbox = new Toolbox();

// make some states
let titleScreen = new TitleScreen();
let game = new Game();
let gameOver = GameOver();

let state = titleScreen;

// tracks keys pressed
let keysPressed = {};
window.addEventListener("keydown", function(e) {
    keysPressed[e.key] = true;
});
window.addEventListener("keyup", function(e) {
    keysPressed[e.key] = false;
});

function gameLoop() {
    let result = state.update();
    if (result == "goToGame") state = game;
    if (result == "goToGameOver") state = gameOver;
    if (result == "goToTitleScreen") state = titleScreen;
}

setInterval(gameLoop, 1000 / 60); // 60 FPS
