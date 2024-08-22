

document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    let slideTimeout;

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        let dots = document.querySelectorAll(".dot");
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.className = dot.className.replace(" active", ""));
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        slideTimeout = setTimeout(showSlides, 4000);
    }

    window.currentSlide = function(n) {
        clearTimeout(slideTimeout);
        slideIndex = n - 1;
        showSlides();
    }

    let slideshowContainer = document.querySelector('.slideshow-container');

    if (slideshowContainer) {
        let hammer = new Hammer(slideshowContainer);
        hammer.on('swipeleft', () => {
            clearTimeout(slideTimeout);
            slideIndex++;
            if (slideIndex > document.querySelectorAll(".mySlides").length) { slideIndex = 1; }
            updateSlides();
            slideTimeout = setTimeout(showSlides, 4000);
        });
        hammer.on('swiperight', () => {
            clearTimeout(slideTimeout);
            slideIndex--;
            if (slideIndex < 1) { slideIndex = document.querySelectorAll(".mySlides").length; }
            updateSlides();
            slideTimeout = setTimeout(showSlides, 4000); 
        });
    }

    function updateSlides() {
        let slides = document.querySelectorAll(".mySlides");
        let dots = document.querySelectorAll(".dot");
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.className = dot.className.replace(" active", ""));
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    showSlides();
});
