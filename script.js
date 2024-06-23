document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.background-video');
    video.play().catch(function(error) {
        console.log('Autoplay was prevented:', error);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const lines = document.querySelectorAll('.burger .line');

    const sectionColors = {
        home: 'line-aqua',
        about: 'line-blue',
        services: 'line-green',
        reviews: 'line-red',
        mission: 'line-yellow',
        contact: 'line-gray'
    };

    // Offset value in pixels (adjust this to delay the color change)
    const offset = 300; // Change this value to adjust the delay

    document.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= sectionTop + offset && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        if (currentSection) {
            const newColorClass = sectionColors[currentSection];

            // Remove existing color classes from lines
            lines.forEach(line => {
                line.className = 'line'; // Reset to base class
                line.classList.add(newColorClass); // Add new color class
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    burger.addEventListener('click', (event) => {
        mobileNav.classList.toggle('show');
        body.classList.toggle('no-scroll'); // Toggle no-scroll on body
        event.stopPropagation(); // Prevent the click from bubbling up to the document
    });

    document.addEventListener('click', (event) => {
        if (!mobileNav.contains(event.target) && !burger.contains(event.target)) {
            mobileNav.classList.remove('show');
            body.classList.remove('no-scroll'); // Remove no-scroll from body
        }
    });
});