<script setup lang="ts">
import { IPost } from './../interface/post.interface';
import User from './User.vue';

const props = defineProps<{
  postData: IPost;
}>();

const { postData } = props;
</script>

<template>
  <article
    class="h-min p-10 flex flex-col gap-10 items-center max-w-xl text-slate-400 border-slate-600 border rounded-lg bg-slate-800"
  >
    <User :user-id="postData.userId" />
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
