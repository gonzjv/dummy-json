import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies';

const app = createApp(App);

app.use(VueCookies, { expires: '1h' });
app.use(createPinia());
app.mount('#app');
