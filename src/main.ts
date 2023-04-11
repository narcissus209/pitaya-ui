import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Pet from './packages'

const app = createApp(App)

app.use(router)
app.use(Pet)

app.mount('#app')
