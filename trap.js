export class Trap {
    
    x = 0;
    y = 0;
    width = 70;
    height = 70;
    speed = 5;
    canvas;
    pencil;
    visible = true;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        this.image = new Image()
        this.image.src = "./images/spike.png";
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

    drawBoundingBox(color = "blue", shrink = 0) {
        this.pencil.strokeStyle = color;
        this.pencil.strokeRect(
            this.x + shrink,
            this.y + shrink,
            this.width - shrink * 2,
            this.height - shrink * 2
        );
    }


    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

}