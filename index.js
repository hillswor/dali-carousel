const slides = document.getElementsByClassName("carousel-item")

let slidePosition = 0

const totalSlides = slides.length

const prevBtn = document.getElementById("prev-btn")

const nextBtn = document.getElementById("next-btn")

function moveToPrevSlide() {
	slides[slidePosition].classList.remove("show")
	if (slidePosition === 0) {
		slidePosition = totalSlides -1
	} else {
		slidePosition--
	}

	slides[slidePosition].classList.add("show")
}

prevBtn.addEventListener("click", moveToPrevSlide)

function moveToNextSlide() {
	slides[slidePosition].classList.remove("show")
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0
	} else {
		slidePosition++
	}

	slides[slidePosition].classList.add("show")
}

nextBtn.addEventListener("click", moveToNextSlide)