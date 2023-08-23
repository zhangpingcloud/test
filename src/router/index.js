/**
 * 路由是根据开发者提供的页面信息，匹配不同的URL，
 * 当URL发生变化的时候，展示的内容也会发生变化
 * 
 * 
 */
// 图标
// import IconDg from '../images/icon/icon-dg.png';
import all_routes, { initRoutes } from '../utils/routes';

/**
 * 1.导入页面组件
 */
// import Layout from '../layout/index.vue';
const Login = () => import('../views/Login.vue')
const NotFound = () => import('../views/Common/NotFound.vue')


// import UserRole from '../views/User/UserRole.vue';
// import UserList from '../views/User/UserList.vue';
// import UserDetail from '../views/User/UserDetail.vue';
// import HotActive from '../views/Home/HotActive.vue';
// import HotActiveType from '../views/Home/HotActiveType.vue';
// import SubNav from '../views/Home/SubNav.vue';
// import Nav from '../views/Home/Nav.vue';
// import Swiper from '../views/Home/Swiper.vue';
// import Notice from '../views/Home/Notice.vue';
// import NoticeType from '../views/Home/NoticeType.vue';
// import NotFound from '../views/Common/NotFound.vue';

/**
 * 2.定义路由
 * path指当前页面URL，component指在当前URL下需要展示的组件
 */
