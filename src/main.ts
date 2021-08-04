import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueI18n from './i18n'

const app = createApp(App)

app.use(VueI18n)

app.use(store).use(router).mount('#app')
