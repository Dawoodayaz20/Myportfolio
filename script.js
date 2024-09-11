document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar links
    document.querySelectorAll('.nbar a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById(link.getAttribute('href').slice(1));
            targetSection && window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        });
    });

    // Toggle mobile menu
    const navbar = document.querySelector('.nbar');
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        navbar.classList.toggle('open');
    });

    // Scroll reveal animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-hidden'); // Initially hide
        observer.observe(section);
    });

    // Back-to-top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.classList.add('back-to-top');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 500);
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
