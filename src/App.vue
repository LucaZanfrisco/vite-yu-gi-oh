<script>
  import HeaderApp from './components/HeaderApp.vue'
  import MainApp from './components/MainApp.vue'
  import axios from 'axios';
  import { store } from './store';
  export default {
    name: 'App',
    components:{
      HeaderApp,
      MainApp,
    },
    data(){
      return{
        store,
      }
    },
     created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((result) => {
        for (let i = 0; i < 40; i++) {
          const { id, name, archetype, card_images } = result.data.data[i];
          this.store.cardList.push({
            id,
            name,
            archetype,
            card_images
          })
        }
        this.store.cardListFound = this.store.cardList.length;
      })
  }
  }
</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp></MainApp>
</template>

<style lang="scss" scoped>

</style>
