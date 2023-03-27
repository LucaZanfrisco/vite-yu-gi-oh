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
        <h3>{{ name }}</h3>
        <p>{{ archetype }}</p>
    </div>
</template>

<style lang="scss" scoped></style>