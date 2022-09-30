let text = document.getElementById("text");
/*
text.addEventListener("keyup",(e)=>{

    let stock = text.value;
    localStorage.setItem("monSuperText",stock);
    let key = localStorage.getItem("monSuperText");
    let textArea = document.getElementById("textarea");
    textArea.innerText = key;
});
*/

let Submit = document.getElementById("button");
Submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let stock = text.value;
    localStorage.setItem("monSuperText",stock);
    let key = localStorage.getItem("monSuperText");
    let textArea = document.getElementById("textarea");
    textArea.innerText = key;

});
    //localStorage.clear();
    //suprimer
    // localStorage.removeItem("monSuperText");
    

console.log(localStorage.length);

//localStorage.key(0);