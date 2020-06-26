import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddBlog from '../views/AddBlog.vue'
import User from '../views/User.vue'
import Blog from '../views/Blog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/addblog',
    component: AddBlog
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/blog',
    component: Blog
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
