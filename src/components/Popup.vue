<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive, toRefs } from 'vue';
import { useDisplayStore } from '../store/display.store';

const displayStore = useDisplayStore();
const { isPopupDisplay } =
  storeToRefs(displayStore);

const state = reactive({
  title: '',
  body: '',
});
const { title, body } = toRefs(state);

const handleSubmit = () => {
  console.log('SUBMIT');
};
</script>
<template>
  <Transition
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <aside
      class="py-5 flex flex-col justify-center items-center gap-5 z-20 blur-0 bg-gray-700 shadow-lg absolute top-[12vh] left-[40vw] w-4/12 h-[500px] overflow-auto rounded-lg"
      v-if="isPopupDisplay"
    >
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
    </aside>
  </Transition>
</template>
