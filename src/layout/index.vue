<script>
export default{
    props: {
        is_collapse: {
            type: Boolean,
            default: () => false
        }
    },
    data(){
        return {
            // is_collapse: false
        }
    },
    
}
</script>
<template>
    <div id="layout">
        <!-- 两栏布局，左侧固定，右侧自适应 -->
        <div id="layout-left" :style="{ width: is_collapse ? '65px': '240px'}">
            <slot name="layout-aside"></slot>
        </div>
        <div id="layout-right">
            <div id="layout-header">
                <slot name="layout-header"></slot>
            </div>
            <div id="tag-list">
                <div class="tag">首页</div>
                <div class="tag">用户列表</div>
            </div>
            <div id="layout-main">
                    <slot></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
#layout {
    width: 100vw;
    height: 100vh;
    background-color: #f8f4ed;
    /* 利用弹性布局，让layout-left和layout-right左右排列 */
    /* 利用弹性布局的特征，让right被挤压 */
    display: flex;

}

#layout div {
    border-radius: 2px;
}

#layout-left {
    width: 240px;
    background-color: #001428;
    flex-shrink: 0;
    transition: all .1s ease-out;

}

#layout-right {
    width: 100%;

    background-color: #f5f7f9;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
}

#layout-header {
    height: 65px;
    background-color: #fff;
    box-shadow: 0 1px 4px #00152914;
    flex-shrink: 0;
}



#tag-list {
    height: 40px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: 6px 10px;
}

#tag-list>.tag {
    padding: 0 16px;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    font-size: 14px;
}

#tag-list>.tag:not(:last-child) {
    margin-right: 6px;

}
#layout-main {
    height: 100%;
    margin: 0 10px;
    /* background-color: #d2568c; */
    background-color: #fff;
    overflow-y: auto;
    
}
</style>