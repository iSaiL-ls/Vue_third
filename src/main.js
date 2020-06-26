import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(VueQuillEditor)
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
