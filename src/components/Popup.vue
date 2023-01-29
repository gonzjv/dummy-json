<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDisplayStore } from '../store/display.store';
import PopupAddPost from './PopupAddPost.vue';
import PopupLogin from './PopupLogin.vue';

const displayStore = useDisplayStore();
const { popup } = storeToRefs(displayStore);
</script>
<template>
  <Transition
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <aside
      class="py-5 flex flex-col justify-center items-center gap-5 z-20 blur-0 bg-gray-700 shadow-lg absolute top-[12vh] left-[40vw] w-4/12 h-[500px] overflow-auto rounded-lg"
      v-if="popup.display"
    >
      <PopupAddPost
        v-if="popup.name === 'addPost'"
      />
      <PopupLogin v-if="popup.name === 'login'" />
    </aside>
  </Transition>
</template>
