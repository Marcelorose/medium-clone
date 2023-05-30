<template>
  <div v-if="props.show" class="fixed inset-0 flex items-center justify-center z-50">
    <div @click="props.closeOnClickBackdrop && $emit('close')" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="modal-content py-4 text-left px-6">
        <!-- Close button -->
        <div class="flex justify-end items-center">
          <button @click="$emit('close')" class="modal-close cursor-pointer z-50">
            X
          </button>
        </div>
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  closeOnClickBackdrop: {
    type: Boolean,
    default: true
  }
})

</script>

<style>
.modal-overlay {
  transition: opacity 0.2s;
}

.modal-container {
  transition: opacity 0.2s;
}

.modal-close {
  transition: opacity 0.2s;
}
</style>
