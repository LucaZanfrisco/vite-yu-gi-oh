<script>
export default {
    name: 'Header',
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 my-3">
                    <h1>Yu-Gi-Oh API</h1>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;
    header{
        background-color: $fourth-color;
    }
</style>