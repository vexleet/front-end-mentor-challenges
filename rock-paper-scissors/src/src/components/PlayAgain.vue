<template>
  <div class="flex flex-col justify-center items-center ">
    <p class="uppercase text-white text-4xl text-center mb-4">{{title}}</p>
    <button class="uppercase px-10 py-2 rounded-lg bg-white" :class="hasWon ? 'text-scoreText' : 'text-rockIconColor'" @click="resetGame">Play again</button>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useGameStore} from '@/store/gameStore';

type PlayAgainProps = {
  hasWon: boolean
}

const props = defineProps<PlayAgainProps>()

const gameStore = useGameStore()

const resetGame = gameStore.resetGame

const title = computed(() => props.hasWon ? "You win" : "You lose")
</script>

<style scoped>

</style>
