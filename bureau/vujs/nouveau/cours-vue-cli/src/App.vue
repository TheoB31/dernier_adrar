<template>
    <h1 class="text-center">Les Amis</h1>
    <ul class="list-group">
      <new-ami @add-ami="ajouterAmi"></new-ami>
      <un-ami 
      v-for="unAmi in lesAmis" 
      :key="unAmi.id" 
      :id="unAmi.id"
      :leNom="unAmi.name" 
      :lePhone="unAmi.phone"
      :leMail="unAmi.email"
      :premium="unAmi.premium"
      @mon-event-premium="afficherStatusPremium"
      @delete="effacerAmi">
      </un-ami>
    </ul>
</template>

<script>
export default{
  data(){
    return {
      lesAmis: [      
        {
            id: 'hadock',
            name: 'CaptainHadock',
            phone: '09876 543 221',
            email: 'cap@hadock.com',
            premium:false
        },
        {
            id:'kimonoSurUnFrigo',
            name:"Steven Seagal",
            phone:'+338765477',
            email:'steven@seagal.com',
            premium:false
        },
    ],
    }
  },
  methods:{
    afficherStatusPremium(leIdDansUnAmi){
      const unAmiIdentified = this.lesAmis.find(unTruc => unTruc.id === leIdDansUnAmi);
      unAmiIdentified.premium = !unAmiIdentified.premium;
    },
    ajouterAmi(name,phone,email){
      const newAmiContact = {
        id:new Date().toISOString(),
        name:name,
        phone:phone,
        email:email,
        premium:false,
      };
      console.log(this.lesAmis);
      this.lesAmis.push(newAmiContact);
    },
    effacerAmi(unId){
      //  Pour effacer on filtre le tableau (on garde tout ceux qui ont un id différent de celui que l'on a effacé)
      this.lesAmis = this.lesAmis.filter((unePersonne)=> unePersonne.id !== unId);
    }
  }
}
</script>