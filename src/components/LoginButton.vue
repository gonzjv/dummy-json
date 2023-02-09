<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';
import { useUserStore } from '../store/user.store';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

const loginBtnText = computed(() =>
  userData.value.firstName
    ? userData.value.firstName
    : 'Log In'
);
</script>
<template>
  <RouterLink
    to="/login"
    class="h-12 w-fit flex gap-1 justify-center items-center font-bold bg-transparent border-b border-sky-200 text-slate-400 hover:text-sky-200 transition-all duration-300"
  >
    <UserCircleIcon class="h-7" />
    <p class="min-w-fit pt-2">
      {{ loginBtnText }}
    </p>
  </RouterLink>
</template>
