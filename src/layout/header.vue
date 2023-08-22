<script>
import IconSS from '../images/icon/icon-ss.png';
import IconPS from '../images/icon/icon-ps.png';
import {not_valid_list} from '../router'
export default{
    props: {
        is_collapse: {
            type: Boolean,
            default: () => false
        }
    },
    data(){
        return {
        }
    },
    computed: {
        current_icon(){
            return this.is_collapse ? IconSS : IconPS
        }
    },
    methods: {
        clickOnHeaderIcon(){
            // console.log(this.is_collapse);
            this.$emit('handleClickOnHeaderIcon', {
                is_collapse: !this.is_collapse
            })
        },
        logout(){
            localStorage.clear();
            sessionStorage.clear();
            const routes = this.$router.getRoutes();
            for(let route of routes){
                if(!not_valid_list.includes(route.name)){
                    this.$router.removeRoute(route.name)
                }
            }
            this.$router.replace('/login')
        }
    },
    created(){
        // console.log(IconSS);
    }
}
</script>

<template>
    <div id="header-component" class="contain-100">
        <div id="header-left">
            <img @click="clickOnHeaderIcon" :src="current_icon" alt="收起">
        </div>
        <div id="header-right">
            <button @click="logout">退出登录</button>
        </div>
    </div>
</template>

<style scoped>
#header-component{
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
}
#header-left{
    padding-left: 20px;
    display: flex;
    align-items: center;
}
#header-left > img{
    width: 24px;
    cursor: pointer;
}
</style>