<template>
  <div class="text-center w-max">
    <p class="uppercase text-white text-lg mb-8">{{title}}</p>
    <component class="mx-auto" :is="component"></component>
  </div>
</template>

<script lang="ts" setup>
type ChoiceItemProps = {
  title: string
  component: any
}

defineProps<ChoiceItemProps>()
</script>

<style scoped>

</style>
