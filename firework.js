// document.addEventListener('click', function (event) {
//     createFirework(event.clientX, event.clientY);
// });

function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    document.body.appendChild(firework);

    firework.style.left = `${x}px`;
    firework.style.bottom = `0px`;

    setTimeout(() => {
        explode(x, y);
        firework.remove();
    }, 1500);
}

function explode(x, y) {
    for (let i = 0; i < 50; i++) {
        createParticle(x, y);
    }
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    const size = Math.random() * 5 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = randomRedTint();

    const angle = random(0, 360);
    const distance = random(50, 150);
    const positionX =
        x + distance * Math.cos((angle * Math.PI) / 180) - size / 2;
    const positionY =
        y + distance * Math.sin((angle * Math.PI) / 180) - size / 2;

    particle.style.left = `${positionX}px`;
    particle.style.top = `${positionY}px`;

    setTimeout(() => {
        particle.remove();
    }, 3000);
}

function randomRedTint() {
    const r = random(150, 255);
    const g = random(0, 50);
    const b = random(0, 50);
    return `rgb(${r}, ${g}, ${b})`;
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}
