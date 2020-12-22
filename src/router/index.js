import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import first from '../views/first.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/first',
    name: 'Home',
    component: first,
    children: [
      {
        path: '/first/child1',
        name: 'child1',
        component: () => import(/* webpackChunkName: "child1" */ '../views/child1.vue')
      },
      {
        path: '/first/child2',
        name: 'child2',
        component: () => import(/* webpackChunkName: "child1" */ '../views/child2.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
