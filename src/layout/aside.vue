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

</style>