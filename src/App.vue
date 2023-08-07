<script setup lang="ts">
import Header from './components/Header.vue'
import PlayArea from './components/PlayArea.vue'
import RulesButton from './components/RulesButton.vue'
import Rules from './components/Rules.vue'
import PlayerChoice from './components/PlayerChoice.vue'
</script>

<template>
  <main
    class="w-full h-[200vh] lg:h-screen bg-main pt-[32px] font-barlow-condesed overflow-x-hidden"
    v-auto-animate
    >
    <Header :score="score" />
    <PlayArea @selectChoice="playGame" @selectImage="setSelectedImage" v-if="playerChoice === ''" />
    <PlayerChoice
      :computerChoice="computerChoice"
      :selectedImage="selectedImage"
      v-if="playerChoice"
      :winner="winner"
      @reset="resetGame"
    />
    <RulesButton @open="showRules" />
    <Rules v-if="showModal" @close="closeRules" />
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showModal: false,
      winner: '',
      score: 0,
      playerChoice: '',
      computerChoice: '',
      selectedImage: ''
    }
  },
  methods: {
    showRules() {
      this.showModal = true
    },
    closeRules() {
      this.showModal = false
    },
    playGame(playerChoice: string) {
      const choices = ['rock', 'paper', 'scissors']
      this.playerChoice = playerChoice

      setTimeout(() => {
        const computerChoice = choices[Math.floor(Math.random() * 3)]
        this.computerChoice = computerChoice
        if (playerChoice === computerChoice) {
          this.winner = 'tie'
        } else if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'paper' && computerChoice === 'rock') ||
          (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
          this.winner = 'user'
          this.score++
        } else {
          this.winner = 'computer'
        }
      }, 2000)
    },
    setSelectedImage(selectedImage: string) {
      this.selectedImage = selectedImage
    },
    resetGame(){
      this.winner = '';
      this.playerChoice = '';
      this.computerChoice = '';
      this.selectedImage = '';
    }
  }
}
</script>
