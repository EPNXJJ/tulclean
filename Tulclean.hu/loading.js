function adjustViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', adjustViewportHeight);
window.addEventListener('load', adjustViewportHeight);

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

var loadingScreen = document.querySelector("#loader");
var video = document.querySelector("#cleaning");
var container = document.querySelector(".container");

window.addEventListener('load', function() {
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        video.classList.remove('hidden');
        container.classList.remove('hidden');
        video.classList.add('show');
        container.classList.add('show');
    }, 2000);
});