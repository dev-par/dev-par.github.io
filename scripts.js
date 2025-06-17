function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
}

// Photo Slider Logic
const sliderImages = [
    {
        src: './imgs/UF photo.jpeg',
        caption: 'Cape Town View'
    },
    {
        src: './imgs/Portfolio-website.jpg',
        caption: 'Project Work'
    },
    {
        src: './imgs/HousePredictor.png',
        caption: 'Team Collaboration'
    },
    {
        src: './imgs/StartingPointBlog.png',
        caption: 'Adventure Time'
    }
];
let currentSlide = 0;

function showSlide(index) {
    const total = sliderImages.length;
    currentSlide = (index + total) % total;
    for (let i = 0; i < 3; i++) {
        const img = document.getElementById(`slider-image-${i}`);
        const imgIndex = (currentSlide + i) % total;
        if (img) {
            img.src = sliderImages[imgIndex].src;
            img.alt = sliderImages[imgIndex].caption;
        }
    }
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize slider on DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        centeredSlides: false,
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