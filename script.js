document.getElementById('anniversaryTitle').addEventListener('click', () => {
    createConfetti();
});

function createConfetti() {
    const colors = ['#f00', '#0f0', '#00f']; // You can add more colors if needed
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
