// hotel3.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('#mainNav');

    // 1. Manejo del Menú Mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animación de la hamburguesa
        menuToggle.classList.toggle('is-active');
        
        // Efecto visual en las barras
        const bars = document.querySelectorAll('.bar');
        if(navLinks.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars.forEach(bar => bar.style.transform = 'none');
            bars.forEach(bar => bar.style.opacity = '1');
        }
    });

    // 2. Cambio de estilo de Navbar al hacer Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Animación de "Revelar" al hacer scroll
    // Esto hace que las secciones aparezcan suavemente mientras el usuario baja
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

    // 4. Cerrar menú al hacer click en un link (Para móviles)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            // Reset de hamburguesa
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.style.transform = 'none');
            bars.forEach(bar => bar.style.opacity = '1');
        });
    });
});