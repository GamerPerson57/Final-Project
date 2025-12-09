export class GameOver {
    update() {
        console.log("In game!")
        this.pencil.font = "20px Georgia";
        this.pencil.fillText("Game", 10, 50);

        return "goToGameOver";
    }
}