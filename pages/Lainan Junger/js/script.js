document.addEventListener('DOMContentLoaded', () => {
    // Animação de contagem para números (Stats)
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const element = entry.target;
                element.classList.add('counted');
                
                const targetValue = element.innerText;
                if (targetValue.includes('K+') || targetValue.includes('M+') || targetValue.includes('%')) {
                    // Para valores com sufixos, apenas aplicamos a animação de fade-in do CSS
                    element.style.animation = 'countUp 1s ease-out forwards';
                }
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));

    // Configuração de índice para animações sequenciais nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.setProperty('--card-index', index + 1);
    });

    // Smooth scroll para links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Compensação do header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de scroll no header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.backgroundColor = 'var(--bg-black)';
            header.style.backdropFilter = 'none';
        }
    });
});