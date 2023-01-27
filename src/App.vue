<script setup lang="ts">
import PostList from './components/PostList.vue';
import HeaderVue from './components/Header.vue';
import Cover from './components/Cover.vue';
import Popup from './components/Popup.vue';
import { useDisplayStore } from './store/display.store';
import { storeToRefs } from 'pinia';

const displayStore = useDisplayStore();
const { isPopupDisplay } =
  storeToRefs(displayStore);
</script>

<template>
  <HeaderVue />
  <PostList
    :class="isPopupDisplay && 'blur-[2px] '"
    class="transition-all duration-700"
  />
  <Cover />
  <Popup />
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
