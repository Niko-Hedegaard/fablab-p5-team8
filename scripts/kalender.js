let weekender = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
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
