<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive, toRefs } from 'vue';
import { IPostData } from '../interface/post.interface';
import { addPost } from '../service/post.service';
import { usePostStore } from '../store/post.store';
import { useUserStore } from '../store/user.store';

const userStore = useUserStore();
const postStore = usePostStore();
const { userData } = storeToRefs(userStore);

const state = reactive({
  title: '',
  body: '',
  newPost: {},
  isPostAdded: false,
});
const { title, body, newPost, isPostAdded } =
  toRefs(state);

const handleSubmit = async () => {
  console.log('SUBMIT');
  const postData: IPostData = {
    userId: userData.value.id,
    body: body.value,
    title: title.value,
  };

  console.log('postData', postData);
  newPost.value = await addPost(postData);
  console.log('newPost', newPost);

  isPostAdded.value = true;
  // postStore.$patch((state) => {
  //   state.postArr.push(newPost);
  // });
};
</script>
<template>
  <main
    class="gap-20 flex justify-center flex-col"
  >
    <form
      @submit.prevent="handleSubmit"
      class="bg-gray-700 rounded-lg border border-slate-600 w-fit p-10 flex flex-col gap-7 items-center"
    >
      <input
        required
        v-model="title"
        class="w-full bg-transparent border border-sky-200 rounded-md h-10 p-2"
        type="text"
        placeholder="Заголовок"
      />
      <input
        required
        v-model="body"
        class="w-full bg-transparent border border-sky-200 rounded-md h-10 p-2"
        type="text"
        placeholder="Текст"
      />
      <button
        type="submit"
        class="max-w-max px-3 text-center relative transition-colors duration-500 border-b border-sky-200 hover:text-sky-200 h-10 text-slate-200 font-bold"
      >
        ДОБАВИТЬ
      </button>
    </form>
    <aside
      class="bg-gray-700 p-10 w-64 rounded-lg"
      v-if="isPostAdded"
    >
      <h2 class="text-sky-200">Added post:</h2>
      {{ newPost }}
    </aside>
  </main>
</template>