export const routes = [
    {
        path: '/',
        title: '通用页面',
        root: true,
        children: [
            {
                path: '/login',
                title: '登录',
                name: 'Login',
                root: false,
                meta: {
                    icon: undefined
                },
                component: Login,
            },
            {
                path: '/:pathMatch(.*)*',
                title: '404',
                name: 'NotFound',
                root: false,
                meta: {
                    icon: undefined
                },
                component: NotFound,
            },
        ]
    },
    // {
    //     path: '/common',
    //     title: '数据看板',
    //     name: 'LayoutDashBoard',
    //     root: true,
    //     component: Layout,
    //     redirect: '/dashboard',
    //     children: [
    //         {
    //             path: '/dashboard',
    //             title: '数据看板',
    //             name: 'DashBoard',
    //             root: false,
    //             component: DashBoard,
    //         }
    //     ]
    // },
    // {
    //     path: '/common',
    //     title: '关于项目',
    //     name: 'LayoutCommon',
    //     root: true,
    //     component: Layout,
    //     children: [
    //         {
    //             path: '/about-project',
    //             title: '关于项目',
    //             name: 'AboutProject',
    //             root: false,
    //             component: AboutProject,
    //         }
    //     ]
    // },

    // { path: '/', component: DashBoard, },
    // { path: '/user-role', component: UserRole },
    // { path: '/user-list', component: UserList, title: '用户列表' },
    // { path: '/admin-list', component: UserList, title: '管理员列表' },
    // { path: '/user-detail/:id', component: UserDetail, title: '用户详情' },
    // { path: '/hot-active-type', component: HotActiveType, title: '热门活动分类', icon: IconDg },
    // { path: '/hot-active', component: HotActive, title: '热门活动', icon: IconDg },
    // { path: '/nav', component: Nav, title: '一级标题', icon: IconDg },
    // { path: '/sub-nav', component: SubNav, title: '二级标题', icon: IconDg },
    // { path: '/swiper', component: Swiper, title: '轮播图', icon: IconDg },
    // { path: '/notice-type', component: NoticeType, title: '公告分类', icon: IconDg },
    // { path: '/notice', component: Notice, title: '公告列表', icon: IconDg },
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

/**
 * 3.注册路由实例，并传入配置信息
 */
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {
            top: 0
        }
    }
});
export const not_valid_list = [
    'Login', 'NotFound'
]
// 传入一个函数，函数由beforeEach内部自行调用，调用时会传入to和from两个形参
router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log('前置守卫');
    // console.log(to, from);
    // return false
    // return '/login'
    // console.log(to);
    const routes = router.getRoutes();
    const token = localStorage.getItem('token');
    
    if(token && to.name === 'Login'){
        next('/common');
        return 
    }
    if (token && routes.length === 2) {
        for (let route of all_routes) {
            router.addRoute(route);
        }
        next({
            path: to.path
        })
        return
    }

    
    // 如果要进入的路由在不需要验证的白名单中，允许直接进入
    if (not_valid_list.includes(to.name)) {
        next()
    } else if (!token) {
        next({
            name: 'Login'
        })
    } else {
        // 是匹配所有页面
        next()
    }
});
router.afterEach((to, from) => {
    localStorage.setItem(to.name, to.path)
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
/**
 * 面试题：
 *      问：this.$router和this.$route有什么区别
 *      答：this.$router是挂载在vue实例上的路由实例，代表整个路由实例
 *          this.$route代表的是当前的页面
 * 
 * 动态路由参数：在路径后面使用:拼接参数，使用时直接在相应的位置上加上数据即可
 * 参数会被自动放置到params对象中
 * 使用动态路由参数时，组件不会被重新销毁重建，而是在原有基础上进行内容更新
 * 也意味着组件的生命周期钩子不会被调用。
 * 如果多个页面互相切换则会销毁上一次的组件重建下一次组件
 * 如果是使用的同一个组件的页面，为了优化性能，并不会销毁重建组件，
 * 由于data等选项是在created之前就初始化成功，此时，data并不会被重新初始化，数据也就不会变化
 * 由于dom也不会被销毁，表单，表格等内容，也不会发生变化
 * 解决方案：通过侦听器监听route的变化对数据手动初始化
 */
/**
 * 嵌套路由
 * 在app.vue中的router-view只能显示一级路由，也就是直接在router实例中注册的顶级路由
 * 而每个路由都有一个children属性，表示子路由，子路由具有和父路由对象一模一样的结构
 * 但是，子路由不能直接显示，需要在父路由中使用router-view
 * 在给子路由设置path时，可不带/，会自动拼接父路由
 */
/**
 * 面试题
 * 问：vue-router路由跳转的原理是什么？
 * 答：结合HTML5原生的history对象的原理。go/forward/back
 */
/**
 * 新版vue-router@4已经逐渐弃用一些旧的写法，比如使用未在动态路由参数中声明的路由参数
 * 要求，只使用动态路由参数或者查询字符串，不要使用未声明的路由参数
 * https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22
 */
/**
 * 重定向
 * 给路由对象添加redirect属性，当访问对应path时，页面会自动重定向到redirect指向的路径
 * 别名
 * 给路由对象添加alias属性，用户可直接通过alias设置的路径进行访问
 */
/**
 * 路由模式
 * hash模式
 * h5模式
 * 
 * hash模式使用锚点值进行路径匹配，路由仅仅是锚点
 * h5模式使用正常的路径，但是在部署到服务器之后，由于是单页面应用，刷新之后肯定是404
 * 需要使用特殊的配置修改服务器
 */
/**
 * 路由守卫
 * 1.全局前置守卫 在进入对应的路由之前进行守卫
 *   接收一个函数作为参数，函数同样接收三个参数
 *   1.to 代表即将要进入的路由
 *   2.from 代表已经离开的路由
 *   3.next
 * 
 *   返回值有两种场景：
 *   1.返回false 将不会进入页面
 *   2.返回URL
 *      需求，在进入页面之前判断用户是否有权限进入，或者用户是否登录
 *      如果没有权限则跳转到登录页，如果有权限则进入
 *      用户在每进行一个操作时，都要被验证是否有权限。
 *      1.进入页面 由前端判断是否存在token，如果存在则允许进入，不存在则重定向到登录页
 *      2.调用服务端api 自动附带token，服务端验证token是否有效，如果有效返回数据，无效返回登录失败，前端重定向到登录页，清空缓存
 * 2.全局后置钩子 进入路由之后调用，不接收第三个参数，路由发生变化之后，不会再修改
 *      一般用于统计用户访问记录
 */
/**
 * 动态路由，当一些页面的权限需要判断时，需要在特定的场景下，对用户页面进行过滤，然后动态添加到路由中
 * 初始只加载404和login两个页面，登录成功之后，
 * 1.前端路由，根据用户权限对路由列表进行过滤
 * 2.后端路由，服务端直接返回路由列表，前端直接进行注册
 * 
 * 使用addRoute添加路由
 */
export default router