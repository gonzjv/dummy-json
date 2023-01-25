<script setup lang="ts">
import {
  onBeforeMount,
  reactive,
  toRefs,
} from 'vue';
import { IUserState } from '../interface/user.interface';
import { getUser } from '../service/user.service';

const INIT_USER = {
  id: 0,
  firstName: '',
  lastName: '',
  image: '',
};

const props = defineProps<{
  userId: number;
}>();

const state: IUserState = reactive({
  user: INIT_USER,
});
const { user } = toRefs(state);

onBeforeMount(async () => {
  user.value = await getUser(props.userId);
});
</script>
<template>
  <figure
    class="flex flex-col gap-5 justify-center items-center bg-slate-700 w-40 h-40 rounded-full"
  >
    <img
      class="w-20"
      :src="user.image"
      :alt="user.firstName"
    />
    <figcaption class="font-bold">
      {{ user.firstName }}
    </figcaption>
  </figure>
</template>
