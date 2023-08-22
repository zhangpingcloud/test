<script>
export default{
    data(){
        return{
            seconds: 2
        }
    },
    mounted(){
        let timer = setInterval(() => {
            this.seconds -= 1;
            if(this.seconds === 0){
                clearInterval(timer);
                this.$router.replace('/login');
            }
        }, 1000)
    }
}
</script>
<template>
    <h1>页面不存在，{{ seconds }}秒之后回到登录页</h1>
</template>