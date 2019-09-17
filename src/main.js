import Vue from 'vue'
// 引入包
import ElementUI from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// 注册到VUE实例
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router: '实例路由对象',
  render: h => h(App)
}).$mount('#app')
