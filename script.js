// ===== POP-UP PICK DEL DÍA =====
window.addEventListener("load", () => {
  // Mostrar el pop-up automáticamente después de 8 segundos
  setTimeout(() => {
    document.getElementById("pick-popup").classList.add("active");
  }, 8000);
});

function closePopup() {
  document.getElementById("pick-popup").classList.remove("active");
}

// ===== SCROLL AUTOMÁTICO DE PARTIDOS =====
let slider = document.getElementById("match-slider");
let scrollPos = 0;

setInterval(() => {
  scrollPos += 1;
  if (scrollPos > slider.scrollHeight) {
    scrollPos = 0;
  }
  slider.scrollTop = scrollPos;
}, 40); // velocidad del scroll (ms)
