Vue.createApp({
    data() {
        return {
            
        text1: "", 
        blueOk: false, 
        hello1: "",
        text2: "", 
        finjs: false,
        };
    },

    watch:{

        text1(value){

            if(value == "world"){
            this.blueOk = true
            }
            else{
                this.blueOk = false
            }
            if(value =="hello"){
                this.hello1 = true
            }
            else{
                this.hello1 = false
            }
        }


    



    },
    methods: {
        //ici tu crée tes fonctions
     clickjs(){
        this.finjs = !this.finjs;
     }
    },
}).mount('#app');