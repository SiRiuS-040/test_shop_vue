import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import AboutView from '../views/AboutView.vue'
import SingleItemView from '../views/SingleItemView.vue'
import PageCatalogItem from '../components/PageCatalogItem.vue'


const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/item',
      component: SingleItemView,
      children: [
        {
          path: '/item/:id',
          component: PageCatalogItem,
          props: true,
        }
      ]
    },
  ]
};

const router = createRouter(routerOptions)

export default router
