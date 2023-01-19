<script setup>
import { ref } from 'vue';

import FragranceBtn from './FragranceBtn.vue';
const list = ref([
  'Sweet',
  'Relaxing',
  'Exotic fruits',
  'Exotic fruits',
  'Energising',
  'Sweet',
  'Relaxing',
  'Exotic fruits',
  'Exotic fruits',
  'Energising',
]);
</script>

<template>
  <div class="sec">
    <h4 class="text-base lg:text-lg font-semibold mb-4">
      Trending fragrances ideas:
    </h4>
  </div>
  <div class="flex w-full flex-wrap gap-2 items-center">
    <FragranceBtn :msg="{ item }" v-for="(item, index) in list" :key="index" />
  </div>
</template>

<style scoped></style>
