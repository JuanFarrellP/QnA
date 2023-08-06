import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home.vue'),
        meta: {
            requiresAunth: true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./pages/Register.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router