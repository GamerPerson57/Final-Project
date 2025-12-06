export class Player {
    
    x = 75;
    y = 80;
    width = 75;
    height = 75;
    speed = 5;
    upKey = "w";
    downKey = "s";
    leftKey = "a";
    rightKey = "d"
    canvas;
    pencil;
    

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.image = new Image()
        this.image.src = "./images/knight.png";
    }

    draw() {
        // draw player
        this.pencil.drawImage(
            this.image,
            this.x, 
            this.y, 
            this.width, 
            this.height
        ); // x, y, w, h
    }

    // movement function that detects which key is pressed
    move(keysPressed) {
        if (keysPressed[this.upKey]) this.y -= this.speed;
        if (keysPressed[this.downKey]) this.y += this.speed;
        if (keysPressed[this.leftKey]) this.x -= this.speed;
        if (keysPressed[this.rightKey]) this.x += this.speed;

        // makes sure player can't go out of bounds
        if (this.x < 55) this.x = 55;
        if (this.y < 55) this.y = 55;
        if (this.x + this.width > this.canvas.width) {
            this.x = this.canvas.width - this.width;
        }
        if (this.y + this.height > this.canvas.height) {
            this.y = this.canvas.height - this.height;
        }

        if (this.x > 470) this.x = 470;
        if (this.y > 470) this.y = 470;
        if (this.x + this.width > this.canvas.width) {
            this.x = this.canvas.width - this.width;
        }
        if (this.y + this.height > this.canvas.height) {
            this.y = this.canvas.height - this.height;
        }
    }

}