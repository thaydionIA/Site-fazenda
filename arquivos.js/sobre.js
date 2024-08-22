document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex2 = 0;
    let slideTimeout2;

    function showSlides2() {
        let slides2 = document.querySelectorAll(".mySlides2");
        let dots2 = document.querySelectorAll(".dot2");
        slides2.forEach(slide => slide.style.display = "none");
        dots2.forEach(dot => dot.className = dot.className.replace(" active", ""));
        slideIndex2++;
        if (slideIndex2 > slides2.length) { slideIndex2 = 1; }
        slides2[slideIndex2 - 1].style.display = "block";
        dots2[slideIndex2 - 1].className += " active";
        slideTimeout2 = setTimeout(showSlides2, 4000);
    }

    window.currentSlide2 = function(n) {
        clearTimeout(slideTimeout2);
        slideIndex2 = n - 1;
        showSlides2();
    }

    let slideshowContainer2 = document.querySelector('.slideshow-container2');

    if (slideshowContainer2) {
        let hammer = new Hammer(slideshowContainer2);
        hammer.on('swipeleft', () => {
            clearTimeout(slideTimeout2);
            slideIndex2++;
            if (slideIndex2 > document.querySelectorAll(".mySlides2").length) { slideIndex2 = 1; }
            updateSlides2();
            slideTimeout2 = setTimeout(showSlides2, 5000);
        });
        hammer.on('swiperight', () => {
            clearTimeout(slideTimeout2);
            slideIndex2--;
            if (slideIndex2 < 1) { slideIndex2 = document.querySelectorAll(".mySlides2").length; }
            updateSlides2();
            slideTimeout2 = setTimeout(showSlides2, 5000); 
        });
    }

    function updateSlides2() {
        let slides2 = document.querySelectorAll(".mySlides2");
        let dots2 = document.querySelectorAll(".dot2");
        slides2.forEach(slide => slide.style.display = "none");
        dots2.forEach(dot => dot.className = dot.className.replace(" active", ""));
        slides2[slideIndex2 - 1].style.display = "block";
        dots2[slideIndex2 - 1].className += " active";
    }

    showSlides2();
});
