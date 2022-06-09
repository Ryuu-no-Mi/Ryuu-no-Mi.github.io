/* Cuando hago Click, .button, .nav  TOGGLE 'activo'  */

const button = document.querySelector(".btn");
const nav = document.querySelector(".nav-bar");

button.addEventListener("click", () => {
  nav.classList.toggle("activo");
});
