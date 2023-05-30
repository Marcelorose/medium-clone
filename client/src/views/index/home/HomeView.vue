<script setup lang="ts">
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import TrendingStories from './TrendingStories.vue';
</script>

<template>
  <NavbarComponent/>
  <div class="grid w-full px-6 bg-yellow-medium text-black border-b border-b-black">
    <div class="w-full xl:container m-auto py-24">
      <h2 class="text-8xl mb-4">Stay curious.</h2>
      <p class="text-2xl mb-8">Discover stories, thinking, and expertise from writers on any topic.</p>
      <button class="btn btn-sm bg-black font-normal rounded-3xl normal-case text-xl px-6">Start reading</button>
      <!-- <img class="ml-auto" src="@/assets/index/m.svg"/> -->
    </div>
  </div>
  <TrendingStories/>
</template>
