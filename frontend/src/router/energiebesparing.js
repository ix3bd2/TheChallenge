export default [
  {
    name: "EnergiebesparingList",
    path: "/energiebesparings/",
    component: () => import("../components/energiebesparing/List.vue"),
  },
  {
    name: "EnergiebesparingCreate",
    path: "/energiebesparings/create",
    component: () => import("../components/energiebesparing/Create.vue"),
  },
  {
    name: "EnergiebesparingUpdate",
    path: "/energiebesparings/edit/:id",
    component: () => import("../components/energiebesparing/Update.vue"),
  },
  {
    name: "EnergiebesparingShow",
    path: "/energiebesparings/show/:id",
    component: () => import("../components/energiebesparing/Show.vue"),
  },
];
