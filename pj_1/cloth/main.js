function checkOut() {
    const checker1 = document.querySelector('.CO')
    checker1.style.display = 'flex'
}

function closeCo() {
    const checker1 = document.querySelector('.CO')
    checker1.style.display = 'none'
}

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
}) 


document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".picP img");
    var currentImage = 0;

    images[currentImage].classList.add("active");

    setInterval(function() {
        images[currentImage].classList.remove("active");
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add("active");
    }, 3700); 
});

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".picP2 img");
    var currentImage = 0;

    images[currentImage].classList.add("active");

    setInterval(function() {
        images[currentImage].classList.remove("active");
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add("active");
    }, 3800); 
});



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides-2) {
        index = 0;
    }

    const offset = -index * (document.querySelector('.slide').offsetWidth + 10); // +10 for margin-right
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}px)`;
    currentIndex = index;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}


function changeImage(img) {
    img.src = "imgCloth/manP1.png"; // Change to the new image path
    img.style.opacity = "1"; // Fade in the original image
}


function restoreImage(img) {
    img.src = "imgCloth/pants1.png"; // Restore the original image path
}

function changeImage2(img) {
    img.src = "imgCloth/woment1.png"; // Change to the new image path
    img.style.opacity = "1"; // Fade in the original image
}


function restoreImage2(img) {
    img.src = "imgCloth/wtop1.png"; // Restore the original image path
}

function changeImage3(img) {
    img.src = "imgCloth/man2.png"; // Change to the new image path
    img.style.opacity = "1"; // Fade in the original image
}


function restoreImage3(img) {
    img.src = "imgCloth/top2.png"; // Restore the original image path
}


function changeImage4(img) {
    img.src = "imgCloth/woment2.png"; // Change to the new image path
    img.style.opacity = "1"; // Fade in the original image
}


function restoreImage4(img) {
    img.src = "imgCloth/wtop2.png"; // Restore the original image path
}


const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width =(actives.length - 1) / (circles.length -1) * 100-70 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled= false
    }
}
















