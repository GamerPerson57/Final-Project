import { TitleScreen } from "./states/titleScreen.js";
import { Game } from "./states/game.js";
import { GameOver } from "./states/gameOver.js";
import { Toolbox } from "./toolbox.js";
import { Player } from "./player.js";
import { Key } from "./key.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

// make some states
let titleScreen = new TitleScreen(canvas, pencil);
let game = new Game(canvas, pencil);
let gameOver = new GameOver(canvas, pencil);


let player = new Player(canvas, pencil);
let key = new Key(canvas, pencil);

let state = game; // when finished change this back to titleScreen

// tracks keys pressed
let keysPressed = {};
window.addEventListener("keydown", function(e) {
    keysPressed[e.key] = true;
});
window.addEventListener("keyup", function(e) {
    keysPressed[e.key] = false;
});

function gameLoop() {

    // erase canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);


    if (state == gameOver) {
        
    }

    if (state == titleScreen) {
        titleScreen.draw();
        titleScreen.update();
    }

    if (state == game) {
        game.draw();
        player.draw();
        player.move(keysPressed);
        player.interact(keysPressed);
        key.draw();
    }
}

setInterval(gameLoop, 1000 / 60); // 60 FPS
