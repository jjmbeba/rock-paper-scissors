<script setup lang="ts">
import placeholder from '../assets/placeholder.svg'
import paper from '../assets/paper.svg'
import scissors from '../assets/scissors.svg'
import rock from '../assets/rock.svg'
import ChoiceCard from './ChoiceCard.vue'
import WinnerText from './WinnerText.vue'
</script>

<template>
  <div
    class="flex items-center justify-between mt-[100px] pl-[29px] pr-[22px] lg:max-w-[938px] lg:justify-center lg:gap-[72px] lg:mx-auto"
  >
    <ChoiceCard :player="'user'" :winner="winner" :image="selectedImage" :text="'YOU PICKED'" />
    <WinnerText class="hidden lg:block" v-if="winner" :winner="winner" :reset="reset" @reset="reset"/>
    <ChoiceCard
      :player="'computer'"
      :choice="computerChoice"
      :image="computerImage"
      :winner="winner"
      :text="'THE HOUSE PICKED'"
    />
  </div>
  <WinnerText class="lg:hidden" v-if="winner" :winner="winner" :reset="reset" @reset="reset"/>
</template>

<script lang="ts">
export default {
  props: {
    selectedImage: String,
    computerChoice: String,
    winner: String,
  },
  computed: {
    computerImage() {
      if (this.computerChoice === 'rock') {
        return rock
      } else if (this.computerChoice === 'paper') {
        return paper
      } else if (this.computerChoice === 'scissors') {
        return scissors
      } else if (this.computerChoice === '') {
        return placeholder
      }
    }
  },
  methods:{
    reset(){
      this.$emit('reset')
    }
  }
}
</script>
