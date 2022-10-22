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
}
animate();

// When key is down event
window.addEventListener('keydown', (e) => {
    if (e.key == 'w') {
        console.log('walk');
    } else if (e.key == 'a') {
        console.log('walk');
    } else if (e.key == 's') {
        console.log('walk');
    } else if (e.key == 'd') {
        console.log('walk');
    }
});