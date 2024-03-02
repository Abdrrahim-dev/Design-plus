let bars = document.querySelector(".icon");
let nav = document.querySelector("nav");
bars.addEventListener("click", function () {
  nav.classList.toggle("active");
  bars.classList.toggle("active");
  bars.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  document.querySelector(
    ".icon.active"
  ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
});
