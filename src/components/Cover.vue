<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDisplayStore } from '../store/display.store';

const store = useDisplayStore();
const { isPopupDisplay } = storeToRefs(store);
</script>
<template>
  <aside
    @click="
      store.$patch({
        isPopupDisplay: false,
      })
    "
    v-if="isPopupDisplay"
    class="z-10 w-full h-full absolute left-0 top-0"
  ></aside>
</template>
