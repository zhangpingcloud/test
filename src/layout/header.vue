<script>
import IconSS from '../images/icon/icon-ss.png';
import IconPS from '../images/icon/icon-ps.png';
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