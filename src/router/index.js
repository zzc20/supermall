import Vue from 'vue'
import VueRouter from 'vue-router'

const Category = ()=> import('../views/category/Category')
const Cart = ()=> import('../views/cart/Cart')
const Home = ()=> import('../views/home/Home')
const Profile = ()=> import('../views/profile/Profile')

VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes =[
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router