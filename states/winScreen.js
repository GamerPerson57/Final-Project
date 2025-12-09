export class WinScreen{

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.startClicked = false;

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
                    console.log("Restart!");
                    this.startClicked = true
                }
            }
        });
    }
    
    

    draw() {
        this.pencil.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.pencil.fillStyle = "Green"
        this.pencil.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.pencil.font = "50px Times New Roman";
        this.pencil.fillStyle = "Black";
        this.pencil.textAlign = "center";
        this.pencil.textBaseline = "middle";

        const centerX = this.canvas.width / 2;   // 300
        const centerY = this.canvas.height / 2;  // 300
        const lineSpacing = 80; // space between lines

        // Draws "You Win" Text
        this.pencil.fillText("You Win!", centerX, centerY - lineSpacing);

        // Draws "Restart" Text
        const text = "Restart?";
        this.pencil.fillText(text, centerX, centerY + lineSpacing);

        // Save bounding box for Restart only
        const metrics = this.pencil.measureText(text);
        const textWidth = metrics.width;
        const textHeight = 50; // approximate from font size
        this.textBounds = { x: centerX, y: centerY + lineSpacing, width: textWidth, height: textHeight };
    }
}