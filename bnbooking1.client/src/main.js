import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'

const root = createApp(App)
registerGlobalComponents(root)


root
  .use(router)
  .component('Datepicker', Datepicker)
  .mount('#app')
