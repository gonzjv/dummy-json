<script setup lang="ts">
import HeaderVue from './components/Header.vue';
import { storeToRefs } from 'pinia';
import { inject, onBeforeMount } from 'vue';
import { VueCookies } from 'vue-cookies';
import { useUserStore } from './store/user.store';

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

const $cookies = inject<VueCookies>('$cookies');
const userDataCookie = $cookies!.get('userData');

const checkCookie = () => {
  if (userDataCookie) {
    userStore.$patch({
      userData: userDataCookie,
    });

    console.log('userData', userData.value);
  }
};

onBeforeMount(() => {
  checkCookie();
});
</script>

<template>
  <HeaderVue />
  <RouterView />
</template>

<style scoped></style>
