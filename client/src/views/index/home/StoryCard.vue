<script setup lang="ts">
import moment from 'moment'

defineProps<{
  number: number
  author: string,
  title: string,
  date: string
}>()
</script>

<template>
  <div class="flex">
    <div class="text-3xl text-gray-200 font-medium me-4">
      {{ number }}
    </div>
    <div class="mt-2">
      <p class="font-medium text-xs mb-1">
        {{ author }}
      </p>
      <p class="font-bold text-base mb-1">
        {{ title }}
      </p>
      <p class="text-sm text-gray-400">
        {{ moment().format('LL') }}
      </p>
    </div>
  </div>
</template>
