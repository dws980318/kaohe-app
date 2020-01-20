<template>
  <div class="content">
      <h1>我的{{$route.params.id}}</h1>
    <!-- <div class="pages">
      <router-link to="/home/move/mine/Detail">这是2</router-link>

      <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
      </transition>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.content {
  width: 100%;
  height: 100%;
}
/* 
.pages {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fd16f2;
  height: 100%;
  width: 100%;
} */
</style>
