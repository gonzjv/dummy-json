<script setup lang="ts">
import { IComment } from '../interface/comment.interface';

const props = defineProps<{
  comment: IComment;
}>();
</script>
<template>
  <p>{{ comment.body }}</p>
</template>
