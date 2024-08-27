import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast  from 'vue-toastification'
import router from './rotuer'
import { createApp } from 'vue'
import App from './App.vue'
import 'vue-toastification/dist/index.css'

const app = createApp(App);
app.use(router)
app.mount('#app')
