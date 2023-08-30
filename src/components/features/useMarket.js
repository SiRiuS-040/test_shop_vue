import {computed, ref} from 'vue'

import { marketData } from "./appMarketData";
import catalogTestData from "./testData.json";
import { loadCatalogRandomItems } from "./getData.js";
import { addItemToCart } from "./useMarketApp";


export const useMarket = () => {
    const appData = ref(marketData)
    const catalogData = ref(marketData.marketCatalog)
    const loadedCatalogData = ref(marketData.loadedCatalog)
    const dataLoaded = ref(false)

    Object.assign(catalogData.value, catalogTestData)
    dataLoaded.value = true;

    let catalogItemsToShow = 5;
    loadCatalogRandomItems(catalogData.value, loadedCatalogData.value, catalogItemsToShow)

    const cartItems = computed(() => appData.value.cartData.cartOverallItems)
    const catalogListClass = computed(() => ({
        'app-catalog__list--single': loadedCatalogData.value.length <= 1,
        'app-catalog__list--double': loadedCatalogData.value.length === 2,
        'app-catalog__list--triple': loadedCatalogData.value.length === 3,
        'app-catalog__list--slider': loadedCatalogData.value.length > 3,
    }))
    const showSlider = computed(() => loadedCatalogData.value.length > 3)

    return {
        appData,
        catalogData,
        loadedCatalogData,
        catalogListClass,
        showSlider,
        cartItems,
        addItemToCart,
        dataLoaded,
    }
}