import router from '../router';
import user_routes from '../router/user';
import home_routes from '../router/home';
import common_routes from '../router/common';
export function getShowRoutes(routes) {
    // 如果有hidden且为true，表示要隐藏，取反，将其过滤掉
    // 首先过滤需要隐藏的内容，再通过map对保留下来的路由进行递归处理，处理其子路由
    return routes.filter(route => !route?.meta?.hidden).map(route => {
        if (route.children) {
            return {
                ...route,
                children: getShowRoutes(route.children)
            }
        } else {
            return route
        }
    })
}
export function initRoutes(routes) {
    const remove_list = [];
    for (let route of routes) {
        const remove_item = router.addRoute(route);
        remove_list.push(remove_item)
    }
}
export default [...common_routes, home_routes, user_routes]