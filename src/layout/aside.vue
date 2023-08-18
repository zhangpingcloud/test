<script>
import IconDg from '../images/icon/icon-dg.png';
import IconDt from '../images/icon/icon-dt.png';
import IconSmz from '../images/icon/icon-smz.png';
import IconHb from '../images/icon/icon-hb.png';
import IconKl from '../images/icon/icon-kl.png';
export default {
    props: {
        is_collapse: {
            type: Boolean,
            default: () => false
        }
    },
    data(){
        return {
            nav_list: [
                {
                    id: 1,
                    icon: IconDg,
                    label: '数据看板'
                },
                {
                    id: 2,
                    icon: IconDt,
                    label: '用户类型'
                },
                {
                    id: 3,
                    icon: IconSmz,
                    label: '用户列表'
                },
                {
                    id: 4,
                    icon: IconHb,
                    label: '订单列表'
                },
                {
                    id: 5,
                    icon: IconKl,
                    label: '商品列表'
                },
            ]
        }
    }
}
</script>

<template>
    <div id="aside-component" class="contain-100">
        <ul class="nav-list">
            <li class="nav-item" :class="{ 'nav-item-collpse' : is_collapse}" v-for="nav in nav_list" :key="nav.id">
                <img :src="nav.icon">
                <span v-show="!is_collapse">{{ nav.label }}</span>
            </li>
        </ul>
    </div>    
</template>

<style scoped>
#aside-component{
    background-color: transparent;
}
.nav-list > .nav-item{
    width: 90%;
    padding-left: 20%;

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
.nav-list > .nav-item-collpse{
    width: auto;
    padding: 0 20px;

    
}
.nav-list > li:first-child{
    margin-top: 0;
}
.nav-list > li:hover{
    background-color: #fff;
    color: #001428;
}
.nav-list > li > img{
    width: 20px;
    margin-right: 8px;
    vertical-align: middle;
}
</style>