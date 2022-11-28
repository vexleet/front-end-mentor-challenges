<template>
  <IconLayout color="border-paperIconColor" :size="size" img-src="src/assets/images/icon-paper.svg"/>
</template>

<script setup lang="ts">
import IconLayout from '@/components/Icons/IconLayout.vue';
import {IconProps} from '@/types/IconsProps';

withDefaults(defineProps<IconProps>(), {size: 'normal'})
</script>

<style scoped>

</style>
