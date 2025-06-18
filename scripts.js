function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
}

// Swiper initialization for photo slider
window.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        }
    });
});