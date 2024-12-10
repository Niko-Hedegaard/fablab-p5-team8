//billede array
const images = [
    {src: "./images/projekt_1-p5-team8.webp", alt: "Billede 1"},
    {src: "./images/projekt_2-p5-team8.webp", alt: "Billede 2"},
    {src: "./images/projekt_3-p5-team8.webp", alt: "Billede 3"},
]

const headerText = [
    "Laserskærer og fremtidens Kunst",
    "3D-Print Din Egen Robot",
    "Personlig Bordskåner"
]

const breadText = [
    "I vores fabrication laboratory bliver idéer til virkelighed, bogstaveligt talt! Med laserskæring kan du forvandle flade materialer til en imponerende 3D-hjort, der kombinerer traditionelt håndværk med moderne teknologi. Projektet viser, hvordan kreativitet og innovation mødes i praksis, og inspirerer studerende til at tænke nyt. Her er fortiden og fremtiden samlet i ét skabende rum!",
    "I vores fabrication laboratory kan du bringe fremtiden til live! Med en 3D-printer kan du designe og skabe din egen robot - fra første idé til færdigt produkt. Projektet viser, hvordan teknologi og fantasi smelter sammen, og inspirerer studerende til at tænke i nye dimensioner. Her er innovation ikke bare en tanke - det er noget, du kan holde i hænderne!",
    "I vores fabrication laboratory bliver hverdagsobjekter til kunstværker! Med en laserskærer kan du designe og skabe din egen bordskåner med et personligt motiv - præcist, unikt og fuld af kreativitet. Projektet viser, hvordan teknologi kan forvandle simple idéer til praktiske og smukke løsninger, der inspirerer til personlig innovation. Fra idé til bordet - alt sker her!"
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