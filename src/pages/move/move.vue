<template>
  <div class="page">
    <!-- <h1 @click="footerAction">头部</h1>
    <router-link to="/home/move/mine/222">这是1</router-link> -->

    <!-- <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition> -->
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
.page {
  position: absolute;
  top: 0;
  left: 0;
  background: #f1461d;
  height: 100%;
  width: 100%;
}
</style>
