<template>
  <div class="absolute right-14 bottom-14">
    <button @click="modalIsOpen = true" class="uppercase border-2 rounded-lg text-white py-1 px-7 border-white border-solid">Rules</button>
  </div>
  <Transition name="fade" :duration="200">
    <div v-if="modalIsOpen" class="bg-black bg-opacity-25 h-full w-full absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 flex justify-center items-center">
      <div class="bg-white rounded-lg px-6 py-5 w-fit ">
        <div class="flex items-center justify-between mb-5">
          <p class="uppercase text-darkText text-3xl font-bold ">Rules</p>
          <p @click="modalIsOpen = false" class="text-gray-300 text-3xl cursor-pointer">x</p>
        </div>
        <img class="w-11/12 mx-auto" src="src/assets/images/image-rules.svg"/>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const modalIsOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
