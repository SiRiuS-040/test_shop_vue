import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import print from 'vue3-print-nb'
const app = createApp(App)
app.use(router)
app.use(print)
app.mount('#app')