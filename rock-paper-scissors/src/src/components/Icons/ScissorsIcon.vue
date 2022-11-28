<template>
  <IconLayout color="border-scissorsIconColor" :size="size" img-src="src/assets/images/icon-scissors.svg"/>
</template>

<script setup lang="ts">
import IconLayout from "@/components/Icons/IconLayout.vue";
import {IconProps} from '@/types/IconsProps';

defineProps<IconProps>()
</script>

<style scoped>

</style>
