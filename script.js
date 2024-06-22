document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.background-video');
    video.play().catch(function(error) {
        console.log('Autoplay was prevented:', error);
    });
});
