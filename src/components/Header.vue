<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useDisplayStore } from '../store/display.store';
import PostAddBtn from './PostAddBtn.vue';
import LoginButton from './LoginButton.vue';
import SearchBar from './SearchBar.vue';

const displayStore = useDisplayStore();
const { popup } = storeToRefs(displayStore);
</script>
<template>
  <header
    :class="popup.display && 'blur-[2px] '"
    class="flex justify-between items-end transition-all duration-700"
  >
    <h1
      class="flex justify-start items-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-indigo-400"
    >
      postilla
    </h1>
    <nav
      class="flex justify-end items-center gap-10"
    >
      <SearchBar />
      <PostAddBtn />
      <LoginButton />
    </nav>
  </header>
</template>
