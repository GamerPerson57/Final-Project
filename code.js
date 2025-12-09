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

let trap1 = new Trap(canvas, pencil);
let trap2 = new Trap(canvas, pencil);
let trap3 = new Trap(canvas, pencil);
let trap4 = new Trap(canvas, pencil);
let trap5 = new Trap(canvas, pencil);
let trap6 = new Trap(canvas, pencil);
let trap7 = new Trap(canvas, pencil);
let trap8 = new Trap(canvas, pencil);
let trap9 = new Trap(canvas, pencil);
let trap10 = new Trap(canvas, pencil);

let state = titleScreen; // when finished change this back to titleScreen

// tracks keys pressed
let keysPressed = {};
window.addEventListener("keydown", function(e) {
    keysPressed[e.key] = true;
});
window.addEventListener("keyup", function(e) {
    keysPressed[e.key] = false;
});

function isColliding(a, b, padding = 16) {
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


    if (state == gameOver) {
        gameOver.draw();
    }

    if (state == winScreen) {
        winScreen.draw();
        
    }

    if (state == titleScreen) {
        titleScreen.draw();
    }

    if (state == game) {
        game.draw();

        // Trap 1 Location
        trap1.x = 185;
        trap1.y = 230;
        trap1.draw();

        // Trap 2 Location
        trap2.x = 425;
        trap2.y = 235;
        trap2.draw();

        // Trap 3 Location
        trap3.x = 145;
        trap3.y = 365;
        trap3.draw();

        // Trap 4 Location
        trap4.x = 65;
        trap4.y = 165;
        trap4.draw();

        // Trap 5 Location
        trap5.x = 344;
        trap5.y = 425;
        trap5.draw();

        // Trap 6 Location
        trap6.x = 65;
        trap6.y = 300;
        trap6.draw();

        // Trap 7 Location
        trap7.x = 300;
        trap7.y = 165;
        trap7.draw();

        // Trap 8 Location
        trap8.x = 385;
        trap8.y = 165;
        trap8.draw();

        // Trap 9 Location
        trap9.x = 345;
        trap9.y = 300;
        trap9.draw();

        // Trap 10 Location
        trap10.x = 185;
        trap10.y = 105;
        trap10.draw();

        // draw player, key, and door(starts out invisble)
        door.draw();
        player.draw();
        player.move(keysPressed);
        key.draw();

        if (
            isColliding(player, trap1, 14) ||
            isColliding(player, trap2, 14) ||
            isColliding(player, trap3, 14) ||
            isColliding(player, trap4, 14) ||
            isColliding(player, trap5, 14) ||
            isColliding(player, trap6, 14) ||
            isColliding(player, trap7, 14) ||
            isColliding(player, trap8, 14) ||
            isColliding(player, trap9, 14) ||
            isColliding(player, trap10, 14) 
        ) {
            state = gameOver;
        }



        
        if ((player.x == 260 && player.y == 55) && (door.visible == true)) { // this will log door when the player interacts with the door
            state = winScreen;
        } 

        if (
            isColliding(player, key)
        ) {
            console.log("key");
            key.hide();
            door.show();
        }
    }
}

setInterval(gameLoop, 1000 / 60); // 60 FPS