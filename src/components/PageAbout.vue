<template>
    <div class="app-body">
        <AppHeader />
        <AppMain>
            <template #mainContent>
                <div class="app-Home">
                    <div class="app-main__title-wrapper">
                        <h2 class="app-main__title">O Компании</h2>
                        <p class="app-main__description">
                            Наша компания на столько известная что не нуждается в описании
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
    name: "PageAbout",
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