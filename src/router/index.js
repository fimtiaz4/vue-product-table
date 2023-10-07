import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import Dashboard from "../views/Dashboard.vue";
import test from "../views/test.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/products",
      name: "ProductsView",
      component: ProductsView,
    },
    {
      path: "/test",
      name: "test",
      component: test,
    },
    {
      path: "/product-detail",
      name: "ProductDetailView",
      component: ProductDetailView,
    },
  ],
});

export default router;
