export class Key {
    
    x = 260;
    y = 275;
    width = 75;
    height = 75;
    speed = 5;
    canvas;
    pencil;
    visible = false;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.image = new Image()
        this.image.src = "./images/key.png";
    }

    draw() {
        if (!this.visible) return; //skips drawing if hidden

        // draw player
        this.pencil.drawImage(
            this.image,
            this.x, 
            this.y, 
            this.width, 
            this.height
        ); // x, y, w, h
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

}