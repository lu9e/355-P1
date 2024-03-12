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
