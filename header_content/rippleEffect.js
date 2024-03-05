function createRipple() {
    const waterPool = document.getElementById('waterPool');
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    const size = Math.random() * 100 + 50; // Ripple size between 50px and 150px
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${Math.random() * (waterPool.offsetWidth - size)}px`;
    ripple.style.top = `${Math.random() * (waterPool.offsetHeight - size)}px`;

    waterPool.appendChild(ripple);

    // Remove ripple after animation ends
    setTimeout(() => {
        ripple.remove();
    }, 2000); // Match the animation duration
}

// Create a new ripple every 500 milliseconds
setInterval(createRipple, 700);