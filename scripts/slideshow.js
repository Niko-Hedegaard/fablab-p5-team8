//billede array
const images = [
    {src: "./images/projekt_1-p5-team8.webp", alt: "Billede 1"},
    {src: "./images/projekt_2-p5-team8.webp", alt: "Billede 2"},
    {src: "./images/projekt_3-p5-team8.webp", alt: "Billede 3"},
]

const headerText = [
    "Projekt 1",
    "Projekt 2",
    "Projekt 3"
]

const breadText = [
    "Lav dine egne 3D figurer i træ!",
    "Du kan også bruge vores fede 3D printere til store projekter",
    "Lav mere konventionelle ting såsom denne bordskåner."
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
    imagesBread.textContent = breadText[currentIndex];
}

if (currentIndex === 2) {
}
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener("click", () => {
    if (currentIndex === images.length - 1) {
        alert("Du er nået slutningen... Vi håber du har fået en masse inspiration!");
    } else {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    }
});

updateImage();