Vue.createApp({
    data() {
        return {
         
            ok:0,

            //ici tu crée tes variables
        };
    },
    methods: {
        //ici tu crée tes fonctions
        plus1(){
            this.ok ++;
        },
        plus5(){
            this.ok ++;
        },
    },
    
}).mount('#app');