document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    let isAnimating = false;

    async function switchSection(targetId) {
        if (isAnimating) return;
        isAnimating = true;

        const currentSection = document.querySelector('.content-section.active');
        const nextSection = document.getElementById(targetId);
        
        if (currentSection.id === targetId) {
            isAnimating = false;
            return;
        }

        currentSection.style.opacity = '0';
        
        setTimeout(() => {
            currentSection.classList.remove('active');
            nextSection.classList.add('active');
            
            setTimeout(() => {
                nextSection.style.opacity = '1';
                isAnimating = false;
            }, 50);
        }, 300);

        document.querySelector('.nav-link.active').classList.remove('active');
        document.querySelector(`[href="#${targetId}"]`).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            switchSection(targetId);
        });
    });
});
