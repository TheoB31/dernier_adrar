/*C'est là que vous allez mettre votre code JS*/


//let info = "ok";

const info = document.createElement("div");
const btn  = document.querySelector("button");
const cardMeteo = document.querySelector(".cardMeteo");

info.style.height ="300px";
info.style.width ="200px";
info.style.border ="solid 16px grey";
info.style.paddingTop ="16px";

document.body.appendChild(info);

cardMeteo.insertBefore(info,btn);


function addinfo(text){
 info.innerHTML = `<p>${text}</p>`;
};

function button(){
    classList.add("button__cardMeteo");
};


