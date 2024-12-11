let weekender = ["Man.", "Tirs.", "Ons.", "Tor.", "Fre."];
let kalenderDageContainer = document.getElementById("dage__container");

weekender.forEach((dag) => {
  let dagElement = document.createElement("div");
  dagElement.className = "kalender__dage--element";

  let dagText = document.createElement("p");
  dagText.className = "kalender__tekst";
  dagText.textContent = dag;

  dagElement.appendChild(dagText);
  kalenderDageContainer.appendChild(dagElement);
});

let modalLedig = document.querySelector(".oversigt__ledig");
let modalBooket = document.querySelector(".oversigt__booket");
let modalBooketMorgen = document.querySelector(".oversigt__booket--morgen");
let modalBooketAften = document.querySelector(".oversigt__booket--morgen");

function modalLuk() {
  console.log("luk modalboks");
  if ((modalLedig.classname = "active")) {
    modalLedig.classList.remove("active");
  }
  if ((modalBooket.classname = "active")) {
    modalBooket.classList.remove("active");
  }
  if ((modalBooketMorgen.classname = "active")) {
    modalBooketMorgen.classList.remove("active");
  }
  if ((modalBooketAften.classname = "active")) {
    modalBooketAften.classList.remove("active");
  }
}

function modalLedigKnap() {
  console.log("Får tilføjet active");
  modalLedig.classList.toggle("active");
}

function modalBooketKnap() {
  console.log("Får tilføjet active");
  modalBooket.classList.toggle("active");
}

function modalBooketMorgenKnap() {
  console.log("Får tilføjet active");
  modalBooketMorgen.classList.toggle("active");
}

function modalBooketAftenKnap() {
  console.log("Får tilføjet active");
  modalBooketAften.classList.toggle("active");
}
