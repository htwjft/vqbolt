// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Toggle button icon
        const icon = mobileMenuButton.querySelector('svg');
        if (mobileMenu.classList.contains('hidden')) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        } else {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
        }
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('svg');
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        });
    });
}

// Active nav link highlighting based on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a, #mobile-menu a');

function highlightNavLink() {
    let current = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.replace('#', '') === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);
highlightNavLink();

// Button interactive effects (press down)
document.querySelectorAll('a, button').forEach(btn => {
    btn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0px) scale(0.98)';
    });
    btn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px) scale(1)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0px) scale(1)';
    });
});