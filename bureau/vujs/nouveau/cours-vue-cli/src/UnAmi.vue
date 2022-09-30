<template>
    <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item">{{unPote.name}}</h2> 
            <button @click="afficherDetails" class="btn btn-primary">Voir Détails</button>           
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{unPote.phone}}</li>
                <li class="list-group-item">{{unPote.email}}</li>
            </ul>
        </ul>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            detailsVisibles:false,
            unPote:{
                id:'jojo',
                name:"jojoLeBarjo",
                phone:'123 12346 24',
                email:'jojo@barjo.com',
            },
        }
    },
    methods:{
        afficherDetails(){
            this.detailsVisibles = !this.detailsVisibles;
        }
    },
}
</script>