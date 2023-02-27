<script>
export default {
    props: ['jogo'],
    data(){
      return {
        jogo_dado: this.jogo
      }
    },
    methods: {
      mudar_placar1(){
        this.$emit('mudanca_placar',this.jogo_dado);
      }
    },
    emits: ['mudanca_placar']
};
</script>
<template>
  <div class="text-center flex flex-row mt-3">
    <p class="w-1/3">{{ jogo_dado.time1.nome }}</p>
    <div class="w-1/3">
      <input type="text" class="w-1/5 border-2 border-gray-200 rounded-lg text-center" v-on:change="mudar_placar1" v-model="jogo_dado.placar1"/>
      <span class="w-3/5"> X </span>
      <input type="text" class="w-1/5 border-2 border-gray-200 rounded-lg text-center" v-on:change="mudar_placar1" v-model="jogo_dado.placar2"/>
    </div>
    <p class="w-1/3">{{ jogo_dado.time2.nome }}</p>
  </div>

  <div class="text-center my-2 text-xs flex flex-col">
    <div class="font-bold">{{ jogo_dado.data }} às {{ jogo_dado.hora }}</div>
    <div>{{ jogo_dado.local.nome }}</div>
  </div>
</template>
<style scoped>
</style>
