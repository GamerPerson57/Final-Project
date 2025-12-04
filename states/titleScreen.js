export class TitleScreen {
    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
        document.getElementById("startButton").addEventListener("click", () => {
            this.nextState = "goToGame";
        });
    }
    
    update() {
        if (this.nextState == "goToGame") return Game;
    }

    draw(canvas, pencil) {
         // Draw background
            pencil.clearRect(0, 0, canvas.width, canvas.height);
            pencil.drawImage(background, 0, 0, canvas.width, canvas.height);

    }
}