<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.slideInDown,
.slideOutUp,
.fadeIn,
.fadeOut,
.slideInRight,
.slideOutRight,
.slideInUp,
.slideOutDown {
  animation-duration: 300ms;
}
</style>
