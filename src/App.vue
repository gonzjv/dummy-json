<script setup lang="ts">
import PostList from './components/PostList.vue';
import HeaderVue from './components/Header.vue';
</script>

<template>
  <HeaderVue />
  <PostList />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
