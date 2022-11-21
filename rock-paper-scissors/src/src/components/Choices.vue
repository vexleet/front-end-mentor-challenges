<template>
  <div class="w-1/5 mx-auto mt-16 relative">
    <img class="w-full" src="src/assets/images/bg-triangle.svg"/>
    <div>
      <PaperIcon class="absolute left-[-40px] top-[-40px]"/>
      <ScissorsIcon class="absolute right-[-40px] top-[-40px]"/>
      <RockIcon class="absolute bottom-[-40px] left-2/4 -translate-x-2/4 " />
    </div>

  </div>
</template>

<script setup lang="ts">
import PaperIcon from '@/components/Icons/PaperIcon.vue';
import RockIcon from '@/components/Icons/RockIcon.vue';
import ScissorsIcon from '@/components/Icons/ScissorsIcon.vue';
</script>

<style scoped>

</style>
