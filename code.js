import { TitleScreen } from "./states/titleScreen.js";
import { Game } from "./states/game.js";
import { GameOver } from "./states/gameOver.js";
import { Toolbox } from "./toolbox.js";
import { Player } from "./player.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

// make some states
let titleScreen = new TitleScreen(canvas, pencil);
let game = new Game(canvas, pencil);
let gameOver = new GameOver(canvas, pencil);
let player = new Player(canvas, pencil);

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
    // Always clear before drawing
    pencil.clearRect(0, 0, canvas.width, canvas.height);

    // Update current state
    let nextState = state.update(canvas, pencil);

    // Transition
    if (nextState) {
        state = nextState;
    }

    if (state == gameOver) {
        
    }

    if (state == titleScreen) {
        titleScreen.draw();
    }

    // If we're in the game, draw and move player
    if (state == game) {
        player.draw();
        player.move(keysPressed);
    }
}

setInterval(gameLoop, 1000 / 60); // 60 FPS
