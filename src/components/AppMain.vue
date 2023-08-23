<template>
    <main class="app-main container">
        <slot name="mainContent"></slot>
    </main>
</template>

<script>

export default {
    name: "AppMain",
}
</script>

<style lang="scss">
    @import "../components/styles/appMain/app-main";
</style>