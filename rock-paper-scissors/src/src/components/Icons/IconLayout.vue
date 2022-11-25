<template>
  <div class="w-[130px] h-[130px] bg-red rounded-full overflow-hidden border-[15px] border-solid" :class="color" >
    <div class="bg-white w-full h-full flex justify-center items-center">
      <img class="w-[50px]" :src="imgSrc" />
    </div>
  </div>
</template>

<script setup lang="ts">
type IconLayoutProps = {
  color: string;
  imgSrc: string
}

defineProps<IconLayoutProps>()

</script>

<style scoped>

</style>
