<script>
export default{
    // props: ['modal_config'],
    props: {
        config: {
            type: Object,
            default: () => {
                return {
                    title: '',
                    type: 1,
                    x: 0,
                    y: 0
                }
            }
        }
    },
    data(){
        return {
            modal_show: false
        }
    },
    methods: {
        closeModal(){
            this.modal_show = false;
        },
        save(){
            this.$emit('save',{
                type: this.config.type
            })
        }
    }
}
</script>

<template>
    <div class="modal-masked" v-if="modal_show">
        <div class="modal" :style="{left: config.x + 'px', top: config.y + 'px'}">
            <h1 class="modal-title">{{config.title}}</h1>
            <div class="modal-content">
                <slot :readonly="config.type === 3">暂无内容</slot>
            </div>
            <div class="modal-operation">
                <button @click="closeModal">关闭</button>
                <button @click="save">保存</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-masked{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    /* display: flex;
    justify-content: center;
    align-items: center; */
}
.modal-masked > .modal {
    min-width: 400px;
    max-width: 800px;
    width: 30%;
    background-color: #fff;
    border-radius: 3px;
    padding: 32px;
    box-sizing: border-box;
    position: relative;
    animation: fade-in .3s ease-out both;
    position: absolute;
    transform: translate(-50%, -50%);
}
@keyframes fade-in {
    0%{
        opacity: 0;
        transform: scale(0.5) translate(-50%, -50%);
    }
    30%{
        opacity: 0;
        
    }
    /* 75%{
        opacity: 1;
        left: 50%;
        top: 50%;
        transform: scale(1.1) translate(-50%, -50%);
    } */
    100%{
        opacity: 1;
        left: 50%;
        top: 50%;
        transform: scale(1) translate(-50%, -50%);
        
    }
}
.modal-masked > .modal > .modal-title{
    font-size: 24px;
    font-weight: bold;
}
.modal-masked > .modal > .modal-content{
    padding: 18px 0;
}
.modal-masked > .modal > .modal-operation{
    display: flex;
    justify-content: flex-end;
}
</style>