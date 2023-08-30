<template>
    <header class="app-header">
        <div class="app-header__top header-top">
            <div class="header-top__wrapper container">
                <router-link to="/" class="app-header__logo-link">
                    мегаМарт
                </router-link>
                <div class="app-header__product-options product-options">
                    <UiButton
                        @click.prevent="showModalCart"
                        icon="cart"
                        buttonType="cart"
                        class="ui-modal__action-btn"
                    >
                        <template #desc>
                            Корзина:
                            {{ cartItems }}
                        </template>
                    </UiButton>
                    <UiButton
                        buttonType="main-order"
                        class="ui-modal__action-btn"
                    >
                        <template #desc>
                            Оформить заказ
                        </template>
                    </UiButton>
                </div>
            </div>
        </div>
        <nav class="container app-header__navigation navigation">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <router-link to="/" class="navigation__link">Главная</router-link>
                </li>
                <li class="navigation__item">
                    <router-link to="/about" class="navigation__link">О Компании</router-link>
                </li>
                <li class="navigation__item">
                    <router-link to="/catalog" class="navigation__link">Каталог</router-link>
                </li>
            </ul>
        </nav>
        <AppModalCart
            v-show="isModalCartVisible"
            @close="closeModal"
        />
    </header>
</template>

<script>

import AppModalCart from "./AppModalCart.vue";
import UiButton from "./UiButton.vue";
import {useMarket} from "@/components/features/useMarket";
import {ref} from "vue";

export default {
    name: "AppHeader",
    components: {
        UiButton,
        AppModalCart,
    },

    setup() {
        const {
            cartItems,
        } = useMarket();

        const isModalCartVisible = ref(false);
        const showModalCart = () => {
            isModalCartVisible.value = true;
        };
        const closeModal = () => {
            isModalCartVisible.value = false;
        };

        return {
            isModalCartVisible,
            showModalCart,
            closeModal,
            cartItems,
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/appHeader/app-header";
</style>