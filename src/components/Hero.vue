<script setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import Search from './Search.vue';
import TrendingFragrances from './TrendingFragrances.vue';
const count = ref(0);
</script>

<template>
  <section class="bg-white py-10 lg:py-20">
    <div class="container px-4 lg:px-20 mx-auto">
      <div class="flex w-full items-center flex-wrap-reverse lg:flex-nowrap">
        <div class="w-full lg:w-1/2 text-black">
          <h4 class="text-xl lg:text-5xl w-full mb-16 font-bold leading-normal">
            Create your own Fragrance! Start by selecting your keywords
          </h4>
          <Search />
          <TrendingFragrances />
          <BaseButton text="create your space" />
        </div>
        <div class="w-full lg:w-1/2 lg:pl-16 l">
          <img src="/candle-image.jpg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
