import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { wc_store } from './store/store'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
// import './input.css'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


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

router.beforeEach((to,from) => {
  const store = wc_store();
  // console.log(from.name, to.name);
});

library.add(fas);

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon).mount('#app');



