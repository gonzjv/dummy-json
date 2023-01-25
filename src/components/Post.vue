<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useUserStore } from '../store/user.store';
import { IPost } from './../interface/post.interface';

const props = defineProps<{
  postData: IPost;
}>();

const { postData } = props;

const userStore = useUserStore();
const { userArr } = storeToRefs(userStore);

const imgSrc = computed(() => {
  return userArr.value.find(
    (user) => user.id == postData.userId
  )?.image;
});

const firstName = computed(() => {
  return userArr.value.find(
    (user) => user.id == postData.userId
  )?.firstName;
});
</script>

<template>
  <article
    class="h-min p-10 flex flex-col gap-10 items-center max-w-xl text-slate-400 border-slate-600 border rounded-lg bg-slate-800"
  >
    <figure
      class="flex flex-col gap-5 justify-center items-center bg-slate-700 w-40 h-40 rounded-full"
    >
      <img class="w-20" :src="imgSrc" alt="" />
      <figcaption class="font-bold">
        {{ firstName }}
      </figcaption>
    </figure>
    <h2
      class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-indigo-400"
    >
      {{ postData.title }}
    </h2>
    <p class="italic font-thin text-justify">
      {{ postData.body }}
    </p>
  </article>
</template>
