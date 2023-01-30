<script setup lang="ts">
import { reactive, toRefs } from 'vue';

const state = reactive({
  searchString: '',
});

const handleSubmit = async () => {};

const { searchString } = toRefs(state);
</script>
<template>
  <form
    class="w-1/3 h-12 flex justify-center items-end border-b border-b-sky-200"
    @submit.prevent="handleSubmit"
  >
    <input
      required
      v-model="searchString"
      class="w-full rounded-lg bg-transparent h-8 p-3 placeholder:italic placeholder-gray-400"
      type="text"
      placeholder="Search..."
    />
  </form>
</template>
