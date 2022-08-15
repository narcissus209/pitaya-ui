import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Pitaya from './packages'
// import Pitaya from '../dist/es'
// import '../dist/es/style.css'

const app = createApp(App)

app.use(router)
app.use(Pitaya)

app.mount('#app')
