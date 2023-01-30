<script setup lang="ts">
// import {
//   computed,
//   reactive,
//   toRefs,
//   ref,
// } from 'vue';
import { storeToRefs } from 'pinia';
import { useDisplayStore } from '../store/display.store';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/outline';
import { useUserStore } from '../store/user.store';

const displayStore = useDisplayStore();
const userStore = useUserStore();
const { popup } = storeToRefs(displayStore);
const { userData } = storeToRefs(userStore);

// const loginBtnText = computed(() =>
//   userData.value.firstName
//     ? userData.value.firstName
//     : 'Log In'
// );

const openPopup = (popupName: string) => {
  displayStore.$patch({
    popup: {
      display: true,
      name: popupName,
    },
  });
};
</script>
<template>
  <header
    :class="popup.display && 'blur-[2px] '"
    class="flex justify-between transition-all duration-700"
  >
    <h1
      class="flex justify-start text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-indigo-400"
    >
      postilla
    </h1>
    <nav class="flex gap-10">
      <button
        @click="openPopup('addPost')"
        class="w-full flex gap-1 items-center font-bold bg-transparent border-b border-sky-200 text-slate-400 hover:text-sky-200 transition-all duration-300"
      >
        <ChatBubbleOvalLeftEllipsisIcon
          class="h-12"
        />
        <p class="min-w-fit pt-2">Add post</p>
      </button>
      <button
        @click="openPopup('login')"
        class="w-full flex gap-1 justify-center items-center font-bold bg-transparent border-b border-sky-200 text-slate-400 hover:text-sky-200 transition-all duration-300"
      >
        <UserCircleIcon class="h-7" />
        <p class="min-w-fit pt-2">
          <!-- {{ loginBtnText }} -->
          {{
            userData.firstName
              ? userData.firstName
              : 'Log In'
          }}
        </p>
      </button>
    </nav>
  </header>
</template>
