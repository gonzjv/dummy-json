<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDisplayStore } from '../store/display.store';

const displayStore = useDisplayStore();
const { isPopupDisplay } =
  storeToRefs(displayStore);
</script>
<template>
  <header
    :class="isPopupDisplay && 'blur-[2px] '"
    class="flex justify-between transition-all duration-700"
  >
    <h1
      class="flex justify-start text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-indigo-400"
    >
      post list
    </h1>
    <button
      @click="
        displayStore.$patch({
          isPopupDisplay: true,
        })
      "
      class="bg-transparent border-b border-sky-200 text-slate-400 hover:text-sky-200 transition-all duration-300"
    >
      Add post
    </button>
  </header>
</template>
