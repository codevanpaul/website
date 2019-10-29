// Selects the FIRST occurance of <button>;
var button = document.querySelector("header form button");
var element = document.querySelector("header form input");

button.addEventListener("click", function() {
  element.classList.toggle("visible");
});