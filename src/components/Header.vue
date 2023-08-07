<template>
    <div :class="classname">
        <Logo/>
        <Score :score="score"/>
    </div>
</template>

<script setup lang="ts">

import { cn } from '@/lib/utils';
import Logo from './Logo.vue';
import Score from './Score.vue';
</script>

<script lang="ts">
export default {
    data() {
        return {
            classname:cn("mx-[32px] max-w-[700px] lg:mx-auto border-[3px] border-header rounded-[5px] py-[12px] lg:py-[18px] pl-[23px] lg:pl-[32px] pr-[12px] lg:pr-[24px] flex items-center justify-between")
        }
    },
    props:{
        score:Number
    }
}
</script>