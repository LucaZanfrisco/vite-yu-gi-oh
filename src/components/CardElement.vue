<script>
export default {
    name: 'Card',
    props:{
        img: String,
        name: String,
        archetype: String,
    }
}
</script>

<template>
    <div>
        <div><img :src="img" :alt="name" class="img-fluid"></div>
        <h5>{{ name.toUpperCase() }}</h5>
        <p>{{ archetype }}</p>
    </div>
</template>

<style lang="scss" scoped>
</style>