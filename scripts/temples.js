const menuButton = document.querySelector("#menu")
const navMenu = document.querySelector("#menuList")

menuButton.addEventListener("click", function(){
    menuButton.classList.toggle("open")
    navMenu.classList.toggle("open")
})