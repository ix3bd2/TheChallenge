export default [
  {
    name: "KlantList",
    path: "/klants/",
    component: () => import("../components/klant/List.vue"),
  },
  {
    name: "KlantCreate",
    path: "/klants/create",
    component: () => import("../components/klant/Create.vue"),
  },
  {
    name: "KlantUpdate",
    path: "/klants/edit/:id",
    component: () => import("../components/klant/Update.vue"),
  },
  {
    name: "KlantShow",
    path: "/klants/show/:id",
    component: () => import("../components/klant/Show.vue"),
  },
];
