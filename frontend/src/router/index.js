import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            /* path: '/',
            name: 'home',
            component: HomeView */
        },
        {
            path: '/',
            name: 'Home',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/HomePage.vue')
        },
        {
            path: '/aboutus',
            name: 'AboutUs',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/AboutUs.vue')
        },
        {
            path: '/ordernow',
            name: 'OrderNow',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/OrderNow.vue')
        },
        {
            path: '/partners',
            name: 'Partners',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/Partners.vue')
        }
    ]
})

export default router