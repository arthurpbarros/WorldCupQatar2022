<script>
export default {
    props: ['jogo'],
    data(){
      return {
        dados_jogo: this.jogo
      }
    },
    methods: {
      mudar_placar(){
        this.$emit('mudanca_placar',this.dados_jogo);
      },
      cancelar_placar(){
        this.$emit('cancelar_placar',this.dados_jogo);
      }
    },
    emits: ['mudanca_placar','cancelar_placar']
};
</script>
<template>
  <div class="text-center flex flex-row mt-3 text-sm">
    <div class="w-1/3">{{ dados_jogo.time1.nome }}</div>
    <div class="w-1/3 text-gray-600 font-bold font-local">
      <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center" v-on:change="mudar_placar" v-model="dados_jogo.placar1"/>
      <span class="w-1/5"> X </span>
      <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center" v-on:change="mudar_placar" v-model="dados_jogo.placar2"/>
    </div>
    <div class="w-1/3">{{ dados_jogo.time2.nome }}</div>
  </div>

  <div class="text-center my-2 text-xs flex flex-col">
    <div class="font-local font-bold text-gray-500">{{ dados_jogo.data }} às {{ dados_jogo.hora }}</div>
    <div class="uppercase text-red-700">{{ dados_jogo.local.nome }}</div>
    <div v-if="dados_jogo.concluido">
      <button class="bg-red-700 rounded p-2 mt-1 text-white text-xs hover:bg-red-600" @click="cancelar_placar"> CANCELAR </button>
    </div>
  </div>
</template>
<style scoped>
</style>
