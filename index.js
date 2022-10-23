// Instancing Canvas
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

// Loading Images 
const image = new Image();
image.src = './images/Map.png';

const playerImage = new Image();
playerImage.src = './images/playerDown.png';

const background = new Sprite({
    position: {
        x: -1072,
        y: -710
    },
    image: image
});

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
};

// Frame/Image Update Function
function animate() {
    window.requestAnimationFrame(animate);
    background.draw();
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 2 - playerImage.width / 4 / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height,
    );

    if (keys.w.pressed) background.position.y += 3;
    if (keys.a.pressed) background.position.x += 3;
    if (keys.s.pressed) background.position.y -= 3;
    if (keys.d.pressed) background.position.x -= 3;
}
animate();

// When key is down event
window.addEventListener('keydown', (e) => {
    if (e.key == 'w') {
        keys.w.pressed = true;
    } else if (e.key == 'a') {
        keys.a.pressed = true;
    } else if (e.key == 's') {
        keys.s.pressed = true;
    } else if (e.key == 'd') {
        keys.d.pressed = true;
    }
});

// When key is up event
window.addEventListener('keyup', (e) => {
    if (e.key == 'w') {
        keys.w.pressed = false;
    } else if (e.key == 'a') {
        keys.a.pressed = false;
    } else if (e.key == 's') {
        keys.s.pressed = false;
    } else if (e.key == 'd') {
        keys.d.pressed = false;
    }
});