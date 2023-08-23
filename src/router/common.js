const Layout = () => import('../layout/index.vue');
const DashBoard = () => import('../views/DashBoard.vue')
const AboutProject = () => import('../views/AboutProject.vue')

export default [
    {
        path: '/common',
        title: '数据看板',
        name: 'LayoutDashBoard',
        root: true,
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                title: '数据看板',
                name: 'DashBoard',
                root: false,
                meta: {
                    icon: 'icon-data-view'
                },
                component: DashBoard,
            }
        ]
    },
    {
        path: '/common',
        title: '关于项目',
        name: 'LayoutCommon',
        root: true,
        component: Layout,
        children: [
            {
                path: '/about-project',
                title: '关于项目',
                name: 'AboutProject',
                root: false,
                meta: {
                    icon: 'icon-file'
                },
                component: AboutProject,
            }
        ]
    },
]