import { createApp } from 'vue'
import { router } from './views/router.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
