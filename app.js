const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

canvasContext.fillRect(0, 0, canvas.width, canvas.height);



// Todo move to a new file.js :>
class Sprite {
    constructor(position) {
        this.position = position;
    }

    draw(){
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(this.position.x, this.position.y, 50 , 150);
    }
}

// Create player & enemy
const player = new Sprite({
    x: 50,
    y: 400
});

const enemy = new Sprite({
    x: 850,
    y: 400
});

player.draw();
enemy.draw();

console.log(player);