<script setup lang="ts">
// import { storeToRefs } from 'pinia';
// import { computed } from 'vue';
// import { useUserStore } from '../store/user.store';
import {
  IPost,
  IPostState,
} from './../interface/post.interface';
import { getUser } from './../service/user.service';
import {
  onBeforeMount,
  reactive,
  toRefs,
} from 'vue';

const props = defineProps<{
  postData: IPost;
}>();

const { postData } = props;

const state: IPostState = reactive({
  user: {
    id: 0,
    firstName: '',
    lastName: '',
    image: '',
  },
});
const { user } = toRefs(state);

onBeforeMount(async () => {
  user.value = await getUser(postData.userId);
});
</script>

<template>
  <article
    class="h-min p-10 flex flex-col gap-10 items-center max-w-xl text-slate-400 border-slate-600 border rounded-lg bg-slate-800"
  >
    <figure
      class="flex flex-col gap-5 justify-center items-center bg-slate-700 w-40 h-40 rounded-full"
    >
      <img
        class="w-20"
        :src="user.image"
        alt=""
      />
      <figcaption class="font-bold">
        {{ user.firstName }}
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
