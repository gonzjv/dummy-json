<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive, toRefs, inject } from 'vue';
import { VueCookies } from 'vue-cookies';
import { useRouter } from 'vue-router';
import { loginUser } from '../service/user.service';
import { useUserStore } from '../store/user.store';

const $cookies = inject<VueCookies>('$cookies');

const router = useRouter();

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

const state = reactive({
  username: '',
  password: '',
});
const { username, password } = toRefs(state);

const handleSubmit = async () => {
  console.log('SUBMIT');
  const userData = {
    username: username.value,
    password: password.value,
  };
  const user = await loginUser(userData);
  console.log('user', user);

  if (user.id) {
    userStore.$patch({
      userData: user,
    });

    $cookies!.set('userData', user);
  }

  router.push({ path: '/' });
};

const handleLogoutClick = () => {
  $cookies!.remove('userData');
  userStore.$reset();
};
</script>
<template>
  <main
    class="justify-center bg-gray-700 rounded-lg border border-slate-600 w-fit p-10 flex flex-col gap-7 items-center"
  >
    <form
      v-if="!userData.id"
      @submit.prevent="handleSubmit"
      class="flex flex-col gap-7 items-center"
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
    <button
      v-if="userData.id"
      @click="handleLogoutClick"
    >
      Log Out
    </button>
  </main>
</template>
