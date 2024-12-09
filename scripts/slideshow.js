//billede array
const images = [
    {src: "./images/hero_placeholder-img.png", alt: "Billede 1"},
    {src: "./images/slideshow_placeholder.png", alt: "Billede 2"},
    {src: "./images/ucl_footer-billede.webp", alt: "Billede 3"}
]

const headerText = [
    "Projekt 1",
    "Projekt 2",
    "Projekt 3"
]

const breadText = [
    "Projekt 1",
    "Projekt 2",
    "Projekt 3"
]


//start indexet i 0
let currentIndex = 0;

//diverse elementer (DOM)
const imageElement = document.getElementById("projekter__billed--img");
const imagesText = document.getElementById("text--header");
const imagesBread = document.getElementById("text--bread");
const prevButton = document.getElementById("pil__prev");
const nextButton = document.getElementById("pil__next");

//funktionen, herunder udskiftning af projekter__billed--ramme id'et.
function updateImage() {
    const currentImage = images[currentIndex];
    imageElement.src = currentImage.src;
    imageElement.alt = currentImage.alt;
    imagesText.textContent = headerText[currentIndex];
    imagesBread.textContent =breadText[currentIndex];
}

//knap og operatorer til funktionen.
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Opdatering
updateImage();