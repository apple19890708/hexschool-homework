import {
  createApp,
} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store) // 外部套件加載到vue要用use()
  .use(router)
  .use(VueAxios, axios)
  .mount('#app')
