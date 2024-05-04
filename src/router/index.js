// import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [];

const router = new createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    document.querySelector("body").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
