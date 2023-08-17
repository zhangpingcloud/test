<script>
/**
 * 一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props
 * 
 * 在声明props时，使用camelCase小驼峰式
 * 
 * props可以写成对象的形式：
 * 1. type用于设置props的类型，与js数据类型保持一致
 */
export default {
    props: {
        age: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true,
            default: () => '佚名'

        },
        isMarried: {
            type: Boolean,
            default: () => true
        },
        detail: {
            type: Object,
            default: () => ({})
        },
        list: {
            type: Array
        }
    },
    data(){
        return {
            content: 'hello world'
        }
    },
}
</script>

<template>
    <!--  -->
    <button class="button" @click="$emit('changeData', {})">
        <slot name="icon"></slot>
        <slot name="default">默认按钮</slot>
    </button>
</template>

<style scoped>
/* 

*/
.button{
    display: flex;
    align-items: center;
    
}
</style>