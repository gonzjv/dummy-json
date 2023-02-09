import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import routes from '~pages';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(VueCookies, { expires: '1h' });
app.use(router);
app.use(createPinia());
app.mount('#app');
