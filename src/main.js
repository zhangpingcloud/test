// 在main.js中导入css文件，可以应用到全局样式
import './styles/reset.css'
import './assets/main.css'
import './styles/iconfont.css'
// import { registerPermissionDirective } from './utils/directives'
// 从vue中导入createApp用来创建vue实例
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Modal from './components/Modal.vue';
// 原本createApp中应该放置一个选项式对象，
// 由于使用了构建工具，通过import导入的vue文件，会自动被转换成选项式对象
const app = createApp(App)
app.use(router).use(store)
// registerPermissionDirective(app)
app.component('modal', Modal)
app.mount('#app')