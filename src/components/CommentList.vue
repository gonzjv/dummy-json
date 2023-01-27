<script setup lang="ts">
import {
  reactive,
  toRefs,
  onBeforeMount,
} from 'vue';
import { ICommentResponse } from '../interface/comment.interface';
import { getCommentArr } from '../service/comment.service';
import Comment from './Comment.vue';

// const INIT_COMMENTS = {
//   id: 0,
//   firstName: '',
//   lastName: '',
//   image: '',
// };

const props = defineProps<{
  postId: number;
}>();

const state: ICommentResponse = reactive({
  comments: [],
});
const { comments } = toRefs(state);

onBeforeMount(async () => {
  const response = await getCommentArr(
    props.postId
  );

  comments.value = response.comments;
});
</script>
<template>
  <ul
    class="w-full flex flex-col gap-3 justify-start items-start bg-gray-700 p-5 rounded-lg border border-slate-600"
  >
    <h3
      class="font-bold text-sky-200 border-b border-sky-200"
    >
      Comments:
    </h3>
    <li class="" v-for="comment in comments">
      <Comment :comment="comment" />
    </li>
  </ul>
</template>
