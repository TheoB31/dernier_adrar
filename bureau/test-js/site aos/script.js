let counter = document.getElementById("count");
//let majCounter = () => {
    let data = fetch("https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation%22")
        .then((response) => {
            return response.json()
        })
        .then((value) => {
            console.log(value);
            counter.innerText = value.value
        })
        .catch((error) =>{
            console.log(error);
        })


        async function asynchrone(){
            //gestion de l'essaie-erreur avec try... catch()
            try {
                let response = await fetch("https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&facet=date_debut&facet=date_fin&facet=categorie_de_la_manifestation&facet=theme_de_la_manifestation%22");
                let val = await response.json();
            
            
                console.log(val);
            } catch(error) {
                console.log(`ERREUR !!! - response status : ${error}`)
            }
        }
        
        asynchrone();