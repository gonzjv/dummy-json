import { defineStore } from 'pinia';

export const useDisplayStore = defineStore(
  'display',
  {
    state: () => ({
      isPopupDisplay: false,
    }),
  }
);
