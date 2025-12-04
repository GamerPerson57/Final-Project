export class Player {
    
    x = 75;
    y = 75;
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

        // this.sprite = new Image()
        // this.sprite.src = "";
    }

    draw() {
        // draw player
        this.pencil.fillStyle = 'black'; // temporary until sprite is added
        this.pencil.fillRect(
            this.x, 
            this.y, 
            this.width, 
            this.height
        ); // x, y, w, h
    }

    // movement function that detects which key is pressed
    move(keysPressed) {
        if(keysPressed[this.upKey]) {
            this.y -= this.speed;
            // this.sprite = zombieBack;
        } else if(keysPressed[this.downKey]) {
            this.y += this.speed;
            // this.sprite = zombieFront;
        } else if(keysPressed[this.leftKey]) {
            this.x -= this.speed;
            // this.sprite = zombieLeft;
        } else if(keysPressed[this.rightKey]) {
            this.x += this.speed;
            // this.sprite = zombieRight;
        } 
    }


}