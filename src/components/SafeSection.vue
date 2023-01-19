<script setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import SafeCard from './SafeCard.vue';
defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <section class="py-10 lg:py-20 bg-[#FAF7EF]">
    <div class="contnainer px-4 lg:px-20 mx-auto">
      <div class="w-full flex flex-wrap gap-10 lg:flex-nowrap items-center">
        <div class="w-full lg:w-1/2">
          <img src="/safe.png" alt="" srcset="" />
        </div>
        <div class="w-full lg:w-1/2">
          <h4 class="text-2xl font-bold lg:text-4xl mb-4">
            Safe for people, animals and the environment
          </h4>
          <p class="text-sm lg:text-lg text-[#747474] mb-6">
            We want candles to be part of everyones life, but to do so we need
            to make them the right way.
          </p>
          <BaseButton text="Discover our lab" />
        </div>
      </div>

      <div
        class="flex flex-wrap lg:flex-nowrap gap-4 justify-between items-center"
      >
        <SafeCard description="1% of revenues donated to no-profits">
          <img src="/custom-logo.svg" alt="" srcset="" />
        </SafeCard>
        <SafeCard description="1% of revenues donated to no-profits">
          <img src="/custom-logo.svg" alt="" srcset="" />
        </SafeCard>
        <SafeCard description="1% of revenues donated to no-profits">
          <img src="/custom-logo.svg" alt="" srcset="" />
        </SafeCard>
        <SafeCard description="1% of revenues donated to no-profits">
          <img src="/custom-logo.svg" alt="" srcset="" />
        </SafeCard>
      </div>
    </div>
  </section>
</template>
