<script>
// import Card from './components/Card.vue';
import Component08171 from './views/08-17/01作业.vue';
export default {
  props: [],
  components: {
    // Card
    Component08171
  },
  data(){
    return {
      // title: '通过Vite构建工具启动vue项目',
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

  },
}
</script>

<template>
    <!-- <h1>{{ title }}</h1>
    <card v-for="(project, index) in project_list" :key="index" :title="project.title" :content="project.content"></card>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="card">

    </div> -->
    <Component08171 />
</template>

<style>

</style>
