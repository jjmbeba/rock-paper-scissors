<template>
    <div class="mt-[62px] flex flex-col items-center lg:mt-0">
        <h1 class="text-white text-[56px] leading-normal font-bold">{{ displayWinnerMessage }}</h1>
        <button @click="resetGame" class="whitespace-nowrap mt-[16px] lg:mt-[31px] bg-score py-[16px] px-[61px] rounded-[8px] text-[#3B4262] hover:text-[#DB2E4D] text-[16px] font-semibold tracking-[2.5px] leading-normal">PLAY AGAIN</button>
    </div>
</template>

<script lang="ts">
export default{
    props: {
        winner: String,
        reset:Function
    },
    computed: {
        displayWinnerMessage() {
            if(this.winner === 'computer'){
                return 'YOU LOSE'
            }else if(this.winner === 'user'){
                return 'YOU WIN'
            }else{
                return "IT'S A TIE"
            }
        }
    },
    methods:{
        resetGame(){
            this.$emit('reset')
        }
    }
}
</script>