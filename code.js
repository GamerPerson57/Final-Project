import { TitleScreen } from "./states/titleScreen.js";
import { Game } from "./states/game.js";
import { GameOver } from "./states/gameOver.js";
import { WinScreen} from "./states/winScreen.js";

import { Player } from "./player.js";
import { Key } from "./key.js";
import { Trap } from "./trap.js";
import { Door } from "./door.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

// make some states
let titleScreen = new TitleScreen(canvas, pencil);
let game = new Game(canvas, pencil);
let gameOver = new GameOver(canvas, pencil);
let winScreen = new WinScreen(canvas, pencil);


let player = new Player(canvas, pencil);
let key = new Key(canvas, pencil);
let door = new Door(canvas, pencil);

const trapPositions = [
    { x: 185, y: 230 },
    { x: 425, y: 235 },
    { x: 145, y: 365 },
    { x: 65,  y: 165 },
    { x: 344, y: 425 },
    { x: 65,  y: 300 },
    { x: 300, y: 165 },
    { x: 385, y: 165 },
    { x: 345, y: 300 },
    { x: 185, y: 105 }
];

let traps = trapPositions.map(pos => {
  let t = new Trap(canvas, pencil);
  t.x = pos.x;
  t.y = pos.y;
  return t;
});

let state = titleScreen; // when finished change this back to titleScreen

// tracks keys pressed
let keysPressed = {};
window.addEventListener("keydown", function(e) {
    keysPressed[e.key] = true;
});
window.addEventListener("keyup", function(e) {
    keysPressed[e.key] = false;
});


function resetGame() {
    // Reset player position
    player.x = 50;
    player.y = 50;

    // Reset key and door
    key.show();
    door.hide();

    keysPressed = {};

}

function updateState() {
     if (state == titleScreen) {
        if (titleScreen.startClicked == true) {
            state = game;
            resetGame();
            titleScreen.startClicked = false; // reset flag
            winScreen.restartClicked = false; // reset flag
            gameOver.restartClicked = false; // reset flag
        }
    }

    if (state == game) {
        
        // Collision check with any trap
        if (traps.some(trap => isColliding(player, trap, 14))) {
            state = gameOver;
        }

        if (isColliding(player, door) && door.visible) {
            state = winScreen;
        }

        if (isColliding(player, key)) {
            console.log("key");
            key.hide();
            door.show();
        }
    }

    if (state == gameOver && gameOver.restartClicked) {
        resetGame();
        state = titleScreen;
        titleScreen.startClicked = false; // reset flag
        winScreen.restartClicked = false; // reset flag
        gameOver.restartClicked = false; // reset flag
    }

    if (state == winScreen && winScreen.restartClicked) {
        resetGame();
        state = titleScreen;
        titleScreen.startClicked = false; // reset flag
        winScreen.restartClicked = false; // reset flag
        gameOver.restartClicked = false; // reset flag
    }
}

function isColliding(a, b, padding = 24) {
  return (
    a.x + padding < b.x + b.width - padding &&
    a.x + a.width - padding > b.x + padding &&
    a.y + padding < b.y + b.height - padding &&
    a.y + a.height - padding > b.y + padding
  );
}

function gameLoop() {

    // erase canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);

    updateState();

    if (state == titleScreen) {
        titleScreen.draw();
    }

    if (state == game) {
        game.draw();

        traps.forEach(trap => trap.draw());

        door.draw();
        player.draw();
        player.move(keysPressed);
        key.draw();
    }

    if (state == gameOver) {
        gameOver.draw();
    }

    if (state == winScreen) {
        winScreen.draw();
        
    }

}

setInterval(gameLoop, 1000 / 60); // 60 FPS