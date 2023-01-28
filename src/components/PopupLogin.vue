<script setup lang="ts">
import { reactive, toRefs } from 'vue';

const state = reactive({
  username: '',
  password: '',
});
const { username, password } = toRefs(state);

const handleSubmit = () => {
  console.log('SUBMIT');
};
</script>
<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full p-10 flex flex-col gap-7 items-center"
  >
    <input
      required
      v-model="username"
      class="w-full bg-transparent border border-sky-200 rounded-md h-10 p-2"
      type="text"
      placeholder="Hi! My name is... What? My name is... Who?"
    />
    <input
      required
      v-model="password"
      class="w-full bg-transparent border border-sky-200 rounded-md h-10 p-2"
      type="text"
      placeholder="Password"
    />
    <button
      type="submit"
      class="max-w-max px-3 text-center relative transition-colors duration-500 border-b border-sky-200 hover:text-sky-200 h-10 text-slate-200 font-bold"
    >
      Log In
    </button>
  </form>
</template>
