import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,Navbar,Footer
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/allBookings',
    name: 'allBookings',
    component: () => import( '../views/AllBookings.vue')
  },
  {
    path: '/singleBooking',
    name: 'singleBooking',
    component: () => import('../views/SingleBooking.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  ,
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
