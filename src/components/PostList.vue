<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import { usePostStore } from './../store/post.store';
import { getPostArr } from '../service/post.service';
import Post from './Post.vue';

const postStore = usePostStore();
const { postArr } = storeToRefs(postStore);

onBeforeMount(async () => {
  const { posts } = await getPostArr();
  postArr.value = posts;
  console.log('postArr', postArr.value);
});
</script>
<template>
  <main
    class="flex flex-col gap-10 w-full items-center"
  >
    <ul class="flex flex-col gap-16">
      <li v-for="post in postArr" :key="post.id">
        <Post :post-data="post" />
      </li>
    </ul>
  </main>
</template>
