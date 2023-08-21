<script>
import CustomInput from './CustomInput.vue';
export default {
    components: {
        CustomInput,
    },
    data() {
        return {
            current_tab: 0,
            tab_list: [
                {
                    index: 0,
                    title: '推荐'
                },
                {
                    index: 1,
                    title: '官方'
                },
                {
                    index: 2,
                    title: '娱乐'
                },
                {
                    index: 3,
                    title: '赛事'
                },
            ],
            current_component: CustomInput,
            user_role: 'ADMIN'
        }
    },
    methods: {
        clickOnTabItem(index) {
            this.current_tab = index;
        }
    },
    computed: {
        input_type(){
            // console.log(this.current_tab);
            if(this.current_tab === 0){
                return 'text'
            }else if(this.current_tab === 1){
                return 'password'
            }
            return 'text'
        }
    }
}
</script>

<template>
    <div class="tab">
        <div class="tab-title">
            <button v-permission="user_role" v-for="tab in tab_list" :key="tab.index" @click="clickOnTabItem(tab.index)">{{ tab.title }}</button>
        </div>
        <!-- <div class="tab-content">
            <keep-alive :max="1">
                <component :is="current_component" :key="current_tab"></component>
            </keep-alive>
        </div> -->
    </div>
</template>
<style>
.tab {
    width: 600px;
    height: 400px;
    margin: 100px auto auto;
    border: 1px solid #bbb5ac;
}

.tab-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 48px;
    background-color: rgb(240, 240, 240);
}
</style>