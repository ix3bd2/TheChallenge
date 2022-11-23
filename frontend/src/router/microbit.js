export default [{
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
];