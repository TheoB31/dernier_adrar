
/*
let i = 0;
let moy = [semestre1, semestre2];
let semestre1 = [14,12,19];
let semestre2 = [7,19,11];

function moy(resultat) {
    for (let i = 0; i < array.length; i++) {
        console.log(semestre1+semestre2);
    
    }
    
}


function moy1(resultat) {
    let i = 0, notes = 0, nombrenotes = resultat.length;
    while (i < nombrenotes) {
        notes = notes + resultat[i++];
}
    return notes / nombrenotes;
}
let resultat = [18, 5, 12, 2, 19,9 ,8 ,20, 20, 19];
let a = moy1(resultat);
console.log(a);


function plus(tab){
    
    for(let i = 0; i<tab.length; i++){
         
        
        for (let j = 0; j < tab[i].length; j++) {
            
           tab[i][j] = tab[i][j] + 1;
        }
        
    }
    return tab;
}
*/
/*
let pTab1 = [12,12];
let pTab2 = [13,13];
let pTab3 = [14,14];
let gTab = [pTab1, pTab2, pTab3];




console.log(plus([ [10,2,6] , [9,45] , [8,3,9], [3,15,8] ]));
*/
/*
let gTab2 = [ [10,2] , [9,45] , [8,3], [3,15] ];
gTab2[1][1]
//let ok = [1, 2, 3, 4];
//let tab = [ok];
//console.log(moyenne(tab));
*/
/*
const titre = document.getElementsByTagName("h1");
console.log(titre);

titre[0].innerText = "Coucou je t'ai modifié !";
titre[0].id = "titre";
titre[0].style.color = "red";

*/


/*
const titre = document.getElementById('titre');
const txt = document.getElementsByTagName('p');

document.body.insertBefore(txt[0], titre);

console.log(titre);
titre.style.color = "green";
*/


// document.body.insertBefore(txt[0], titre);
// document.body.appendChild(titre);
// document.body.appendChild(newtext);

/*

const titre = document.getElementById('titre');
const txt = document.getElementsByTagName('p');
const newtext = document.createTextNode("quooooi !! l'alcool c'est pas cool ");



document.body.replaceChild(newtext, txt[0]);
*/

const titre = document.getElementById('titre');
const txt = document.getElementsByTagName('p');
const newtext = document.createTextNode("quooooi !! l'alcool c'est pas cool ");

