import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import './src/assets/css/main.scss'
import './assets/css/main.scss'

const app = createApp(App)

//element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/element/index.scss'

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)

app.use(createPinia())

app.use(router)

app.mount('#app')
