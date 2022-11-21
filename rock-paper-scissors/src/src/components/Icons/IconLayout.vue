<template>
  <div class="w-[120px] h-[120px] bg-red rounded-full overflow-hidden border-8 border-solid" :class="`border-${color}`" >
    <div class="bg-white w-full h-full flex justify-center items-center">
      <img class="fill-darkText" :src="imgSrc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

type IconLayoutProps = {
  color: string;
  imgSrc: string
}

defineProps<IconLayoutProps>()


</script>

<style scoped>

</style>
