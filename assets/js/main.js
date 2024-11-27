function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
}

function initForms() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên lạc lại với bạn sớm.');
            contactForm.reset();
        });
    }

    const bookingButtons = document.querySelectorAll('.package-card button');
    bookingButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Cảm ơn bạn đã quan tâm! Nhóm của chúng tôi sẽ liên hệ với bạn sớm để hoàn tất đặt chỗ.');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initForms();
});
