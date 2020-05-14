const prevButton = document.querySelector(".prev")
const images = document.querySelectorAll("img")
const nextButton = document.querySelector(".next")
let totalSlides = images.length
let slide = 1
prevButton.style.display = "none"

prevButton.addEventListener("click",()=>{
    nextButton.style.display = ""
    images.forEach(image => image.style.transform = `translateX(${-100*(slide-2)}%)`)
    slide -= 1
    slide === 1 && (prevButton.style.display = "none")
})
nextButton.addEventListener("click",()=>{
    prevButton.style.display = ""
    images.forEach(image => image.style.transform = `translateX(-${slide}00%)`)
    slide += 1
    slide === totalSlides && (nextButton.style.display = "none")
})

var sum = (x) => { 10+x }
console.log(sum(10))