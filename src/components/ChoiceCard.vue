<template>
  <div :class="choice === '' && 'gap-[28px]'" class="flex flex-col items-center lg:flex-col-reverse lg:gap-[63px]">
    <img :src="image" class="lg:w-[292px]" alt="selected-icon" />
    <div
      class="text-white text-[15px] lg:text-[24px] leading-[32px] tracking-[1.875px] lg:tracking-[3px] font-bold"
    >
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: String,
    text:String,
    choice:String,
    winner:String,
  }
}
</script>
