
<script>
// import { routes } from '../router';
import routes, { getShowRoutes } from '../utils/routes';

import MenuItem from './MenuItem.vue';
import SubMenu from './SubMenu.vue';
export default{
    components: {
        MenuItem,
        SubMenu
    },
    data(){
        return {
            nav_list: [],
        }
    },
    created(){
        this.nav_list = getShowRoutes(routes)
    },
    computed: {
        
    }
}
</script>
<!-- 
    只需要判断当前路由的root属性是否是true，如果是false则使用router-link跳转，如果是true，则使用二级菜单
 -->
<template>
    <div class="menu">
        <template v-for="nav in nav_list" :key="nav.path">
            <component v-if="!nav?.meta?.hidden" :is="(nav.children.length > 1) ? 'SubMenu' : 'MenuItem'" :route="(nav.children.length > 1) ? nav : nav.children[0]"></component>
        </template>
    </div>
</template>
<style scoped>
.menu{
    width: 100%;
    height: auto;
}
</style>