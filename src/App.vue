<script>
// import Card from './components/Card.vue';
// import Component08171 from './views/08-17/01作业.vue';
// import Component08172 from './views/08-17/02Props.vue';
import Layout from './layout/index.vue';
export default {
  props: [],
  components: {
    // Card
    // Component08171
    // Component08172
    Layout
  },
  data(){
    return {
      title: '通过Vite构建工具启动vue项目',
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
    <Layout>
      <!-- 路由 -->
      <div style="width: 30px;height: 3000px;background-color: red;">

      </div>
    </Layout>
</template>

<style>

</style>
