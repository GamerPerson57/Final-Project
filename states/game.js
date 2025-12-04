export class Game {
    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
    }
    
    update() {
        if (this.nextState == "gameOver") return Game;
    }
}