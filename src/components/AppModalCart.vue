<template>
    <UiModal class="app-modal-cart">
        <template #modalTitle>
            Корзина товаров
        </template>
        <template #modalContent>
            <div
                id="appCartPrint"
                class="app-modal-cart__content"
            >
                <h3
                    v-if="marketData.cartData.cartEmpty"
                    class="app-modal-cart__sub-title"
                >
                    Товары в корзине отсутствуют.
                </h3>
                <h3
                    v-if="!marketData.cartData.cartEmpty"
                    class="app-modal-cart__sub-title">
                    Список добавленных товаров:
                </h3>
                <ol start="1" class="app-modal-cart__order-list">
                    <AppModalCartItem
                         v-for="item in marketData.cartData.cartList"
                        :key="item.id"
                        :cartItemData="item"
                    />
                </ol>
                <div class="app-modal-cart__sum">
                    ИТОГО: {{ marketData.cartData.cartOverallSum }} р.
                </div>
            </div>
        </template>
        <template #modalActions>
            <UiButton
                v-print="'#appCartPrint'"
                buttonType="print"
            >
                <template #desc>
                    Распечатать
                </template>
            </UiButton>
            <UiButton
                buttonType="order"
            >
                <template #desc>
                    Оформить заказ
                </template>
            </UiButton>
        </template>
    </UiModal>
</template>

<script>

import UiButton from "./UiButton.vue";
import UiModal from "./UiModal.vue";
import AppModalCartItem from "./AppModalCartItem.vue";
import { marketData } from "./features/appMarketData";

export default {
    name: "AppModalCart",
    components: {
        UiButton,
        UiModal,
        AppModalCartItem,
    },

    data() {
        return {
            marketData,
        };
    },
}
</script>

<style lang="scss">
    @import "./styles/appModalCart/app-modal-cart.scss";
</style>