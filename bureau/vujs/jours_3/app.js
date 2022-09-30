Vue.createApp({
    data() {
        return {
         
            

            //ici tu crée tes variables
        };
    },
    methods: {
        //ici tu crée tes fonctions
        ajouterTask() {
            this.tasks.push(this.valeurDeInput);
            this.valeurDeInput = '';
            },
    },
    
}).mount('#app');