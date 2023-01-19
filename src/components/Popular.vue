<script setup>
import { ref } from 'vue';

// defineProps({
//   text: String,
// });

const count = ref(0);
const options = ref({
  type: 'loop',
  perPage: 2.5,
  gap: 30,
  padding: 30,
});
</script>
<template>
  <!-- Popular candles & collections: -->
  <section class="bg-[#FFF7F3] pl-[100px] pr-0 grid grid-cols-3 gap-28">
    <div class="my-auto">
      <img src="/coloured.webp" alt="" />
    </div>

    <!-- right -->
    <div class="col-span-2 flex flex-col py-[100px] mb-10">
      <p class="font-bold pl-6 text-[50px] leading-[60px] font-Vollkorn">
        Popular candles & <br />
        collections:
      </p>
      <p class="text-lg pl-6 text-gray">
        Discover and buy candles created by experts and enthusiasts and share
        your <br />
        creations with your friends and the community.
      </p>

      <!-- slider -->

      <Splide
        :options="options"
        aria-label="My Favorite Images"
        class="relative"
      >
        <SplideSlide>
          <div
            class="flex flex-col p-2.5 bg-white rounded-2xl transition-all duration-300 border border-[#f3f3f3] hover:[box-shadow:26px_26px_32px_rgba(0,0,0,0.09)]"
          >
            <img
              src="/candles.webp"
              class="h-[190px] aspect-square rounded-2xl"
              alt=""
            />

            <div class="p-2.5">
              <p class="text-dark text-center text-xl font-semibold">
                Carousel of candles & Collections
              </p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>
