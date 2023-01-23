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
  perMove: 1,
  breakpoints: {
    640: {
      perPage: 1,
      arrows: false,
    },
  },
  padding: 30,
  classes: {
    // Add classes for arrows.
    arrows: 'splide__arrows fragrance-arrows ',
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
  <!-- Fragrances -->
  <section class="px-4 lg:px-[110px] flex flex-col gap-10 py-[140px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
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

<style>
.fragrance-arrows {
  position: absolute;
  top: 100%;
  left: 45%;
  transform: translateX(-50%);
}
.fragrance-arrows .splide__arrow {
  top: 110%;
  transform: translateY(50%);
}

.fragrance-arrows .splide__arrow--next {
  right: 0;
  left: 4rem;
}
.fragrance-arrows .splide__arrow--next::before,
.fragrance-arrows .splide__arrow--prev::before {
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
.fragrance-arrows .splide__arrow--prev::before {
  /* content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiPjxwYXRoIGQ9Ik01Ljc5ODg5IDI0SDQxLjc5ODkiLz48cGF0aCBkPSJNMTcuNzk4OCAzNkw1Ljc5ODgzIDI0TDE3Ljc5ODggMTIiLz48L2c+PC9zdmc+ '); */
  transform: rotate(-180deg);
}
</style>
