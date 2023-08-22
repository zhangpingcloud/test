<script>
import routes, { initRoutes } from '../utils/routes';

export default{
    methods: {
        login(){
            // 此处调用登录api
            // this.$router.addRoute(user_routes)
            
            // for(let fn of remove_list){
            //     fn();
            // }
            // console.log(this.$router.getRoutes());
            // initRoutes(routes);
            localStorage.setItem('token', '123456')
            this.$router.push('/common')
        }
    }
}
</script>

<template>
    <h1>登录</h1>
    <button @click="login">登录</button>
</template>