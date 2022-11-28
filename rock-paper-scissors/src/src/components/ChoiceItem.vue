<template>
  <div class="text-center w-max">
    <p class="uppercase text-white text-lg mb-8">{{title}}</p>
    <div class="relative">
      <component class="mx-auto" size="large" :is="component"></component>
      <span v-if="hasAnimation" class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulsing-span-1 rounded-full w-[230px] h-[230px] block"></span>
      <span v-if="hasAnimation" class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulsing-span-2 rounded-full w-[290px] h-[290px] block"></span>
      <span v-if="hasAnimation" class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulsing-span-3 rounded-full w-[350px] h-[350px] block"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
type ChoiceItemProps = {
  title: string
  component: any
  hasAnimation: boolean
}

defineProps<ChoiceItemProps>()
</script>

<style scoped>

</style>
