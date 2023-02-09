<script setup lang="ts">
import PostAddBtn from './PostAddBtn.vue';
import LoginButton from './LoginButton.vue';
import SearchBar from './SearchBar.vue';
</script>
<template>
  <header
    class="lg:min-w-[900px] flex justify-between items-end"
  >
    <RouterLink to="/">
      <h1
        class="flex justify-start items-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-indigo-400"
      >
        postilla
      </h1>
    </RouterLink>
    <nav
      class="flex justify-end items-center gap-10"
    >
      <SearchBar />
      <PostAddBtn />
      <LoginButton />
    </nav>
  </header>
</template>
