//On stock les éléments HTML dans des variables
const leButton = document.getElementById("button");
const leinput = document.getElementById("todo");
const laListe = document.getElementById("laListe");

function ajouterTask() {
    //Dans inputContent on stock ce que l'utilisateur tape dans l'input
    const inputContent = document.getElementById("todo").value;
    //Création d'un élément <li></li>"
    const listElement = document.createElement("li");
    //Complétion du texte de l'élément <li></li>
    listElement.textContent =  inputContent;
    //Ajout du <li></li> dans la <ul></ul> (laListe)
    laListe.appendChild(listElement);
    //Bonus : apès avoir ajouté une Task, on vide l'input
    leinput.value = '';
};
leButton.addEventListener('click', ajouterTask);