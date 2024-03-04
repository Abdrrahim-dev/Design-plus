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
//
let portfolioCard = document.querySelectorAll(".portfolio .card");
let portfolioImg = document.querySelectorAll(
  ".portfolio .card img:first-of-type"
);
portfolioImg.forEach((img) => {
  img.onclick = function () {
    img.parentElement.classList.add("active");
  };
});
//
let exitImg = document.querySelectorAll(".portfolio .card i");
exitImg.forEach((btn) => {
  btn.onclick = function () {
    btn.parentElement.classList.remove("active");
  };
});
