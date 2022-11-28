<template>
  <div class="bg-red rounded-full overflow-hidden border-[15px] border-solid" :class="[color, sizeClasses[size]]" >
    <div class="bg-white w-full h-full flex justify-center items-center">
      <img class="w-[50px]" :src="imgSrc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {Size} from '@/types/IconsProps';

type IconLayoutProps = {
  color: string
  imgSrc: string
  size?: 'normal' | 'large'
}

type Test =  Record<Size, string>

const sizeClasses: Test = {
  normal: 'w-[130px] h-[130px]',
  large: 'w-[160px] h-[160px]'
}

const props = withDefaults(defineProps<IconLayoutProps>(), {size: 'normal'})
</script>

<style scoped>

</style>
