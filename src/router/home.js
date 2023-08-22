/**
 * 此处存放所有用户相关路由
 */
const Layout = () => import('../layout/index.vue');
// 一级导航
const Nav = () => import('../views/Home/Nav.vue');
// 二级导航
const SubNav = () => import('../views/Home/SubNav.vue');
// 轮播图
const Swiper = () => import('../views/Home/Swiper.vue');
// 通知分类
const NoticeType = () => import('../views/Home/NoticeType.vue');
// 通知列表
const Notice = () => import('../views/Home/Notice.vue');
// 热门活动分类
const HotActiveType = () => import('../views/Home/HotActiveType.vue');
// 热门活动
const HotActive = () => import('../views/Home/HotActive.vue');
export default {
    path: '/home',
    title: '网站管理',
    name: 'Home',
    root: true,
    component: Layout,
    redirect: '/home/nav',
    children: [
        {
            path: '/home/nav',
            name: 'Nav',
            title: '一级导航',
            root: false,
            
            component: Nav
        }, {
            path: '/home/sub-nav',
            name: 'SubNav',
            title: '二级导航',
            root: false,
            meta: {
            },
            component: SubNav
        }, {
            path: '/home/swiper',
            title: '轮播图',
            name: 'Swiper',
            root: false,
            component: Swiper,
        }, {
            path: '/home/notice-type',
            title: '通知分类',
            name: 'NoticeType',
            root: false,
            component: NoticeType,
        }, {
            path: '/home/notice',
            title: '通知列表',
            name: 'Notice',
            root: false,
            component: Notice,
        }, {
            path: '/home/hot-active-type',
            title: '热门活动分类',
            name: 'HotActiveType',
            root: false,
            component: HotActiveType,
        },
        {
            path: '/home/hot-active',
            title: '热门活动',
            name: 'HotActive',
            root: false,
            component: HotActive,
        },
    ]
}
