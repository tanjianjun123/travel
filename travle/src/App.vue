<template>
  <div id="app">
    <keep-alive exclude="City">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

</style>
