import { createApp } from 'vue';
import './style.css';
import VueSplide from '@splidejs/vue-splide';
import App from './App.vue';
// Default theme
import '@splidejs/vue-splide/css';

createApp(App).use(VueSplide).mount('#app');
