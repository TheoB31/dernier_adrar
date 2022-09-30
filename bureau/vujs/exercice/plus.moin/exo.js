Vue.createApp({
    data() {
        return {
         
            quentin: 0,

            //ici tu crée tes variables
        };
    },
    methods: {
        //ici tu crée tes fonctions
        plus(){
            this.quentin ++ ;
        },
        moin(){
            this.quentin --;
        },
    },
}).mount('#app');