/**
 * 路由是根据开发者提供的页面信息，匹配不同的URL，
 * 当URL发生变化的时候，展示的内容也会发生变化
 * 
 * 
 */

/**
 * 1.导入页面组件
 */
import DashBoard from '../views/DashBoard.vue';
import UserRole from '../views/User/UserRole.vue';
import UserList from '../views/User/UserList.vue';

/**
 * 2.定义路由
 * path指当前页面URL，component指在当前URL下需要展示的组件
 */
const routes = [
    { path: '/', component: DashBoard },
    { path: '/user-role', component: UserRole },
    { path: '/user-list', component: UserList },
]

/**
 * 3.注册路由实例，并传入配置信息
 */
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

/**
 * 4.导出路由实例，提供给app调用
 * http://localhost:5173/#/user-list
 * 协议：http
 * 域名：localhost
 * 端口：5173
 * 路径：/
 * 锚点：/user-list
 */

export default router