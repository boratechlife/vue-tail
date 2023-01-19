<script setup>
import { ref } from 'vue';

// defineProps({
//   text: String,
// });

const count = ref(0);
const options = ref({
  type: 'loop',
  perPage: 3,
  gap: 30,
  padding: 30,
});
</script>
<template>
  <!-- Fragrances -->
  <section class="px-[110px] flex flex-col gap-10 py-[140px]">
    <div class="grid grid-cols-2 items-center">
      <!-- left -->
      <div class="flex flex-col">
        <p class="font-bold text-[50px] leading-[120%] font-Vollkorn">
          Fragrances <br />
          addicted? Read our <br />
          articles
        </p>
        <p class="text-gray text-lg">
          Guides, suggestions, stories: read our weekly blog and <br />
          become a candles master.
        </p>
        <a
          href="/"
          class="py-5 px-8 mt-5 text-white bg-dark block w-max rounded-2xl"
          >Read popular articles</a
        >
      </div>

      <div class="flex justify-end">
        <img src="/product.webp" alt="" />
      </div>
    </div>

    <!-- slider -->

    <Splide :options="options" aria-label="My Favorite Images" class="relative">
      <SplideSlide>
        <div
          class="flex flex-col bg-white rounded-2xl transition-all duration-300 border border-[#f3f3f3] hover:[box-shadow:26px_26px_32px_rgba(0,0,0,0.09)]"
        >
          <img
            src="/slide1.webp"
            class="max-w-[440px] aspect-square rounded-2xl"
            alt=""
          />

          <div class="p-5">
            <p class="text-base text-gray">05 min to read</p>
            <p class="text-dark text-2xl">How we started!</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div
          class="flex flex-col bg-white rounded-2xl transition-all duration-300 border border-[#f3f3f3] hover:[box-shadow:26px_26px_32px_rgba(0,0,0,0.09)]"
        >
          <img
            src="/slide2.webp"
            class="max-w-[440px] aspect-square rounded-2xl"
            alt=""
          />
          <div class="p-5">
            <p class="text-base text-gray">05 min to read</p>
            <p class="text-dark text-2xl">How we make it!</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div
          class="flex flex-col bg-white rounded-2xl transition-all duration-300 border border-[#f3f3f3] hover:[box-shadow:26px_26px_32px_rgba(0,0,0,0.09)]"
        >
          <img
            src="/slide3.webp"
            class="max-w-[440px] aspect-square rounded-2xl"
            alt=""
          />
          <div class="p-5">
            <p class="text-base text-gray">05 min to read</p>
            <p class="text-dark text-2xl">The perfect fragrance</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>
