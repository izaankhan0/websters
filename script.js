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