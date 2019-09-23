let schalter = document.getElementById("schalter");
let background = document.getElementById("background");

schalter.addEventListener('click', (e) => {
//console.log("DUNKEL!");
background.classList.toggle("lichtaus");
});