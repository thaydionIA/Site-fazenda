document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex3 = 0;
    let slideTimeout3;

    function showSlides3() {
        let slides3 = document.querySelectorAll(".mySlides3");
        let dots3 = document.querySelectorAll(".dot3");
        slides3.forEach(slide => slide.style.display = "none");
        dots3.forEach(dot => dot.className = dot.className.replace(" active", ""));
        slideIndex3++;
        if (slideIndex3 > slides3.length) { slideIndex3 = 1; }
        slides3[slideIndex3 - 1].style.display = "block";
        dots3[slideIndex3 - 1].className += " active";
        slideTimeout3 = setTimeout(showSlides3, 4000);
    }

    window.currentSlide3 = function(n) {
        clearTimeout(slideTimeout3);
        slideIndex3 = n - 1;
        showSlides3();
    }

    let slideshowContainer3 = document.querySelector('.slideshow-container3');

    if (slideshowContainer3) {
        let hammer = new Hammer(slideshowContainer3);
        hammer.on('swipeleft', () => {
            clearTimeout(slideTimeout3);
            slideIndex3++;
            if (slideIndex3 > document.querySelectorAll(".mySlides3").length) { slideIndex3 = 1; }
            updateSlides3();
            slideTimeout3 = setTimeout(showSlides3, 4000);
        });
        hammer.on('swiperight', () => {
            clearTimeout(slideTimeout3);
            slideIndex3--;
            if (slideIndex3 < 1) { slideIndex3 = document.querySelectorAll(".mySlides3").length; }
            updateSlides3();
            slideTimeout3 = setTimeout(showSlides3, 4000); 
        });
    }

    function updateSlides3() {
        let slides3 = document.querySelectorAll(".mySlides3");
        let dots3 = document.querySelectorAll(".dot3");
        slides3.forEach(slide => slide.style.display = "none");
        dots3.forEach(dot => dot.className = dot.className.replace(" active", ""));
        slides3[slideIndex3 - 1].style.display = "block";
        dots3[slideIndex3 - 1].className += " active";
    }

    showSlides3();
});
