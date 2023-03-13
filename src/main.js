import { createApp, watch } from 'vue'
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
library.add(fas);

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


watch(
  pinia.state,
  (state) => {
    // persist the whole state to the local storage whenever it changes
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
);

router.beforeEach((to,from) => {
  
});

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon).mount('#app');



