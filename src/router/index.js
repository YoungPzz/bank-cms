import { createRouter, createWebHashHistory } from "vue-router";
import main from "../views/main/main.vue";
import account from "../views/main/menu/account/account";
import bussiness from "../views/main/menu/bussiness/bussiness";
import customer from "../views/main/menu/customer/customer";
import employment from "../views/main/menu/employment/employment";
import loans from "../views/main/menu/loans/loans";
import pay from "../views/main/menu/pay/pay";
import login from "../views/login/login.vue";
const routes = [
  {
    path: '/',
    redirect: '/main/pay' 
  },
  {
    path:'/login',
    component:login
  },
  {
    path: "/main",
    name: "main",
    component: main,
    children: [
      {
        path: "bussiness",
        name: "bussiness",
        component: bussiness,
      },
      {
        path: "customer",
        name: "customer",
        component: customer,
      },
      { path: "employment", name: "employment", component: employment },
      { path: "loans", name: "loans", component: loans },
      { path: "pay", name: "pay", component: pay },
      { path: "account", name: "account", component: account },
    ],
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
