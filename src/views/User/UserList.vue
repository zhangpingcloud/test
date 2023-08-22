<script>
export default {
    data(){
        return{
            user_list: [
                {
                    id: '122114511555241',
                    name: '拉克丝'
                }
            ]
        }
    },
    watch: {
        $route(){
            console.log('监听路由的变化');
            this.user_list.length = 0;
        }
    },
    methods: {
        clickOnUser(id){
            // this.$router.push({
            //     path: `/user/user-detail/${id}`,
            //     query: {
            //         name: '张三',
            //         age: 18
            //     }
            // })
            this.$router.push({
                name: 'UserDetail',
                // path: `/user/user-detail`,
                query: {
                    name: '张三',
                    age: 18
                },
                params: {
                    userid: id,
                    tag: '路由传参'
                }
            })
        }
    },
    created(){
        console.log('用户列表组件的created');
    },
    mounted(){
        console.log('用户列表组件的mounted');
    },
    // beforeRouteEnter(to, from, next) {
        
    // },
}
</script>
<template>
    <div>
        <h1>用户列表</h1>
    <input type="text">
    <ul>
        <template v-for="user in user_list" :key="user.id">
            <li @click="clickOnUser(user.id)">{{ user.name }}</li>
        </template>
    </ul>
    </div>
</template>