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


document.addEventListener("DOMContentLoaded", function () {
    var sortButton = document.getElementById("sortButton");
    var menu = document.querySelector(".menu");

    sortButton.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener("click", function (event) {
        var isClickInsideDropdown = sortButton.contains(event.target) || menu.contains(event.target);
        if (!isClickInsideDropdown) {
            menu.style.display = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".picP img");
    var currentImage = 0;

    images[currentImage].classList.add("active");

    setInterval(function() {
        images[currentImage].classList.remove("active");
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add("active");
    }, 4000); // Change image every 4 seconds 
});

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".picP2 img");
    var currentImage = 0;

    images[currentImage].classList.add("active");

    setInterval(function() {
        images[currentImage].classList.remove("active");
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add("active");
    }, 4000); // Change image every 4 seconds 
});
