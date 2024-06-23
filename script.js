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
