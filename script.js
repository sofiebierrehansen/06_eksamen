// Burgermenu

const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("shown");

  const menu = nav.classList.contains("shown");

  if (menu) {
    // hvis ul har klassen "shown"
    btn.textContent = "X";
    // btn.classList.add("open");
  } else {
    // hvis IKKE ul har klassen "shown"
    btn.textContent = "☰";
    // btn.classList.remove("open");
  }
}

btn.addEventListener("click", toggleMenu);
