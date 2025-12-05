export class Game {
    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.nextState = null;

        this.background2 = new Image();
        this.background2.src = "./images/background2.jpg";

        this.door = new Image();
        this.door.src = "./images/door.png";
    }
    
    update() {
        if (this.nextState == "gameOver") return gameOver;
    }

    draw() {
        // clear canvas
        this.pencil.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // draw background
        this.pencil.drawImage(this.background2, 0, 0, this.canvas.width, this.canvas.height);

        // draw door
        this.pencil.drawImage(this.door, 200, -25, 200, 200);

        
    }
}