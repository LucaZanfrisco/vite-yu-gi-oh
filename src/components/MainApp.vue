<script>
import CardElement from './CardElement.vue'
import { store } from '../store';
export default {
    name: 'Main',
    data() {
        return {
            store,
        }
    },
    components: {
        CardElement,
    },
}
</script>
<template>
    <main class="container my-5 rounded-3 py-3">
        <div class="row">
            <div class="col col-sm-3 m-3">
                <select name="card-type" id="card-type" class="form-select" @change="$emit('archtype')" v-model="store.archtypeSelected">
                    <option v-for="archtype in store.archtypeList"  >{{ archtype.archetype_name }}</option>
                </select>
            </div>
        </div>
        <div class="container-list p-3 rounded">
            <div class="founded p-3 rounded my-2">
                Card Found: {{ store.cardListFound = store.cardList.length }}
            </div>
            <div class="row row-cols-sm-3 row-cols-lg-5 mt-4 mx-auto text-center gy-4" v-if="store.cardList.length">
                <CardElement v-for="card in store.cardList" :img="card.card_images[0].image_url" :name="card.name"
                    :archetype="card.archetype"></CardElement>
            </div>
            <div v-else class="text-center">
                <h2>Loading ...</h2>
                <div class="loading"></div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;

.container {
    background-color: $primary-color;

    .container-list {
        background-color: white;

        .founded {
            background-color: $five-color;
            font-size: 20px;
            font-weight: bold;
        }
    }

    .loading {
        background-color: $fourth-color;
        position: relative;
        width: 3.125rem;
        height: 3.125rem;
        border-radius: .3125rem;
        margin: auto;
        animation: spin 2s infinite;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>