<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});
</script>

<template>
  <button
    class="text-xs py-1.5 px-3 bg-white hover:bg-[#FFF7F3] focus:bg-[#FFF7F3] rounded-xl border border-[#AE9784] outline-none"
  >
    {{ msg.item }}
  </button>
</template>
