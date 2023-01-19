<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <!-- START HEADER -->
  <header
    class="text-4xl fixed z-50 bg-white top-0 w-full text-blue-500 py-3 shadow-lg mb-6"
  >
    <div class="container px-4 lg:px-20 mx-auto">
      <div class="flex justify-between items-center">
        <div class="logo mb-2">
          <img src="/candle-logo.svg" class="w-40" alt="" srcset="" />
        </div>

        <!-- RIGHT ICONS -->
        <div class="flex gap-6 items-center">
          <span>
            <img src="/basket.svg" class="h-6 w-6" alt="" />
          </span>
          <span>
            <img src="/menu.svg" class="h-6 w-6" alt="" />
          </span>
        </div>
      </div>
    </div>
  </header>
  <!-- END HEADER -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
