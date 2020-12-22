import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import first from '../views/first.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/compute' //重定向
  },
  {
    path: '/compute',
    name: 'compute',
    component: () => import(/* webpackChunkName: "child1" */ '../views/compute.vue')
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import(/* webpackChunkName: "child1" */ '../views/friend.vue')
  },
  {
    path: '/radom',
    name: 'radom',
    component: () => import(/* webpackChunkName: "child1" */ '../views/radom.vue')
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
  linkActiveClass:'active',
  routes
})

export default router
