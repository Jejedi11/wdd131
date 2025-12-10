const menuButton = document.querySelector("#menu")
const menuNav = document.querySelector("nav")

menuButton.addEventListener("click", function() {
  menuNav.classList.toggle("open")
  menuButton.classList.toggle("open")
})


