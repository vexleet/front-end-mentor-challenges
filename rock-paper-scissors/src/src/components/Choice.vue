<template>
  <div class="flex gap-12 justify-center mt-10 items-center">
    <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition duration-[1500ms]">
      <ChoiceItem v-if="hasRendered" :component="userChoice" title="You picked"/>
    </Transition>
    <Transition
        enter-from-class="w-0"
        enter-to-class="w-[200px]"
        enter-active-class="transition-all overflow-hidden whitespace-nowrap duration-1000 delay-[1500ms]">
      <PlayAgain v-if="hasRendered" :has-won="userHasWon" />
    </Transition>
    <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition duration-[1500ms] delay-500">
          <ChoiceItem v-if="hasRendered" :component="computerIcon" title="The house picked"/>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import ChoiceItem from '@/components/ChoiceItem.vue';
import RockIcon from '@/components/Icons/RockIcon.vue';
import PaperIcon from '@/components/Icons/PaperIcon.vue';
import {useGameStore} from '@/store/gameStore';
import {Choices} from '@/types/Game';
import ScissorsIcon from '@/components/Icons/ScissorsIcon.vue';
import {computed, nextTick, onBeforeMount, onMounted, ref} from 'vue';
import PlayAgain from '@/components/PlayAgain.vue';

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

const computerChoice = ref(randomChoice())
const computerIcon = computed( () => choicesComponents[computerChoice.value])

const userHasWon = ref(false)

const checkWinner = (left: Choices, right: Choices, changeValue: boolean) => {
  if(left === "rock" && right === "scissors") userHasWon.value = changeValue
  if(left === "scissors" && right === "paper") userHasWon.value = changeValue
  if(left === "paper" && right === "rock") userHasWon.value = changeValue
}

const hasRendered = ref(false)

onBeforeMount(() => nextTick(() => hasRendered.value = true))

onMounted(() => {
  const user = gameStore.choice!
  const computer = computerChoice.value

  checkWinner(user, computer, true)
  checkWinner(computer, user, false)

  gameStore.updateScore(userHasWon.value)
})
</script>

<style scoped>

</style>
