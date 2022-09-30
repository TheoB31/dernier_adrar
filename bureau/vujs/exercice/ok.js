Vue.createApp({

    data() {
        return {
            
        
    };
    },

    methods: {
        ajouterTask() {
        this.tasks.push(this.valeurDeInput);
        this.valeurDeInput = '';
        },
    },

    }).mount('#app');