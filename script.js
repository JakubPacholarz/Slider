document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const pagination = document.querySelector(".slider-pagination");

    function addSlide(link, imageSrc, title) {
        
        const newSlide = document.createElement("a");
        newSlide.href = link;
        newSlide.classList.add("info-box", "slide");

        const h2 = document.createElement("h2");
        h2.textContent = title;
        newSlide.appendChild(h2);

        const curtain = document.createElement("div");
        curtain.classList.add("info-box-curtain");
        newSlide.appendChild(curtain);

        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = title;
        newSlide.appendChild(img);

        slider.appendChild(newSlide);

      
        const newDot = document.createElement("span");
        newDot.classList.add("dot");
        newDot.setAttribute("data-slide", pagination.children.length);
        pagination.appendChild(newDot);

        
        newDot.addEventListener("click", function() {
            switchSlide(Array.from(pagination.children).indexOf(newDot));
        });
    }

    function switchSlide(index) {
        document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
        document.querySelectorAll(".slide")[index].classList.add("active");
        document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
        document.querySelectorAll(".dot")[index].classList.add("active");

        const slideWidth = document.querySelectorAll(".slide")[index].offsetWidth;
        const sliderWidth = slider.offsetWidth;
        const slideLeft = document.querySelectorAll(".slide")[index].offsetLeft;

        const centerPosition = slideLeft - (sliderWidth / 2) + (slideWidth / 2);
        slider.scrollTo({
            top: 0,
            left: centerPosition,
            behavior: "smooth"
        });
    }

    function syncDotsWithSlides() {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");

        slides.forEach((slide, index) => {
            slide.addEventListener("click", function() {
                switchSlide(index);
            });
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", function() {
                switchSlide(index);
            });
        });

        
        switchSlide(0);
    }

    
    addSlide("#", "image.jpg", "Handling palet 1");
    addSlide("#", "image.jpg", "Handling palet 2");
    addSlide("#", "image.jpg", "Handling palet 3");
    addSlide("#", "image.jpg", "Handling palet 4");
    addSlide("#", "image.jpg", "Handling palet 5");

    
    syncDotsWithSlides();
});
