<script>
// import IconDg from '../images/icon/icon-dg.png';
// import IconDt from '../images/icon/icon-dt.png';
// import IconSmz from '../images/icon/icon-smz.png';
// import IconHb from '../images/icon/icon-hb.png';
// import IconKl from '../images/icon/icon-kl.png';
import Menu from './Menu.vue';

export default {
    components: {
        Menu
    },
    props: {
        is_collapse: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <div id="aside-component" class="contain-100">
        <!-- <ul class="nav-list">
            <li class="nav-item" :class="{ 'nav-item-collpse': is_collapse }" v-for="nav in nav_list" :key="nav.id">
                <router-link :to="nav.path">
                    <img :src="nav.icon">
                    <span v-show="!is_collapse">{{ nav.title }}</span>
                </router-link>
            </li>
        </ul> -->
        <Menu />
    </div>
</template>

<style scoped>
#aside-component {
    background-color: transparent;
}



.nav-list .nav-item {
    width: 90%;
    padding-left: 10%;

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

.nav-list .nav-item-collpse {
    width: auto;
    padding: 0 20px;


}

.nav-list li:first-child {
    margin-top: 0;
}

.nav-list li:hover {
    background-color: #fff;
    color: #001428;
}
.nav-list a {
    text-decoration: none;
    color: #fff;
    display: block;
    width: 100%;
    height: 100%;
}
.nav-list li:hover a{
    color: #001428;
}
.nav-list li img {
    width: 20px;
    margin-right: 8px;
    vertical-align: middle;
}</style>