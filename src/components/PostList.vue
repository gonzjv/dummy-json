<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import { usePostStore } from './../store/post.store';
import { getPostArr } from './../service/dummyJson.service';

const postStore = usePostStore();
const { postArr } = storeToRefs(postStore);

onBeforeMount(async () => {
  const data = await getPostArr();
  postArr.value = data.posts;
  console.log('postArr', postArr.value);
});
</script>
<template>
  <main class="flex flex-col gap-10">
    <h1
      class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-indigo-700"
    >
      Hello from post list!
    </h1>
    <ul class="flex flex-col gap-8">
      <li
        class="h-40 p-5 border-slate-600 border rounded-lg bg-slate-800"
        v-for="post in postArr"
      >
        <h2 class="text-slate-100">
          {{ post.title }}
        </h2>
      </li>
    </ul>
    <!-- <p>{{ postArr }}</p> -->
  </main>
</template>
