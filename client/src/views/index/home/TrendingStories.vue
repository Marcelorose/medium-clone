<script setup lang="ts">
  import StoryCard from './StoryCard.vue'
</script>

<template>
  <div class="w-full px-6 bg-white text-black border-b border-b-gray-400">
    <div class="w-full xl:container m-auto pt-10 pb-4">
      <p class="font-medium mb-4">Trending on Medium</p>
      <div class="grid mb-4 gap-2 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <StoryCard :number="1" :author="'Marcelo'" :title="'Title of the story'"/>
        <StoryCard :number="2" :author="'Marcelo'" :title="'Title of the story'"/>
        <StoryCard :number="3" :author="'Marcelo'" :title="'Title of the story'"/>
        <StoryCard :number="4" :author="'Marcelo'" :title="'Title of the story'"/>
        <StoryCard :number="5" :author="'Marcelo'" :title="'Title of the story'"/>
        <StoryCard :number="6" :author="'Marcelo'" :title="'Title of the story'"/>
      </div>
    </div>
  </div>
</template>
