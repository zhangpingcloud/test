/**
 * 此处存放所有用户相关路由
 */
const Layout = () => import('../layout/index.vue');
// 用户角色
const UserRole = () => import('../views/User/UserRole.vue');
// 用户列表
const UserList = () => import('../views/User/UserList.vue');
// 用户详情
const UserDetail = () => import('../views/User/UserDetail.vue');

export default  {
    path: '/user',
    title: '用户管理',
    name: 'User',
    root: true,
    component: Layout,
    redirect: '/user/user-list',
    children: [
        {
            path: '/user/user-role',
            name: 'UserRole',
            title: '用户角色',
            root: false,
            meta: {
                permission: ['admin', 'teacher'],
                page_title: '用户角色'
            },
            component: UserRole
            // components: {
            //     default: UserRole,
            // },
        }, {
            path: '/user/user-list',
            name: 'UserList',
            title: '用户列表',
            root: false,
            component: UserList,
        }, {
            path: '/user/user-detail',
            title: '用户详情',
            name: 'UserDetail',
            root: false,
            component: UserDetail,
            meta: {
                hidden: true
            }
        },
    ]
}
