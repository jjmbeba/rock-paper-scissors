<template>
  <div class="rounded-[4px] bg-score shadow-score py-[10px] lg:py-[15px] px-[24px] lg:px-[48px] flex flex-col items-center ">
    <span class="text-[#2A45C2] text-[10px] leading-[1.563px] font-semibold">SCORE</span>
    <span class="text-[#49465e] text-[40px] lg:text-[64px] leading-[40px] lg:leading-[64px]">{{ score }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    score:Number
  },
};
</script>
