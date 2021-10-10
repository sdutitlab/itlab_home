import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import Particles3 from "particles.vue3"
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css"
import  "@element-plus/icons"
const app= createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(Particles3);
app.use(AOS)
app.mount('#app')
