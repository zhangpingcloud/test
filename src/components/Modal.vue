<script>
export default {
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
    data() {
        return {
            modal_show: false,
            modal_content_show: false
        }
    },
    watch: {
        modal_show(value){
            // 监听modal_show的变化，利用nextTick方法，在modal_show变化后的下一次dom更新之后修改modal_content_show
            this.$nextTick(() => {
                this.modal_content_show = value;
            })
        }
    },
    methods: {
        closeModal() {
            this.modal_content_show = false;
            // this.$nextTick(() => {
            //     this.modal_show = false;
            // })
            setTimeout(() => {
                this.modal_show = false;
            }, 100);
        },
        save() {
            this.$emit('save', {
                type: this.config.type
            })
        }
    }
}
</script>

<template>
    <div class="modal-masked" v-if="modal_show">
        <Transition name="slide">
            <div class="modal" v-if="modal_content_show" :style="{ left: config.x + 'px', top: config.y + 'px' }">
                <h1 class="modal-title">{{ config.title }}</h1>
                <div class="modal-content">
                    <slot :readonly="config.type === 3">暂无内容</slot>
                </div>
                <div class="modal-operation">
                    <button @click="closeModal">关闭</button>
                    <button @click="save">保存</button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.modal-masked {
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

.modal-masked>.modal {
    min-width: 400px;
    max-width: 800px;
    width: 30%;
    background-color: #fff;
    border-radius: 3px;
    padding: 32px;
    box-sizing: border-box;
    position: relative;
    /* animation: fade-in .3s ease-out both; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

/* 下面我们会解释这些 class 是做什么的 */
.slide-enter-active,.slide-leave-active {
    transition: all .1s ease-out;
}

.slide-enter-from, .slide-leave-to {
    opacity: 0;
    margin-top: 60px;
}
.slide-enter-to, .slide-leave-from {
    opacity: 1;
    margin-top: 0;
}

/* @keyframes fade-in {
    0%{
        opacity: 0;
        transform: scale(0.5) translate(-50%, -50%);
    }
    30%{
        opacity: 0;
        
    }
    100%{
        opacity: 1;
        left: 50%;
        top: 50%;
        transform: scale(1) translate(-50%, -50%);
        
    }
} */
.modal-masked>.modal>.modal-title {
    font-size: 24px;
    font-weight: bold;
}

.modal-masked>.modal>.modal-content {
    padding: 18px 0;
}

.modal-masked>.modal>.modal-operation {
    display: flex;
    justify-content: flex-end;
}
</style>