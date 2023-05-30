<script setup lang="ts">
import ModalComponent from '@/components/ModalComponent.vue'

const props = defineProps(['show'])

// function signIn() {
//   showModal.value = true
// }


</script>

<template>
  <ModalComponent :show="props.show" :closeOnClickBackdrop="false">
    <template #header>
      <h3 class="text-2xl font-bold">Sign in</h3>
    </template>
    <template #default>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium" for="email">Email</label>
          <input class="border border-gray-400 rounded-md p-2" type="email" id="email" name="email" placeholder="Email"/>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium" for="password">Password</label>
          <input class="border border-gray-400 rounded-md p-2" type="password" id="password" name="password" placeholder="Password"/>
        </div>
        <div class="flex flex-col gap-2">
          <button class="btn btn-sm bg-black font-normal rounded-3xl normal-case text-xl px-6">Sign in</button>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-col gap-2">
        <p class="text-sm">Don't have an account? <a class="text-blue-500" href="#">Sign up</a></p>
        <p class="text-sm">Forgot password? <a class="text-blue-500" href="#">Reset password</a></p>
      </div>
    </template>
  </ModalComponent>
</template>
