<script>
export default{
    props: {
        route: {
            type: Object,
            default: () => ({
                path: '/',
                title: '未知路由'
            })
        }
    }
}
</script>

<template>
    <router-link class="menu-item" :to="route.path">
        {{ route.title }}
    </router-link>
</template>

<style scoped>
.menu-item{
    width: 90%;
    padding-left: 10%;
    display: block;
    text-decoration: none;

    margin: 6px auto;
    line-height: 48px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: all .2s ease-out;
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;
    white-space: nowrap;
}
.menu-item:hover{
    background-color: #fff;
    color: #001428;
}
</style>