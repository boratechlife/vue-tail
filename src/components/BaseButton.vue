<script setup>
import { ref } from 'vue';

defineProps({
  text: String,
});

const count = ref(0);
</script>

<template>
  <div class="mt-10">
    <a
      href=""
      class="bg-black w-full text-lg px-6 py-3 text-white rounded-2xl text-center"
      >{{ text }}</a
    >
  </div>
</template>
