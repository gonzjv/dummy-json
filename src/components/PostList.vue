<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import { usePostStore } from './../store/post.store';
import { getPostArr } from './../service/dummyJson.service';

const postStore = usePostStore();
const { postArr } = storeToRefs(postStore);

onBeforeMount(async () => {
  postArr.value = await getPostArr();
});
</script>
<template>
  <h1
    class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-indigo-700"
  >
    Hello from post list!
  </h1>
  <p>{{ postArr }}</p>
</template>
