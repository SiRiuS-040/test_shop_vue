<template>
    <div
        v-if="dataLoaded"
        class="app-body">
        <AppHeader />
        <AppMain>
            <template #mainContent>
                <div class="app-item">
                    <div class="app-main__title-wrapper">
                        <h2 class="app-main__title">Карточка товара</h2>
                        <p class="app-main__description">
                            Выбранный товар в наличии!
                        </p>
                    </div>
                    <div class="app-main__section app-item__section">
                        <div class="app-item__card item-card">
                            <div class="item-card__top">
                                <div class="item-card__image-wrapper">
                                    <img
                                        :src="require(`../assets/img/goods/${catalogData[itemIndex].cover}.jpg`)"
                                        width="144"
                                        height="128"
                                        alt=""
                                        class="item-card__image"
                                    >
                                </div>
                                <div class="item-card__info">
                                    <p class="item-card__name">
                                        {{ catalogData[itemIndex].name }}
                                    </p>
                                    <p class="item-card__id">
                                        Артикул: {{ catalogData[itemIndex].id }}
                                    </p>

                                    <p class="item-card__price">
                                        Цена: {{ catalogData[itemIndex].price }} р.
                                    </p>
                                    <UiButton
                                        @click="addItemToCart(catalogData[itemIndex], appData)"
                                        buttonType="add-cart"
                                        class="item-card__add-cart"
                                    >
                                        <template #desc>
                                            в корзину
                                        </template>
                                    </UiButton>
                                </div>
                            </div>
                            <div class="item-card__desc">
                                {{ catalogData[itemIndex].description }}
                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </AppMain>
        <AppFooter />
    </div>
</template>

<script>

import { useRoute } from 'vue-router'


import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";
import UiButton from "./UiButton.vue";
import { addItemToCart } from "./features/useMarketApp";
import {useMarket} from "@/components/features/useMarket";

export default {
    name: "PageCatalogItem",
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        UiButton,
    },

    data() {
        return {
            addItemToCart,
        };
    },

    setup() {
        const route = useRoute();
        const {
            appData,
            catalogData,
            dataLoaded,
        } = useMarket();

        const itemIid = route.params.id;
        const itemIndex =  catalogData.value.findIndex(catalogItem => catalogItem.id === itemIid);

        return {
            appData,
            catalogData,
            dataLoaded,
            itemIndex
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/pageCatalogItem/app-item";
</style>