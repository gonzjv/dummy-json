<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import { usePostStore } from './../store/post.store';
import { useUserStore } from './../store/user.store';
import { getPostArr } from '../service/post.service';
import { getUserArr } from '../service/user.service';

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
      <li
        class="h-min p-10 flex flex-col gap-10 items-center max-w-xl border-slate-600 border rounded-lg bg-slate-800"
        v-for="post in postArr"
        :key="post.id"
      >
        <figure
          class="flex flex-col gap-5 justify-center items-center bg-slate-700 w-40 h-40 rounded-full"
        >
          <img
            class="w-20"
            :src="
              userArr.find(
                (user) => user.id == post.userId
              )?.image
            "
            alt=""
          />
          <figcaption>
            {{
              userArr.find(
                (user) => user.id == post.userId
              )?.firstName
            }}
          </figcaption>
        </figure>
        <h2
          class="text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-indigo-300"
        >
          {{ post.title }}
        </h2>
        <p class="text-justify">
          {{ post.body }}
        </p>
      </li>
    </ul>
  </main>
</template>
