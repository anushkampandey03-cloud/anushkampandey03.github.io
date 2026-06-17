/* ============================================
   ANUSHKA PANDEY — PERSONAL WEBSITE
   script.js
   ============================================ */

/* ---- Rotating "currently thinking about" text ---- */
const phrases = [
  "how circadian clocks shape immune memory",
  "epigenetic inheritance across generations",
  "why the dark proteome stays dark",
  "immunological aging and what slows it",
  "whether bacteria think in biological time",
  "what synaptic pruning and sleep have in common",
  "the question AlphaFold still can't answer",
];

const el = document.getElementById("rotating");
let index = 0;

function rotateText() {
  el.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % phrases.length;
    el.textContent = phrases[index];
    el.classList.remove("fade-out");
    el.classList.add("fade-in");

    setTimeout(() => {
      el.classList.remove("fade-in");
    }, 50);
  }, 450);
}

if (el) {
  el.textContent = phrases[0];
  setInterval(rotateText, 3000);
}

/* ---- Mobile nav toggle ---- */
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

/* ---- Smooth scroll offset for sticky nav ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const navHeight = document.querySelector("nav").offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 24;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
