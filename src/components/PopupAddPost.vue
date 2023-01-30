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
const { postArr } = storeToRefs(postStore);

const state = reactive({
  title: '',
  body: '',
});
const { title, body } = toRefs(state);

const handleSubmit = async () => {
  console.log('SUBMIT');
  const postData: IPostData = {
    userId: userData.value.id,
    body: body.value,
    title: title.value,
  };

  console.log('postData', postData);
  const newPost = await addPost(postData);
  console.log('newPost', newPost);
  //   let newPostArr = postArr.value;
  //   newPostArr = newPostArr.push(newPost);
  //   postStore.$patch({
  //     postArr: postArr.value.push(newPost),
  //   });
};
</script>
<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full p-10 flex flex-col gap-7 items-center"
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
</template>
