import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home.vue'),
        meta: {
            requiresAuth: true,
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

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //Authentication Check 
        const token = localStorage.getItem('token')

        if (token) {
            //Check if token is valid
            next()
        }

        return next('/login')
    }

    next()
})

export default router