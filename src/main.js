import { createApp } from 'vue';
import './style.css'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App).use(Quasar, {plugins: {},}).use(router).mount('#app')
