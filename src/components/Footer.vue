<script setup>
import { ref } from 'vue';

defineProps({
  text: String,
});

const count = ref(0);
</script>

<template>
  <!-- FOOTER -->

  <footer
    class="bg-dark px-[110px] pt-[110px] flex flex-col gap-20 text-white pb-8 mt-auto rounded-t-[60px]"
  >
    <!-- subscribe newsletter -->
    <section class="flex justify-between mb-28">
      <div class="text-white">
        <h1 class="text-[44px] leading-[110%] mb-5 font-extrabold">
          Subscribe to our <br />
          newsletter
        </h1>
        <p class="text-lg">
          to make your stay special - and even more <br />
          memorable.
        </p>
      </div>

      <form action="" class="grid grid-cols-2 content-end gap-10">
        <!-- First Name -->
        <div class="input-field flex flex-col relative">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            class="peer bg-transparent border-b text-xl border-white text-white placeholder-transparent focus:outline-none px-2.5"
          />

          <label
            htmlFor="firstName"
            class="text-white absolute left-2.5 -top-4 text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 pointer-events-none"
          >
            First Name*
          </label>
        </div>

        <!-- Last Name -->
        <div class="input-field flex flex-col relative">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            class="peer bg-transparent border-b text-xl border-white text-white placeholder-transparent focus:outline-none px-2.5"
          />

          <label
            htmlFor="lastName"
            class="text-white absolute left-2.5 -top-4 text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 pointer-events-none"
          >
            Last Name*
          </label>
        </div>

        <!-- Email -->
        <div class="input-field flex flex-col self-end relative">
          <input
            type="email"
            placeholder="Email"
            name="email"
            class="peer bg-transparent border-b text-xl border-white text-white placeholder-transparent focus:outline-none px-2.5"
          />

          <label
            htmlFor="email"
            class="text-white absolute left-2.5 -top-4 text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 pointer-events-none"
          >
            Email*
          </label>
        </div>

        <button class="bg-red py-5 px-[100px] h-max text-white rounded-[40px]">
          Subscribe Now
        </button>
      </form>
    </section>

    <section class="grid grid-cols-9 gap-2">
      <!-- brand -->
      <div class="flex gap-8 flex-col col-span-3">
        <a href="/">
          <img src="/logo.webp" class="" alt="" />
        </a>
        <p class="text-lg">
          The Candle Company S.r.l. - VAT <br />
          IT11141140969 - C.so Indipendenza 5, <br />
          Milano, 20129, MI, Italy - Indirizzo PEC: <br />
          thecandlecompany@legalmail.
        </p>
      </div>

      <!-- lets become friends -->
      <div class="flex flex-col gap-8 col-span-2">
        <p class="text-xl font-bold">Let's become friends</p>
        <ul class="flex flex-col gap-8">
          <li>
            <a href="/" class="text-lg">Contact Us</a>
          </li>
          <li>
            <a href="/" class="text-lg">About Us</a>
          </li>
          <li>
            <a href="/" class="text-lg">Reviews</a>
          </li>
        </ul>
      </div>

      <!-- lets become friends 2 -->
      <div class="flex flex-col gap-8 col-span-2">
        <p class="text-xl font-bold">Let's become friends</p>
        <ul class="flex flex-col gap-8">
          <li>
            <a href="/" class="text-lg">Giftcards</a>
          </li>
          <li>
            <a href="/" class="text-lg">Order Tracking</a>
          </li>
          <li>
            <a href="/" class="text-lg">How Candles are made</a>
          </li>
          <li>
            <a href="/" class="text-lg">Guide: The Perfect Candle</a>
          </li>
          <li>
            <a href="/" class="text-lg">Payments</a>
          </li>
          <li>
            <a href="/" class="text-lg">Shipping</a>
          </li>
          <li>
            <a href="/" class="text-lg">Blog</a>
          </li>
        </ul>
      </div>

      <!-- google success -->
      <div class="col-span-2 flex gap-8 flex-col">
        <!-- Reviews -->
        <div class="flex p-5 bg-white rounded-[30px] gap-1">
          <img src="/google.webp" alt="" />
          <div class="border-l border-dark px-1 flex flex-col">
            <div class="flex items-center gap-5">
              <div class="flex gap-1 items-center">
                <img src="/star.webp" alt="" />
                <img src="/star.webp" alt="" />
                <img src="/star.webp" alt="" />
                <img src="/star.webp" alt="" />
                <img src="/empty_star.webp" alt="" />
              </div>

              <p class="text-dark font-extrabold">(4.6)</p>
            </div>

            <p class="text-dark my-0.5 font-bold text-lg">Google</p>
            <p class="text-gray text-base">253 Recensioni</p>
          </div>
        </div>

        <!-- 1 for the planet -->

        <div class="bg-[#4d966d] rounded-[30px]">
          <div class="bg-white p-4 grid place-items-center rounded-[30px]">
            <img src="/1-for-planet.webp" alt="" />
          </div>

          <p class="mt-2.5 mx-5 mb-3.5 text-center text-lg">
            <strong class="font-bold">We will donate 1%</strong> of your order
            for reforestation
          </p>
        </div>
      </div>
    </section>

    <div class="flex justify-between border-t-[2px] pt-5 border-[#D9D9D9]">
      <p>© Candle Street - All rights reserved. Privacy & Cookie Policy.</p>
      <a href="/">Privacy Perferences</a>
    </div>
  </footer>
</template>
