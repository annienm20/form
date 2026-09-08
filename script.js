const lamp = document.querySelector(".lamp-part")
const content = document.querySelector("body");
const container = document.querySelector(".content-container");
const circleshape = document.querySelector(".circle-shape");

lamp.addEventListener("click" , function() {
    container.classList.toggle("on-content");
    circleshape.classList.toggle("anime-circle");
    content.classList.toggle("content-anime");})
   