function loadFragment(elementId, fragmentUrl) {
    fetch(fragmentUrl)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .then(() => {
            if (elementId === 'header') {
                const menuToggle = document.getElementById('menuToggle');
                const navLinks = document.getElementById('navLinks');
                if (menuToggle && navLinks) {
                    menuToggle.addEventListener('click', () => {
                        navLinks.classList.toggle('active');
                    });
                } else {
                    console.error('Menu toggle or nav links not found');
                }
            }
        })
        .catch(error => console.error('Error loading fragment:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadFragment('header', 'header.html');
    loadFragment('footer', 'footer.html');

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
        });
    }

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'flex';
            setTimeout(() => {
                window.location.href = event.target.href;
            }, 1000);
        });
    });
});


