<script>
import MenuItem from './MenuItem.vue';
export default{
    props: {
        route: {
            type: Object,
            default: () => ({
                path: '/',
                title: '未知路由'
            })
        }
    },
    components: { MenuItem },
    data(){
        return{
            collapsed: false
        }
    },
    methods:{
        triggerCollapse(){
            this.collapsed = !this.collapsed;
        }
    },
    computed: {
        is_collapse(){
            return this.$store.state.collapse
        }
    }
}
</script>

<template>
    <ul>
        <li class="submenu-title" @click="triggerCollapse"  :style="{ 'text-align': is_collapse ? 'center': 'left', 'padding-left':  is_collapse ? '0': '12px'}">
            <i v-if="route?.meta?.icon" class="iconfont nav-iconfont" :class="[route?.meta?.icon]"></i>
            <template v-if="!is_collapse">
                <b class="nav-title">{{ route.title }}</b> <span :style="{transform: !collapsed ? 'rotate(180deg)': 'rotate(0deg)'}"> <i class="iconfont icon-arrow-up-bold"></i> </span>
            </template>
        </li>
        <ul v-if="!is_collapse" class="submenu-list" :style="{height: collapsed ? (route.children.length * 56 + 'px') : 0}">
            <template v-for="child in route.children">
                <li v-if="!child?.meta?.hidden">
                    <menu-item :route="child"></menu-item>
                </li>
            </template>
        </ul>
    </ul>
</template>

<style scoped>
.submenu-title{
    width: 90%;
    /* padding-left: 24px; */
    /* padding-right: 10%; */
    display: block;
    text-decoration: none;

    margin: 0 auto;
    line-height: 48px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: all .2s ease-out;
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;
    white-space: nowrap;

    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    position: relative;
    user-select: none;
}
.submenu-title > span{
    position: absolute;
    right: 12px;
    top: 0;
    transform: translateY(-50%);
    transition: all .1s linear;
}
.submenu-list{
    padding-left: 24px;
    overflow: hidden;
    transition: height .1s ease-out;
    user-select: none;
}
</style>