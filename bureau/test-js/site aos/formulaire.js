let pseudo = document.getElementById("pseudo");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
let btn = document.getElementById("btn");
let erreur = document.getElementById("erreur");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let pseudoStock = pseudo.value;
    let pwdStock = pwd.value;
    let pwd2Stock = pwd2.value;
    localStorage.setItem("pwd",pwdStock);
    localStorage.setItem("pwd2",pwd2Stock);
    localStorage.setItem("pseudo",pseudoStock);
    if(pwdStock != pwd2Stock){
        erreur.innerHTML= "je suis une erreur";
        
    }
    else if(pwdStock == pwd2Stock){
        erreur.innerHTML =" ";
    }


});

class Test{

    constructor(nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }
   imc(){
    poids/(taille*taille);
   }

   
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*
   
   
    }

     //getter
    getTitle() {
        return this.title;
    }

    //setter
    setTitle(title) {
        this.title = title;


//création d'une instance de ma classe Film
let myFilm = new Film("Leon", "Luc Besson", "240");


*/



/*

class Imc {
    constructor(nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    calculImc(){
        return this.poids/(this.taille*this.taille);
    }

    display() {
        console.log(`${this.nom} a un IMC de ${this.calculImc()}`);
    }
}

let chabal = new Imc("chabal", 135, 1.89);
console.log(chabal.nom);
console.log(chabal.poids);
console.log(chabal.taille);
console.log(chabal.calculImc());
chabal.display();

*/
