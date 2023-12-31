const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

canvasContext.fillRect(0, 0, canvas.width, canvas.height);

// Todo move to a new file.js :>
const gravity = 0.2;
class Sprite {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
    }

    draw(){
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(this.position.x, this.position.y, 50 , this.height);
    }

    update(){
        this.draw();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0;
        }else{
            this.velocity.y += gravity;
        }
    }
}

// Create player & enemy
const player = new Sprite({
    position:{
        x: 50,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
});

const enemy = new Sprite({
    position:{
        x: 850,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
});


function animate() {
    window.requestAnimationFrame(animate);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    player.update();
    enemy.update();
    
}

animate()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'w':
            player.velocity.y = -5;
        break;
        case 'a':
            player.velocity.x = -1;
        break;
        case 's':
            player.velocity.x = 0;
        break;
        case 'd':
            player.velocity.x = 1;
        break;
    }
});

window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'w':
            player.velocity.y = -5;
        break;
        case 'a':
            player.velocity.x = -1;
        break;
        case 's':
            player.velocity.x = 0;
        break;
        case 'd':
            player.velocity.x = 1;
        break;
    }
});