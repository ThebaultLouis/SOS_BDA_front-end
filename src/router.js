import Vue from 'vue'
import Router from 'vue-router'
import AllProducts from '@/components/AllProducts'
import CartCheckout from '@/components/CartCheckout'
import Confirmation from '@/views/Confirmation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation
    }
  ]
})
