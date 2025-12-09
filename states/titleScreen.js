export class TitleScreen {
    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.background = new Image();
        this.background.src = "./images/background.jpg";

        // allows text to be clickable
        this.canvas.addEventListener("click", (event) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            if (this.textBounds) {
                const { x, y, width, height } = this.textBounds;
                if (
                    mouseX >= x - width / 2 &&
                    mouseX <= x + width / 2 &&
                    mouseY >= y - height &&
                    mouseY <= y
                ) {
                    console.log("Start Game clicked!");
                    this.startClicked = true
                }
            }
        });
    }
    
    update() {
        if (this.startClicked) {
            return game;
        } 
        return titleScreen;
    }

    draw() {
        // clear canvas
        this.pencil.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // draw background
        this.pencil.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);

        // draw text
        this.pencil.font = "50px Times New Roman";
        this.pencil.fillStyle = "white";
        this.pencil.textAlign = "center";
        const text = "Start Game";
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.pencil.fillText(text, x, y);

        // save bounding box for click detection
        const metrics = this.pencil.measureText(text);
        const textWidth = metrics.width;
        const textHeight = 50; // approximate from font size
        this.textBounds = { x, y, width: textWidth, height: textHeight };
    }
}