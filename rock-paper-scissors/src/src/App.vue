<script setup lang="ts">
import Score from '@/components/Score.vue';
import Choices from '@/components/Choices.vue';
import Rules from '@/components/Rules.vue';
import Choice from '@/components/Choice.vue';
import {useGameStore} from '@/store/gameStore';

const gameStore = useGameStore()
</script>

<template>
  <div class="py-5">
    <Score />
    <Choices v-if="!gameStore.hasChoice"/>
    <Choice v-else />
    <Rules />
  </div>
</template>

<style scoped>

</style>
