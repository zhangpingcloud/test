<script>
import { mapState, mapGetters  } from 'vuex';
export default {
    data() {
        return {

        }
    },
    props: {

    },
    inject: {

    },
    created() {
        // console.log(this.$router);
        // console.log(this.$store.state.count);
    },
    computed: {
        // count(){
        //     return this.$store.state.count
        // },
        // color(){
        //     return this.$store.state.color
        // },
        // token(){
        //     return this.$store.state.token
        // },
        // ...mapState(['count', 'color', 'token'])
        // ...mapState({
        //     store_count: state => state.count,
        //     store_token: (state) => {
        //         return state.token
        //     },
        //     // real_price: state => state.price * state.discount
        // }),
        // ...mapGetters(['real_price'])
        
    }
}
</script>
<template>
    <div>
        <!-- <h1>看板:{{ count }} {{ color }} {{ token }}</h1>
        <button @click="$store.commit('increment')">增加</button> -->
        <h1>实际价格为</h1>
    </div>
</template>