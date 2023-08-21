<script>
import Tab from '../components/Tab.vue';
export default {
    components: {
        Tab
    },
    data(){
        return{
            modal_config: {
                type: 1,
                title: '测试弹框'
            }
        }
    },
    methods: {
        showModal(){
            this.$refs.modal.modal_show = true;
        },
        hideModal(){
            this.$refs.modal.modal_show = false;
        },
    }
}
</script>

<template>
    <!-- <button @click="showModal">显示modal</button>
    <button @click="hideModal">隐藏modal</button>
    <modal ref="modal" :config="modal_config"></modal> -->
    <!-- <Tab/> -->
    <div>
        <slot></slot>
    </div>
</template>