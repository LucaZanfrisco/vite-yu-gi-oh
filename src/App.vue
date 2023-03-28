<script>
import HeaderApp from './components/HeaderApp.vue'
import MainApp from './components/MainApp.vue'
import axios from 'axios';
import { store } from './store';
export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    archetypeSelect() {
      this.store.cardList = [];
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: {
          archetype: this.store.archtypeSelected
        }
      })
        .then((result) => {
          for (let i = 0; i < 30; i++) {
            const { id, name, archetype, card_images } = result.data.data[i];
            this.store.cardList.push({
              id,
              name,
              archetype,
              card_images
            })
          }
        })
    }
  },
  created() {
    this.archetypeSelect();
    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response) => {
        this.store.archtypeList = response.data;
      })
  }
}
</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp @archtype="archetypeSelect"></MainApp>
</template>

<style lang="scss" scoped></style>
