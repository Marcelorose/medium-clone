<script setup lang="ts">
  import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<template>
  <NavbarComponent/>
  <div class="grid py-24 w-full text-center border-b border-b-black">
    <h1 class="text-9xl text-black">Every idea needs a <b>Medium.</b></h1>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 border-b border-b-black">
    <div class="lg:px-20 lg:py-10 px-10 py-5 text-lg lg:border-e lg:border-e-black">
      The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
      <br><br>
      We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
    </div>
    <div>
      <iframe src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
    </div>
  </div>
</template>
