<script setup lang="ts">
import { IPost } from './../interface/post.interface';
import CommentList from './CommentList.vue';
import User from './User.vue';

const props = defineProps<{
  postData: IPost;
}>();

const { postData } = props;
</script>

<template>
  <article
    class="h-min flex flex-col gap-10 p-10 max-w-3xl text-slate-400 border-slate-600 border rounded-lg bg-gray-800"
  >
    <section class="flex gap-10 items-center">
      <User :user-id="postData.userId" />
      <div class="w-2/3">
        <h2
          class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-indigo-400"
        >
          {{ postData.title }}
        </h2>
        <p
          class="italic font-thin text-justify border-slate-600 border-b p-4"
        >
          {{ postData.body }}
        </p>
      </div>
    </section>
    <CommentList :post-id="postData.id" />
  </article>
</template>
