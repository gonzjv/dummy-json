<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import { usePostStore } from './../store/post.store';
import { useUserStore } from './../store/user.store';
import { getPostArr } from '../service/post.service';
import { getUserArr } from '../service/user.service';
import Post from './Post.vue';

const postStore = usePostStore();
const userStore = useUserStore();
const { postArr } = storeToRefs(postStore);
const { userArr } = storeToRefs(userStore);

onBeforeMount(async () => {
  const { posts } = await getPostArr();
  postArr.value = posts;
  console.log('postArr', postArr.value);

  const { users } = await getUserArr();
  userArr.value = users;
  console.log('userArr', userArr.value);
});
</script>
<template>
  <main class="flex flex-col gap-10">
    <h1
      class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-indigo-700"
    >
      post list
    </h1>
    <ul class="flex flex-col gap-16">
      <li v-for="post in postArr" :key="post.id">
        <Post :post-data="post" />
      </li>
    </ul>
  </main>
</template>
