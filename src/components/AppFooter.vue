<template>
    <div class="app-footer">
        <div class="container">
            <section class="app-footer__section company-info">
                <router-link to="/" class="app-footer__logo-link">
                    мегаМарт
                </router-link>
                <p class="company-info__address">г. Санкт-Петербург, пр. Индустриальный, 25</p>
                <p class="company-info__phone">+7 800 222-22-22</p>
            </section>
        </div>
    </div>
</template>

<script>

export default {
    name: "AppFooter",
}
</script>

<style lang="scss">
    @import "../components/styles/appFooter/app-footer";
</style>