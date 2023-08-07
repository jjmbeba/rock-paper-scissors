<template>
  <div class="mx-[32px] lg:mx-auto mt-[105px] relative max-w-[476px]">
    <div class="flex items-center justify-between relative ">
      <div @click="choose('paper')" class="relative before:absolute before:content-[''] before:w-[252px] before:h-[248px] before:rounded-full before:pointer-events-none hover:before:bg-white/5 before:top-1/2 before:translate-y-[-50%] before:right-1/2 before:translate-x-[50%]">
        <img :src="paper" alt="paper-image" class=" z-10 lg:w-[198px] cursor-pointer relative" />
      </div>
      <div @click="choose('scissors')" class="relative before:absolute before:content-[''] before:w-[252px] before:h-[248px] before:rounded-full before:pointer-events-none hover:before:bg-white/5 before:top-1/2 before:translate-y-[-50%] before:right-1/2 before:translate-x-[50%]">
        <img :src="scissors" alt="scissors-image" class="relative z-10 lg:w-[198px] cursor-pointer"/>
      </div>
    </div>
    <div @click="choose('rock')" class="relative before:absolute before:content-[''] before:w-[252px] before:h-[248px] before:rounded-full before:pointer-events-none hover:before:bg-white/5 before:top-1/2 before:translate-y-[-50%] before:right-1/2 before:translate-x-[50%]">
      <img :src="rock" class="mt-[15px] mx-auto z-10 relative lg:w-[198px] cursor-pointer" alt="rock-image" />
    </div>
    <img :src="triangle" class="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] -z-0 lg:w-[254px]" alt="triangle-image" >
  </div>
</template>

<script setup lang="ts">
import paper from '../assets/paper.svg'
import scissors from '../assets/scissors.svg'
import rock from '../assets/rock.svg'
import triangle from '../assets/triangle.svg'
</script>

<script lang="ts">
export default {
  methods:{
    choose(playerChoice:string){
      this.$emit("selectChoice", playerChoice);

      if(playerChoice === 'rock'){
        this.$emit('selectImage',rock)
      }else if(playerChoice === 'paper'){
        this.$emit('selectImage',paper)
      }else if(playerChoice === 'scissors'){
        this.$emit('selectImage', scissors)
      }
    }
  }
}
</script>
