// Veranderd de css bij het klikken op de zoekknop
var button = document.querySelector("header form button");
var element = document.querySelector("header form input");

button.addEventListener("click", function() {
  element.classList.toggle("visible");
});