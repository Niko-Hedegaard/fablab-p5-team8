// Sikrer at DOM'en er fuldt indlæst, før koden køres
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM er indlæst."); // Debugging: Bekræfter at koden kører, når DOM'en er klar
  
    // Henter alle accordion-knapper og -indhold til senere brug
    const accordionButtons = document.querySelectorAll(".drop__down--button1"); // Liste over alle knapper
    const accordionContents = document.querySelectorAll(".accordion-content"); // Liste over alt accordion-indhold
  
    /**
     * Funktion: Åbner eller lukker en accordion-sektion
     * @param {Element} button - Den specifikke knap, der blev klikket på
     */
    function toggleAccordion(button) {
      const content = button.parentElement.nextElementSibling; // Får indholdet, der hører til knappen
  
      // Hvis indholdet allerede er åbent, luk det
      if (content.classList.contains("active")) {
        console.log("Lukker sektionen."); // Debugging
        content.classList.remove("active"); // Fjern klassen 'active'
        content.style.maxHeight = null; // Fjern maxHeight for at lukke
      } else {
        console.log("Åbner sektionen."); // Debugging
  
        // Luk alle andre sektioner før åbning af ny
        accordionContents.forEach((item) => {
          item.classList.remove("active"); // Fjern 'active' fra andre
          item.style.maxHeight = null; // Luk dem
        });
  
        // Åbn den klikkede sektion
        content.classList.add("active"); // Tilføj 'active' klasse
        content.style.maxHeight = content.scrollHeight + "px"; // Sæt maxHeight for at vise indhold
      }
    }
  
    // Tilføj klik-event til hver knap i accordion
    accordionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        toggleAccordion(button); // Kalder funktionen for at åbne/lukke
      });
    });
  
    // Lukker alle åbne accordeons, hvis der klikkes udenfor dem
    document.addEventListener("click", (event) => {
      // Tjekker om der blev klikket uden for accordion-elementerne
      if (!event.target.closest(".maskiner__holder")) {
        console.log("Klik udenfor accordion. Lukker alle."); // Debugging
        accordionContents.forEach((item) => {
          item.classList.remove("active"); // Fjern 'active' klasse
          item.style.maxHeight = null; // Fjern maxHeight for at lukke
        });
      }
    });
  
    // Brug af for-loop til at logge knapper
    for (let i = 0; i < accordionButtons.length; i++) {
      console.log(`Button ${i} er klar til at blive klikket.`); // Log besked for hver knap
    }
  
    // Eksempel på arrays og objekter for at opfylde pensum
    const accordionInfo = [
      { id: 1, title: "3D-printer", isOpen: false }, // Objekter i et array
      { id: 2, title: "Laserskærer", isOpen: false },
    ];
  
    // Log hele arrayet til debugging og visning
    console.log("Accordion information:", accordionInfo);
  });
  