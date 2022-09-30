
/*
const titre = document.getElementById('titre');
const lien = document.getElementById('#');

lien.setAttribute("href","www.super.com");


const titre = document.getElementById('titre');
console.log(titre.offsetLeft +" o "+ titre.offsetWidth +" o "+ titre.clientHeight + " o " + titre.clientWidth );


const titre = document.getElementById('titre');

titre.style.color = "blue";

titre.style.boxShadow = "2px" + "2px" + "20px";

*/
const titre = document.getElementById('titre');

const ajouter = document.getElementById('ajouter');
const suppr = document.getElementById('suppr');
const onoff = document.getElementById('onoff');

ajouter.addEventListener("click", e => {
    titre.classList.add("maCouleur")
});
suppr.addEventListener("click", e => {
    titre.classList.remove("maCouleur")
});
onoff.addEventListener("click", e => {
    titre.classList.toggle("maCouleur")
});

window.addEventListener("keydown",function(e){console.log(e) });