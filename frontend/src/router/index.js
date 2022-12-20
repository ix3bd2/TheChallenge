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
            path: '/micro_bits/checkEnergy',
            name: 'checkEnergy',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/checkEnergy.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/Dashboard.vue')
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/login.vue')
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/AboutUs.vue')
        },
        {
            path: '/order',
            name: 'ordernow',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/OrderNow.vue')
        },
        {
            path: '/partners',
            name: 'partners',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../components/Partners.vue')
        },
        {
            name: "KlantList",
            path: "/klants/",
            component: () =>
                import ("../components/klant/List.vue"),
        },
        {
            name: "KlantCreate",
            path: "/klants/create",
            component: () =>
                import ("../components/klant/Create.vue"),
        },
        {
            name: "KlantUpdate",
            path: "/klants/edit/:id",
            component: () =>
                import ("../components/klant/Update.vue"),
        },
        {
            name: "KlantShow",
            path: "/klants/show/:id",
            component: () =>
                import ("../components/klant/Show.vue"),
        },
        {
            name: "EnergiebesparingList",
            path: "/energiebesparings/",
            component: () =>
                import ("../components/energiebesparing/List.vue"),
        },
        {
            name: "EnergiebesparingCreate",
            path: "/energiebesparings/create",
            component: () =>
                import ("../components/energiebesparing/Create.vue"),
        },
        {
            name: "EnergiebesparingUpdate",
            path: "/energiebesparings/edit/:id",
            component: () =>
                import ("../components/energiebesparing/Update.vue"),
        },
        {
            name: "EnergiebesparingShow",
            path: "/energiebesparings/show/:id",
            component: () =>
                import ("../components/energiebesparing/Show.vue"),
        },
        {
            name: "MicroBitList",
            path: "/micro_bits/",
            component: () =>
                import ("../components/microbit/List.vue"),
        },
        {
            name: "MicroBitCreate",
            path: "/micro_bits/create",
            component: () =>
                import ("../components/microbit/Create.vue"),
        },
        {
            name: "MicroBitUpdate",
            path: "/micro_bits/edit/:id",
            component: () =>
                import ("../components/microbit/Update.vue"),
        },
        {
            name: "MicroBitShow",
            path: "/micro_bits/show/:id",
            component: () =>
                import ("../components/microbit/Show.vue"),
        },
        {
            name: "UserList",
            path: "/users/",
            component: () =>
                import ("../components/user/List.vue"),
        },
        {
            name: "UserCreate",
            path: "/users/create",
            component: () =>
                import ("../components/user/Create.vue"),
        },
        {
            name: "UserUpdate",
            path: "/users/edit/:id",
            component: () =>
                import ("../components/user/Update.vue"),
        },
        {
            name: "UserShow",
            path: "/users/show/:id",
            component: () =>
                import ("../components/user/Show.vue"),
        },
    ]
})

export default router