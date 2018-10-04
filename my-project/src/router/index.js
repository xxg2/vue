import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Cart from '@/pages/Cart.vue'
import Explorer from '@/pages/Explorer.vue'
import Me from '@/pages/Me.vue'
import BookDetails from '@/pages/BookDetails.vue'
import Main from '@/pages/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'explorer',
          name: 'Explorer',
          component: Explorer
        },
        {
          path: 'me',
          name: 'Me',
          component: Me
        }
      ]
    },
    {
      path: '/books/:id',
      name: 'BookDetails',
      component: BookDetails
    }
  ]
})
