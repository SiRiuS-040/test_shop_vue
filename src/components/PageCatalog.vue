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
                            :class="getClasses()"
                            class="app-catalog__list"
                        >
                            <AppCatalogItem
                                v-for="card in loadedCatalogData"
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
                                v-for="slide in loadedCatalogData"
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

import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";
import AppCatalogItem from "./AppCatalogItem.vue";
import { marketData } from "./features/appMarketData";
import catalogTestData from "./features/testData.json";

import { loadCatalogRandomItems } from "./features/getData.js";

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

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
            isModalVisible: false,
            marketData,
            showSlider: false,
            catalogData: marketData.marketCatalog,
            loadedCatalogData: marketData.loadedCatalog,
            catalogListClass: '',
            settings: {
                itemsToShow: 3,
                snapAlign: 'center',
                transition: 300,
                wrapAround: true,
            },

        };
    },

    mounted() {
        Object.assign(this.catalogData, catalogTestData)
        let catalogItemsToShow = 10;
        loadCatalogRandomItems(this.catalogData, this.loadedCatalogData, catalogItemsToShow)

        if (this.marketData.loadedCatalog.length > 3) {
            this.showSlider = true
        } else {
            this.showSlider = false
        }
    },

    methods: {
        getClasses() {
            if (this.marketData.loadedCatalog.length <= 1) {
                return 'app-catalog__list--single'
            } else if (this.marketData.loadedCatalog.length === 2) {
                return 'app-catalog__list--double'
            } else if (this.marketData.loadedCatalog.length === 3) {
                return 'app-catalog__list--triple'
            } else if (this.marketData.loadedCatalog.length > 3) {
                return 'app-catalog__list--slider'
            }
        },
    },
}
</script>

<style lang="scss">
    @import "../components/styles/pageCatalog/app-catalog";
</style>