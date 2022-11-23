<template>
  <div class="flex gap-8 justify-center mt-10">
    <ChoiceItem :component="userChoice" title="You picked"/>
    <ChoiceItem :component="computerChoice" title="The house picked"/>
  </div>
</template>

<script setup lang="ts">
import ChoiceItem from '@/components/ChoiceItem.vue';
import RockIcon from '@/components/Icons/RockIcon.vue';
import PaperIcon from '@/components/Icons/PaperIcon.vue';
import {useGameStore} from '@/store/gameStore';
import {Choices} from '@/types/Game';
import ScissorsIcon from '@/components/Icons/ScissorsIcon.vue';
import {computed} from 'vue';

type ChoicesComponents = Record<Choices, any>

const gameStore = useGameStore()

const choicesComponents: ChoicesComponents = {
  paper: PaperIcon,
  rock: RockIcon,
  scissors: ScissorsIcon
}

const userChoice = computed(() => choicesComponents[gameStore.choice!])

const randomChoice = (): keyof ChoicesComponents => {
  const keys = Object.keys(choicesComponents) as Array<keyof ChoicesComponents>

  return keys[Math.floor(Math.random() * keys.length)]
}

const computerChoice = choicesComponents[randomChoice()]

</script>

<style scoped>

</style>
