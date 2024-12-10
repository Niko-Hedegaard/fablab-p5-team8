document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM er indlæst."); // Debugging: til når dom er klar

  const faqButtons = document.querySelectorAll(".drop__down--button2");
  const faqContent = document.querySelectorAll(".faq__content");

  function toggleFaq(button) {
    // Find indholdet
    const content = button.parentElement?.querySelector(".faq__content");

    // åbne og lukke
    if (content.classList.contains("active")) {
      console.log("Lukker sektionen."); // Debugging
      content.classList.remove("active");
      content.style.maxHeight = null; // lukker via height
    } else {
      console.log("Åbner sektionen."); // Debugging

      // Lukker alle
      faqContent.forEach((item) => {
        item.classList.remove("active");
        item.style.maxHeight = null;
      });

      // Åbnner elementer
      content.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px"; // åbner via. max height.
    }
  }

  // Event knap
  faqButtons.forEach((button, index) => {
    console.log(`Tilføjer klik-handler til knap ${index}:`, button); // Debugging
    button.addEventListener("click", () => {
      toggleFaq(button);
    });
  });

  // lukker via click udenfor faq.
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".faq__holder")) {
      console.log("Klik udenfor faq. Lukker alle."); // Debugging
      faqContent.forEach((item) => {
        item.classList.remove("active");
        item.style.maxHeight = null;
      });
    }
  });
});
