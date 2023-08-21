<script>
// import Card from './components/Card.vue';
// import Component08171 from './views/08-17/01作业.vue';
// import Component08172 from './views/08-17/02Props.vue';
import Layout from './layout/index.vue';
import LayoutAside from './layout/aside.vue';
import LayoutHeader from './layout/header.vue';
import LayoutMain from './layout/main.vue';
export default {
  props: [],
  provide (){
    return {
      message: 'hello world'
    }
  },
  components: {
    // Card
    // Component08171
    // Component08172
    Layout,
    LayoutAside,
    LayoutHeader,
    LayoutMain
  },
  data(){
    return {
      title: '通过Vite构建工具启动vue项目',
      is_collapse: false
      // project_list: [
      //   {
      //     title: '英雄联盟',
      //     content: '我也不知道些什么东西，你看着办'
      //   },
      //   {
      //     title: 'QQ飞车',
      //     content: '我也不知道些什么东西，你看着办'
      //   },
      //   {
      //     title: '梦幻西游',
      //     content: '我也不知道些什么东西，你看着办'
      //   },
      // ]
    }
  },
  methods: {
    change(data){

    },
    changeCollapse(data){
      this.is_collapse = data.is_collapse;
    }
  },
}
</script>

<template>
    <!-- <h1>{{ title }}</h1>
    <card v-for="(project, index) in project_list" :key="index" :title="project.title" :content="project.content"></card>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="card">

    </div> -->
    <!-- <Component08171 /> -->
    <!-- <Component08172 :age="58" v-on:changeData="change">
      
       <template v-for="i in 10">
          <img v-if="i % 2"  src="./images/add-circle.png" width="16">
       </template>
       <span>新增</span>
    </Component08172> -->
    <Layout :is_collapse="is_collapse">
      <!-- 路由 -->
      <!-- <div style="width: 30px;height: 3000px;background-color: red;">

      </div> -->
      <template v-slot:layout-aside>
        <layout-aside :is_collapse="is_collapse" />
      </template>
      <template v-slot:layout-header>
        <layout-header @handleClickOnHeaderIcon="changeCollapse" :is_collapse="is_collapse" />
      </template>
      <template v-slot:default>
        <layout-main>
          <!-- RouterView是路由的出口 -->
          <router-link to="/">
            <button>看板</button>
          </router-link>
          <router-link to="/user-role">用户权限</router-link>
          <router-link to="/user-list">用户列表</router-link>
          <router-view></router-view>
        </layout-main>
      </template>
    </Layout>
</template>

<style>
h1{
  font-size: 48px;
}
</style>
