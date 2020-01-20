<template>
  <div class="content">
    <div class="pages">
      <h1 @click="footerAction">尾部</h1>
      <router-link to="/home/move">这是1</router-link>
      <router-link to="/home/Detail">这是2</router-link>
    </div>

     <!-- <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">  
        <router-view></router-view>
    </transition>   -->

    <div style="display: flex;flex-direction: row;">
        <div id="left" style="width: 220px;height: 100%">
          <router-view class="leftRV" name="left_router"></router-view><!--子组件加载到--内层router-view-->
        </div>
        <div id="right" style="width: 100%;height: 100%;">
          <router-view class="rightRV" name="right_router"></router-view><!--子组件加载到--内层router-view-->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    footerAction() {
      this.$router.push("/home/move");
    }
  }
};
</script>

<style>
.content{
    width: 100%;
    height: 100%;
}
.pages {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #55ffaa;
  height: 100%;
  width: 100%;
}
</style>
