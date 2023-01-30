<script setup lang="ts">
import { useDisplayStore } from '../store/display.store';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/vue/24/outline';

const displayStore = useDisplayStore();

const openPopup = (popupName: string) => {
  displayStore.$patch({
    popup: {
      display: true,
      name: popupName,
    },
  });
};
</script>
<template>
  <button
    @click="openPopup('addPost')"
    class="h-12 w-fit flex gap-1 justify-center items-center font-bold bg-transparent border-b border-sky-200 text-slate-400 hover:text-sky-200 transition-all duration-300"
  >
    <ChatBubbleOvalLeftEllipsisIcon class="h-7" />
    <p class="min-w-fit pt-2">Add post</p>
  </button>
</template>
