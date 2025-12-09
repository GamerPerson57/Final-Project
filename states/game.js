export class Game {
    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.nextState = null;

        this.background2 = new Image();
        this.background2.src = "./images/background2.jpg";

    }
    


    draw() {
        // clear canvas
        this.pencil.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // draw background
        this.pencil.drawImage(this.background2, 0, 0, this.canvas.width, this.canvas.height);

        
    }
}