import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import './input.css'
import App from './App.vue'


const pinia = createPinia();
const app = createApp(App);
const routes = [
  { path: "/", name: "index", component: () => import("./views/welcome.vue") },
  { path: "/groups", name: "groups", component: () => import("./views/groups.vue") },
  { path: '/:pathMatch(.*)*', name: "not_found", component: () => import("./views/404page.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from) => {

});

app.use(router);
app.use(pinia);
app.mount('#app');



