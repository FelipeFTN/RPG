// Instancing Canvas
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

// Mapping collisions
for (let i = 0; i < collisions.length; i+=70) {
    collisionsMap.push(collisions.slice(i, 70 + i));
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j)=> {
        if (symbol == 1025) {
            boundaries.push(new Boundary({position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y 
            }}));
        }
    });
});

// Loading Images 
const image = new Image();
image.src = './images/Map.png';

const playerImage = new Image();
playerImage.src = './images/playerDown.png';

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y 
    },
    image: image
});

const testBoundary = new Boundary({
    position: {
        x: 400,
        y: 400
    }
});

movables = [background, testBoundary];

// Frame/Image Update Function
function animate() {
    window.requestAnimationFrame(animate);
    background.draw();
    // boundaries.forEach(boundary => {
    //     boundary.draw();
    // });
    testBoundary.draw();
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

    if (keys.w.pressed && lastKey === 'w') {
        movables.forEach(movable => {
            movable.position.y += 3;
        });
    }
    else if (keys.a.pressed && lastKey === 'a') {
        movables.forEach(movable => {
            movable.position.x += 3;
        });
    }
    else if (keys.s.pressed && lastKey === 's') {
        movables.forEach(movable => {
            movable.position.y -= 3;
        });
    }
    else if (keys.d.pressed && lastKey === 'd') {
        movables.forEach(movable => {
            movable.position.x -= 3;
        });
    }
    // if (keys.w.pressed) background.position.y += 3;
    // if (keys.a.pressed) background.position.x += 3;
    // if (keys.s.pressed) background.position.y -= 3;
    // if (keys.d.pressed) background.position.x -= 3;
}
animate();

let lastKey = '';
// When key is down event
window.addEventListener('keydown', (e) => {
    if (e.key == 'w') {
        keys.w.pressed = true;
        lastKey = 'w';
    } else if (e.key == 'a') {
        keys.a.pressed = true;
        lastKey = 'a';
    } else if (e.key == 's') {
        keys.s.pressed = true;
        lastKey = 's';
    } else if (e.key == 'd') {
        keys.d.pressed = true;
        lastKey = 'd';
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