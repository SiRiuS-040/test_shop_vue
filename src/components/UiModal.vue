<template>
    <div class="ui-modal">
        <div
            @click="close"
            class="ui-modal__overlay"
        >
        </div>
        <div class="ui-modal__wrapper">
            <h2 class="ui-modal__title">
                <slot name="modalTitle">
                </slot>
            </h2>
            <UiButton
                icon="close"
                buttonType="close"
                @click="close"
                class="ui-modal__close"
            >
            </UiButton>
            <div class="ui-modal__content">
                <slot name="modalContent">
                </slot>
            </div>
            <div class="ui-modal__actions">
                <slot name="modalActions" class="ui-modal__actions">
                </slot>
            </div>
        </div>

    </div>
</template>

<script>

import UiButton from "./UiButton.vue";

export default {
    name: "UiModal",
    components: {
        UiButton,
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>

<style lang="scss">
    @import "./styles/uiModal/ui-modal.scss";
</style>