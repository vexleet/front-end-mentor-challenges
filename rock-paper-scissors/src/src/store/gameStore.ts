import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {Choices} from '@/types/Game';


export const useGameStore = defineStore('game', () => {
  const choice = ref<Choices | null>(null)

  const setChoice = (val: Choices) => choice.value = val
  const hasChoice = computed(() => choice.value !== null)

  return {choice, setChoice, hasChoice}
})
