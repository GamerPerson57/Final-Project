export class Game {
    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.nextState = null;

        this.background2 = new Image();
        this.background2.src = "./images/background2.jpg";
    }
    
    update() {
        if (this.nextState == "gameOver") return gameOver;
    }

    draw() {
        // clear canvas
        this.pencil.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // draw background
        this.pencil.drawImage(this.background2, 0, 0, this.canvas.width, this.canvas.height);

        // this.pencil.fillStyle = "red";

        // const squareSize = 350;
        // const x = (this.canvas.width / 2) - (squareSize / 2);
        // const y = (this.canvas.height / 2) - (squareSize / 2);

        // this.pencil.fillRect(x, y, squareSize, squareSize);
        
    }
}