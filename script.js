// Animations on scroll
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.5s ease';
        }, 200);
    });
});
