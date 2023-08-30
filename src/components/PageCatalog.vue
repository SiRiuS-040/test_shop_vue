<template>
    <div
        class="app-body">
        <AppHeader />
        <AppMain>
            <template #mainContent>
                <div class="app-catalog">
                    <div class="app-main__title-wrapper">
                        <h2 class="app-main__title">Товары</h2>
                        <p class="app-main__description">
                            Наши товары всегда в наличии, просто добавьте желаемое в корзину и оформите заказ!
                        </p>
                    </div>
                    <div class="app-main__section app-catalog__section">
                        <ul
                            v-if="!showSlider"
                            :class="catalogListClass"
                            class="app-catalog__list"
                        >
                            <AppCatalogItem
                                v-for="card in itemCards"
                                :cardData="card"
                                :key="card.id"
                            />
                        </ul>
                        <carousel
                            v-if="showSlider"
                            :items-to-show="3"

                            v-bind="settings"
                            class="app-catalog__slider"
                        >
                            <slide
                                v-for="slide in itemCards"
                                :key="slide"
                            >
                                <AppCatalogItem
                                    :cardData="slide"
                                />
                            </slide>

                            <template #addons>
                                <navigation />
                                <pagination />
                            </template>
                        </carousel>
                    </div>
                </div>
            </template>
        </AppMain>
        <AppFooter />
    </div>
</template>

<script>


import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";
import AppCatalogItem from "./AppCatalogItem.vue";
import { useMarket } from "./features/useMarket";


export default {
    name: "PageCatalog",
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppCatalogItem,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    data() {
        return {
            settings: {
                itemsToShow: 3,
                snapAlign: 'center',
                transition: 300,
                wrapAround: true,
            },
        };
    },

    setup() {
        const {
            loadedCatalogData,
            catalogListClass,
            showSlider
        } = useMarket()

        const itemCards = loadedCatalogData.value

        return {
            itemCards,
            loadedCatalogData,
            catalogListClass,
            showSlider
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/pageCatalog/app-catalog";
</style>