<script setup>
import { ref } from 'vue';
import ReviewCard from './ReviewCard.vue';

defineProps({
  msg: String,
});

const options = ref({
  type: 'loop',
  perPage: 3,
  gap: 20,
  perMove: 1,
  padding: { right: '4.5rem' },
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
  <section class="pb-20 bg-white">
    <div class="container px-4 lg:px-20 mx-auto">
      <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide>
          <ReviewCard />
        </SplideSlide>
        <SplideSlide>
          <ReviewCard />
        </SplideSlide>
        <SplideSlide>
          <ReviewCard />
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped></style>
