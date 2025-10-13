import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import CountUp from 'vue-countup-v3'


const app = createApp(App)
app.component('Icon', Icon)
app.component('CountUp', CountUp)

// Inisialisasi AOS setelah mount
app.mount('#app')
AOS.init()
