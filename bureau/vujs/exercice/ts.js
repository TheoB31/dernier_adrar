Vue.createApp({

    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    
    data() {
        return {
        lol: ["ok21","ok2"],
        unLivre : "Les mémoires de Steven Seagal",
        valeurDeInput: '',
        ok :      (math.random()*4)
    };
    },
    
    // L'application est montée sur la balise HTML qui possède l'id bookListApp
    
    }).mount('#bookListApp');