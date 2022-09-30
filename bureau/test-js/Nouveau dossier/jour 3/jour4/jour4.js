// exemple de création de div 
const balle = document.createElement("div");
balle.setAttribute("id", "balle");

const cadre = document.createElement("div");
document.body.appendChild(cadre);
document.body.appendChild(balle);
cadre.setAttribute("id", "cadre");


cadre.style.height = "700px";
cadre.style.width = "600px";
cadre.style.border = "solide 2px red";
cadre.style.position = 'absolute';
cadre.style.backgroundColor = "black"

// creation style balle
balle.style.height = "25px";
balle.style.width = "25px";
balle.style.background = "red";
balle.style.borderRadius = "100%";
balle.style.position = "absolute";  
balle.style.left = "200px";
balle.style.top = "200px";
let xBalle = 10;
let yBalle=10;
let speed = 10;
let speedy = 10;

/*
setInterval(function(){
    balle.style.left = xBalle + "px";
    xBalle += 10;
    if (xBalle<document.body) {
        xBalle=0;
    }

},25);


window.addEventListener('keydown', function(e){
    if(e.code == 'space'){
        xBalle = 0;
        yBalle = 0;
    }  
});
*/

setInterval(function () {
    balle.style.left = xBalle + "px";
    xBalle += speed;
    if(xBalle > 788){
        speed = -10;
    }
    else if(xBalle < 12){
        speed = 10;
    }

}, 100);
setInterval(function () {

    balle.style.top = yBalle + "px";
    yBalle += speedy;
    if(yBalle > 588){
        speedy = -10;
    }
    else if(yBalle < 12){
        speedy = 10;
    }
    
}, 5);


