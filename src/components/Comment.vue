<script setup lang="ts">
import {
  reactive,
  toRefs,
  onBeforeMount,
} from 'vue';
import { INIT_USER } from '../helper/initial-data-helper';
import { IComment } from '../interface/comment.interface';
import { IUserState } from '../interface/user.interface';
import { getUser } from '../service/user.service';

const props = defineProps<{
  comment: IComment;
}>();

const state: IUserState = reactive({
  user: INIT_USER,
});
const { user } = toRefs(state);

onBeforeMount(async () => {
  user.value = await getUser(
    props.comment.user.id
  );
});
</script>
<template>
  <div class="flex gap-5 items-start">
    <figure
      class="h-16 w-16 bg-slate-600 rounded-full flex items-center justify-center"
    >
      <img
        class="w-12"
        :src="user.image"
        alt=""
      />
    </figure>
    <div
      class="flex flex-col items-start border border-slate-500 rounded-lg"
    >
      <p
        class="bg-slate-600 p-1 rounded-t-lg w-full flex justify-start"
      >
        {{ user.firstName }}
      </p>
      <p class="p-2">
        {{ comment.body }}
      </p>
    </div>
  </div>
</template>
