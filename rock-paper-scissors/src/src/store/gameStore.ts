import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {Choices} from '@/types/Game';


export const useGameStore = defineStore('game', () => {
  const choice = ref<Choices | null>(null)
  const score = ref(0)

  const setChoice = (val: Choices) => choice.value = val
  const hasChoice = computed(() => choice.value !== null)

  const resetGame = () => {
    choice.value = null
  }

  const updateScore = (isWinner: boolean) => {
    if(isWinner) score.value += 1
    else score.value -= 1
  }

  return {choice, setChoice, hasChoice, resetGame, score, updateScore}
})
