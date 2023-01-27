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
  isCommentsDisplay: false,
});
const { comments, isCommentsDisplay } =
  toRefs(state);

onBeforeMount(async () => {
  const response = await getCommentArr(
    props.postId
  );

  comments.value = response.comments;
});
</script>
<template>
  <button
    class="transition-all max-w-max font-bold hover:text-sky-200 border-b border-sky-200"
    @click="
      isCommentsDisplay = !isCommentsDisplay
    "
  >
    Comments
  </button>
  <Transition
    enter-active-class="transition-all duration-1000"
    leave-active-class="transition-all duration-1000"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <ul
      v-if="isCommentsDisplay"
      class="w-full flex flex-col gap-3 justify-start items-start bg-gray-700 p-5 rounded-lg border border-slate-600"
    >
      <li v-for="comment in comments">
        <Comment :comment="comment" />
      </li>
    </ul>
  </Transition>
</template>
