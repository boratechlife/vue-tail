<script setup>
import { useSlots, ref, useAttrs } from 'vue';
const slots = useSlots();
const attrs = useAttrs();

defineProps({
  description: String,
});

const count = ref(0);
</script>

<template>
  <div
    class="card w-full lg:w-1/4 text-sm font-bold flex flex-col items-center gap-4 bg-white shadow-sm rounded p-4 py-6"
  >
    <div>
      <slot> </slot>
    </div>

    <h4 class="text-center">{{ description }}</h4>
  </div>
</template>
