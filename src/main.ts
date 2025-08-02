import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// 这是怎么导入呢？不是index.ts吗？
// 讨厌这种奇怪的代码
// 语法糖太多代码会失去可读性啊！
// import router from './router'

import router from '@/router/index.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
