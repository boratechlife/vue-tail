<script setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';

defineProps({
  msg: String,
});
</script>

<template>
  <section class="py-10 lg:py-20">
    <div class="container px-4 lg:px-20 mx-auto">
      <div class="flex flex-wrap items-center justify-between lg:flex-nowrap">
        <div class="md:w-1/3">
          <h2 class="font-bold text-3xl md:text-4xl my-3 md:my-4">
            Created by You, handmade by Us
          </h2>
          <p class="text-sm lg:text-lg font-extralight">
            Each time you create and buy a candle on Candle Street, your candle
            will be handmade in our lab in Italy and shipped to your doorstep.
          </p>
          <BaseButton text="Discover our Lab" />
        </div>
        <div class="w-full lg:w-1/2"><img src="/Union.jpg" alt="candle" /></div>
      </div>
    </div>
  </section>
</template>
