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
  classes: {
    // Add classes for arrows.
    arrows: 'splide__arrows custom-arrows ',
    arrow: 'splide__arrow custom-arrow',
    prev: 'splide__arrow--prev your-class-prev',
    next: 'splide__arrow--next your-class-next',

    // Add classes for pagination.
    pagination: 'splide__pagination your-class-pagination ', // container
    page: 'splide__pagination__page bg-red-500 pb-20', // each button
  },
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

      <button
        class="bg-black text-white px-4 py-2 w-1/4 rounded-lg mx-auto mt-10"
      >
        Explore
      </button>
    </div>
  </section>
</template>

<style>
.custom-arrows .splide__arrow {
  top: 110%;

  transform: translateY(50%);
}
.custom-arrows .splide__arrow--next {
  right: 0;
  left: 4rem;
}

.custom-arrows .splide__arrow--next::before,
.custom-arrows .splide__arrow--prev::before {
  /* content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiPjxwYXRoIGQ9Ik01Ljc5ODg5IDI0SDQxLjc5ODkiLz48cGF0aCBkPSJNMTcuNzk4OCAzNkw1Ljc5ODgzIDI0TDE3Ljc5ODggMTIiLz48L2c+PC9zdmc+ '); */
  content: url('data:image/svg+xml; utf8, <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12L2 12M22 12L14 20M22 12L14 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 99999 !important;
  font-size: x-large;
  position: absolute;
}
.custom-arrows .splide__arrow--prev::before {
  /* content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiPjxwYXRoIGQ9Ik01Ljc5ODg5IDI0SDQxLjc5ODkiLz48cGF0aCBkPSJNMTcuNzk4OCAzNkw1Ljc5ODgzIDI0TDE3Ljc5ODggMTIiLz48L2c+PC9zdmc+ '); */
  transform: rotate(-180deg);
}
</style>
