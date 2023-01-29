<script setup lang="ts">
import PostList from './components/PostList.vue';
import HeaderVue from './components/Header.vue';
import Cover from './components/Cover.vue';
import Popup from './components/Popup.vue';
import { useDisplayStore } from './store/display.store';
import { storeToRefs } from 'pinia';
import { inject, onBeforeMount } from 'vue';
import { VueCookies } from 'vue-cookies';
import { useUserStore } from './store/user.store';

const displayStore = useDisplayStore();
const { popup } = storeToRefs(displayStore);

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
  <PostList
    :class="popup.display && 'blur-[2px] '"
    class="transition-all duration-700"
  />
  <Cover />
  <Popup />
</template>

<style scoped></style>
