import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        components: () => import('./views/Home.vue'),
        meta: {
            requiresAunth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        components: () => import('./views/Login.vue'),
        meta: {
            requiresAunth: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        components: () => import('./views/Register.vue'),
        meta: {
            requiresAunth: true
        }
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  })

export default router