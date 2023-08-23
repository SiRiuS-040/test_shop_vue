<template>
    <div class="app-body">
        <AppHeader />
        <AppMain>
            <template #mainContent>
                <div class="app-Home">
                    <div class="app-main__title-wrapper">
                        <h2 class="app-main__title">Главная страница</h2>
                        <p class="app-main__description">
                            Добро пожаловать в наш замечательный онлайн-магазин
                        </p>
                    </div>
                </div>
            </template>
        </AppMain>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";

export default {
    name: "PageHome",
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },

}
</script>

<style lang="scss">
    @import "../components/styles/pageHome/page-home";
</style>