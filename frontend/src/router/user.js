export default [
  {
    name: "UserList",
    path: "/users/",
    component: () => import("../components/user/List.vue"),
  },
  {
    name: "UserCreate",
    path: "/users/create",
    component: () => import("../components/user/Create.vue"),
  },
  {
    name: "UserUpdate",
    path: "/users/edit/:id",
    component: () => import("../components/user/Update.vue"),
  },
  {
    name: "UserShow",
    path: "/users/show/:id",
    component: () => import("../components/user/Show.vue"),
  },
];
