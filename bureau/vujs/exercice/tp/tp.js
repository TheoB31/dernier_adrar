Vue.createApp({

    data() {
        return {
        image : "https://cdn.unitycms.io/images/DnnWsudYqjpAsmY5abKUZS.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=QIF1O3J3WZg",
        nom: "brigitte II RIP",
        description: "rip a la reine de France",
        
        tab: ["94","95","96","perdu"],
        nume: "numero fetiche: 2022",
        leNombre : 0,
        
    };
    },

    methods: {
        ajouterTask() {
        this.tasks.push(this.valeurDeInput);
        this.valeurDeInput = '';
        },
    },

    }).mount('#app');