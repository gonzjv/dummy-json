<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive, toRefs } from 'vue';
import { searchPost } from '../service/post.service';
import { usePostStore } from '../store/post.store';

const postStore = usePostStore();
// const { postArr } = storeToRefs(postStore);

const state = reactive({
  searchString: '',
});

const handleSubmit = async () => {
  const result = await searchPost(
    searchString.value
  );
  console.log('result', result);

  postStore.$patch({ postArr: result.posts });
};

const { searchString } = toRefs(state);
</script>
<template>
  <form
    class="w-1/3 h-12 flex justify-center items-end border-b border-b-sky-200"
    @submit.prevent="handleSubmit"
  >
    <input
      required
      v-model="searchString"
      class="focus-visible:outline-none focus:border-l border-sky-200 w-full bg-transparent h-8 p-3 placeholder:italic placeholder-gray-400 focus:font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-indigo-400"
      type="text"
      placeholder="Search..."
    />
  </form>
</template>
