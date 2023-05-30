<script setup lang="ts">
  import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<template>
  <NavbarComponent/>
  <div class="grid bg-blue-medium py-24 w-full text-center border-b border-b-black">
    <h1 class="text-white">
      <p class="text-9xl">Fuel great thinking.</p>
      <p class="font-medium mt-8">Become a Medium member to enjoy unlimited access and
directly support the writers you read most.</p>
      <button class="btn btn-sm text-black bg-white font-normal rounded-3xl normal-case mt-5 px-6 text-xl">Get unlimited access</button>
    </h1>
  </div>
  <div class="grid text-white bg-blue-medium grid-cols-1 lg:grid-cols-2 border-b border-b-black">
    <div class="lg:px-20 lg:py-10 px-10 py-5 text-5xl lg:border-e lg:border-e-black">
      Get unlimited access to every story.
    </div>
    <div class="lg:px-20 lg:py-10 px-10 py-5 text-5xl">
      Support the voices you want to hear more from.
    </div>
  </div>
</template>
