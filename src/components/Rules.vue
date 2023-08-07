<template>
    <div class="absolute inset-0 lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] lg:rounded-[8px] lg:max-w-[400px] lg:max-h-[415px] bg-white z-20 h-[200vh] pt-[95px] lg:pt-[32px] lg:pl-[32px] flex flex-col items-center lg:items-start">
        <img @click="$emit('close')" class="cursor-pointer absolute top-[38px] lg:top-[38px] lg:right-[31px] right-[20px]" :src="closeImage" alt="close-icon">
        <h1 class="mx-auto lg:mx-0 text-[#3B4262] text-[32px] leading-[32px] font-bold">RULES</h1>
        <img class="mt-[113px] lg:mt-[48px] lg:max-w-[305px] lg:max-h-[271px]" :src="rulesImage" alt="rules-image">
    </div>
</template>

<script setup lang="ts">
import rules from '../assets/rules.svg';
import close from '../assets/close.svg';
</script>

<script lang="ts">
export default {
  data() {
    return {
        rulesImage:rules,
        closeImage:close,
    }
  }
}
</script>