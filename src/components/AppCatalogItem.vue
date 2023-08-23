<template>
    <li class="app-catalog-item">
        <h3 class="app-catalog-item__title">{{ cardData.name }}</h3>
        <div class="app-catalog-item__image-wrapper">
            <img
                :src="require(`../assets/img/goods/${cardData.cover}.jpg`)"
                width="144"
                height="128"
                alt=""
                class="app-catalog-item__image"
            >
        </div>
        <router-link
            :to="`/item/${cardData.id}`"
            class="app-catalog-item__link"
        >
            <div class="app-catalog-item__price">
                {{ cardData.price }} р.
            </div>
        </router-link>
        <UiButton
            @click="addItemToCart(cardData, marketData)"
            buttonType="add-cart"
            class="app-catalog-item__add-cart"
        >
            <template #desc>
                в корзину
            </template>
        </UiButton>
    </li>
</template>

<script>

import UiButton from "./UiButton.vue";
import { marketData } from "./features/appMarketData";

import { addItemToCart } from "./features/useMarketApp";

export default {
    name: "AppCatalogItem",
    components: {
        UiButton,
    },
    props: {
        cardData: {
            type: Object,
        },
    },
    data() {
        return {
            addItemToCart,
            marketData,
        };
    },
}
</script>

<style lang="scss">
    @import "./styles/appCatalogItem/app-catalog-item.scss";
</style>