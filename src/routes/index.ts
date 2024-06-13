import { createRouter, createWebHistory } from "vue-router";
import site from "../views/site.vue";
import preview from '../views/preview.vue'

export const router = createRouter({
    routes: [
        {
            path: '/',
            component: site,
        },
        {
            path: '/preview',
            component: preview,
        },
      ],
      history: createWebHistory()
})