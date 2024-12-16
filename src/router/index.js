import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/serve',
      name:'service',
      component: () => import('../views/ServicePage.vue')
    },
    {
      path: '/mdas',
      name: 'Mdas',
      component: () => import('../views/MdasPage.vue')
    },
    {
      path: '/news',
      name: 'newsp',
      component: () => import('../views/NewsPage.vue')
    },
    {
      path:'/contact',
      name: 'Contacts',
      component: () => import('../views/ContactPage.vue')
    },
    {
      path:'/govt',
      name: 'government',
      component: () => import ('../views/OpenGovt.vue')
    },
    {
      path: '/emergence',
      name : 'EmergencyNo',
      component: () => import ('../views/EmergencyNo.vue')
    }

  ],
  
  
})

export default router
