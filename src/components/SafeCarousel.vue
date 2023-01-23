<script setup>
import { ref } from 'vue';
import SafeCard from './SafeCard.vue';

defineProps({
  msg: String,
});

const options = ref({
  type: 'loop',
  perPage: 3,
  gap: 20,
  perMove: 1,
  destroy: true,
  padding: { right: '4.5rem' },
  breakpoints: {
    640: {
      perPage: 1,
      destroy: false,
    },
  },
  autoplay: true,

  classes: {
    // Add classes for arrows.
    arrows: 'splide__arrows your-class-arrows hidden',
    arrow: 'splide__arrow your-class-arrow',
    prev: 'splide__arrow--prev your-class-prev',
    next: 'splide__arrow--next your-class-next',

    // Add classes for pagination.
    pagination: 'splide__pagination your-class-pagination hidden', // container
    page: 'splide__pagination__page bg-red-500 pb-20', // each button
  },
});
</script>

<template>
  <section class="pb-20 mt-10 bg-[#F1F7E9] lg:hidden">
    <div class="container px-4 lg:px-20 mx-auto">
      <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide>
          <SafeCard description="1% of revenues donated to no-profits">
            <img src="/custom-logo.svg" alt="" srcset="" />
          </SafeCard>
        </SplideSlide>
        <SplideSlide>
          <SafeCard description="1% of revenues donated to no-profits">
            <img src="/custom-logo.svg" alt="" srcset="" />
          </SafeCard>
        </SplideSlide>
        <SplideSlide>
          <SafeCard description="1% of revenues donated to no-profits">
            <img src="/custom-logo.svg" alt="" srcset="" />
          </SafeCard>
        </SplideSlide>
        <SplideSlide>
          <SafeCard description="1% of revenues donated to no-profits">
            <img src="/custom-logo.svg" alt="" srcset="" />
          </SafeCard>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped></style>
