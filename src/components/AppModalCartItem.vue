<template>
    <li class="app-modal-cart-item">
        <p class="app-modal-cart-item__name">
            {{ cartItemData.itemName }}
        </p>
        <div class="app-modal-cart-item__count-wrapper">
            <UiButton
                @click="cartItemDecr(cartItemData, marketData)"
                icon="minus"
                buttonType="change-count"
                class="app-modal-cart-item__count-change"
            >
            </UiButton>
            <span class="app-modal-cart-item__count">
                                {{ cartItemData.itemQuantity }}
            </span>
            <UiButton
                @click="cartItemIncr(cartItemData, marketData)"
                icon="plus"
                buttonType="change-count"
                class="app-modal-cart-item__count-change"
            >
            </UiButton>
        </div>
        <span class="app-modal-cart-item__price-overall">
                            {{ cartItemData.itemOverallPrice }} р.
        </span>
        <UiButton
            @click="cartItemDelete(cartItemData, marketData)"
            class="app-modal-cart-item__delete"
        >
            <template #desc>
                Удалить
            </template>
        </UiButton>
    </li>
</template>

<script>

import UiButton from "./UiButton.vue";
import {marketData} from "./features/appMarketData";
import {cartItemDecr, cartItemDelete, cartItemIncr} from "./features/useMarketApp";

export default {
    name: "AppModalCartItem",

    components: {
        UiButton,
    },
    props: {
        cartItemData : Object,
    },

    data() {
        return {
            marketData,
            cartItemIncr,
            cartItemDecr,
            cartItemDelete,
        };
    },
}
</script>

<style lang="scss">
    @import "./styles/appModalCartItem/app-modal-cart-item.scss";
</style>