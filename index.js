const slides = document.getElementsByClassName("carousel-item")

const indicators = document.getElementsByClassName("indicators")

let slidePosition = 0

const totalSlides = slides.length

const prevBtn = document.getElementById("prev-btn")

const nextBtn = document.getElementById("next-btn")

function moveToPrevSlide() {
	slides[slidePosition].classList.remove("show")
	indicators[slidePosition].innerHTML = "<button> O </button"
	if (slidePosition === 0) {
		slidePosition = totalSlides -1
	} else {
		slidePosition--
	}

	slides[slidePosition].classList.add("show")
	indicators[slidePosition].innerHTML = "<button class='font-effect-neon'> O </button>"
}

prevBtn.addEventListener("click", moveToPrevSlide)

function moveToNextSlide() {
	slides[slidePosition].classList.remove("show")
	indicators[slidePosition].innerHTML = "<button> O </button"
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0
	} else {
		slidePosition++
	}

	slides[slidePosition].classList.add("show")
	indicators[slidePosition].innerHTML = "<button class='font-effect-neon'> O </button>"
}

nextBtn.addEventListener("click", moveToNextSlide)