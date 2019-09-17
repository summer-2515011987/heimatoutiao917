// 导入vue对象
import Vue from 'vue'
import VueRouter from 'vue-router'
// 然后才能注册Vue.use()
Vue.use(VueRouter)
// 初始化路由对象(路由规则配置)
const router = new VueRouter({
  routes: [] // 配置路由规则
})
// 导出router
export default router
