// hotel3.js - Mobile First Version

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-links');
    const navbar = document.querySelector('#mainNav');

    // 1. Manejo del Menú Mobile
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        // 2. Cerrar menú al hacer click en un link (Para móviles)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                // Solo cerrar en móviles (cuando el toggle está visible)
                if (window.getComputedStyle(menuToggle).display !== 'none') {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('is-active');
                }
            });
        });
    }

    // 3. Cambio de estilo de Navbar al hacer Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Animación de "Revelar" al hacer scroll
    const reveals = document.querySelectorAll('.room-card, .section-title, .dining-content');
    
    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('visible');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Ejecutar una vez al cargar por si ya hay elementos visibles
    revealOnScroll();

    // 5. Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces que solo son "#"
            if (href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Calcular offset para compensar navbar fijo en desktop
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});