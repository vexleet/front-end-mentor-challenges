<template>
  <div class="border-2 border-solid rounded-md w-[400px] mx-auto px-4 py-2 flex justify-between items-center border-headerOutline">
    <img class="w-[100px]" src="src/assets/images/logo.svg"/>
    <div class="bg-white text-center px-7 py-2 rounded-md">
      <p class="uppercase text-xs text-scoreText">Score</p>
      <p class="text-4xl font-bold text-darkText">{{ score }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useGameStore} from '@/store/gameStore';
import {computed} from 'vue';

const gameStore = useGameStore()

const score = computed(() => gameStore.score)

</script>
<style scoped>

</style>
