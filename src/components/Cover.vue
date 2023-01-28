<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDisplayStore } from '../store/display.store';

const store = useDisplayStore();
const { popup } = storeToRefs(store);
</script>
<template>
  <aside
    @click="
      store.$patch({
        popup: { display: false, name: '' },
      })
    "
    v-if="popup.display"
    class="z-10 w-full h-full absolute left-0 top-0"
  ></aside>
</template>
