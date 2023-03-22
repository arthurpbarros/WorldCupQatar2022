<script>
import { wc_store } from '../../store/store';
export default {
  props: ['jogo'],
  setup() {
    const store = wc_store();
    return {
      store
    }
  },
  data() {
    return {
      dados_jogo: this.jogo
    }
  },
  mounted() {
    console.log(this.dados_jogo);
    let time1 = this.dados_jogo.time1;
    let time2 = this.dados_jogo.time2;

    if (Object.keys(time1).length === 0 && Object.keys(time2).length === 0) {
      let jogo_fase_final = this.store.jogos_finais.filter((jogo) => jogo.id === this.dados_jogo.ref1)[0];
      let perdedor1 = this.store.perdedor_semifinal(jogo_fase_final);
      jogo_fase_final = this.store.jogos_finais.filter((jogo) => jogo.id === this.dados_jogo.ref2)[0];
      let perdedor2 = this.store.perdedor_semifinal(jogo_fase_final);
      if(perdedor1 !== false && perdedor2 !== false){
        this.dados_jogo.time1 = perdedor1;
        this.dados_jogo.time2 = perdedor2;
      }
    }else if(typeof (time1) === 'object' && typeof (time2) === 'object'){
      let jogo_fase_final = this.store.jogos_finais.filter((jogo) => jogo.id === this.dados_jogo.ref1)[0];
      let perdedor1 = this.store.perdedor_semifinal(jogo_fase_final);
      jogo_fase_final = this.store.jogos_finais.filter((jogo) => jogo.id === this.dados_jogo.ref2)[0];
      let perdedor2 = this.store.perdedor_semifinal(jogo_fase_final);
      if(perdedor1 !== false && perdedor2 !== false){
        this.verificar_mudanca_times(perdedor1,perdedor2);
      }else{
        this.dados_jogo.time1 = {};
        this.dados_jogo.time2 = {};
        this.$emit('cancelar_placar',this.dados_jogo);
      }
    }else{

    }
  },
  methods: {
    mudar_placar() {
      this.$emit('mudanca_placar', this.dados_jogo);
    },
    cancelar_placar() {
      this.$emit('cancelar_placar', this.dados_jogo);
    },
    verificar_mudanca_times(perdedor1,perdedor2){
      if(perdedor1.sigla !== this.dados_jogo.time1.sigla || perdedor2.sigla !== this.dados_jogo.time2.sigla){
        this.dados_jogo.time1 = perdedor1;
        this.dados_jogo.time2 = perdedor2;
        this.$emit('cancelar_placar',this.dados_jogo);
      }
      
    }
  },
  emits: ['mudanca_placar', 'cancelar_placar']
}
</script>
<template>
  <div class="text-center flex flex-row mt-3" :class="dados_jogo.concluido? 'text-primary':''">
    <p class="w-1/3">{{ dados_jogo.time1.nome }}</p>
    <div class="w-1/3 text-black font-bold">
      <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
        v-model="dados_jogo.placar1" v-on:change="mudar_placar">
      <span class="w-1/5"> X </span>
      <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
        v-model="dados_jogo.placar2" v-on:change="mudar_placar"/>
    </div>
    <p class="w-1/3">{{ dados_jogo.time2.nome }}</p>
  </div>

  <div v-if="dados_jogo.concluido && dados_jogo.placar1 === dados_jogo.placar2">
    <div class="text-center text-xs flex flex-col mt-2">
      PÊNALTIS
    </div>
    <div class="text-center flex flex-row" :class="dados_jogo.concluido? 'text-primary':''" >
      <div class="w-1/3 text-gray-500 font-bold mx-auto">
        <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
          v-model="dados_jogo.penalti1" v-on:change="mudar_placar" />
        <span class="w-1/5"> X </span>
        <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
          v-model="dados_jogo.penalti2" v-on:change="mudar_placar"/>
      </div>
    </div>
  </div>

  <div class="text-center my-2 text-xs flex flex-col">
    <div class="font-bold">{{ dados_jogo.data }} às {{ dados_jogo.hora }}</div>
    <div class="uppercase">{{ dados_jogo.local.nome }}</div>
    <div v-if="dados_jogo.concluido">
      <button class="bg-red-700 rounded p-2 text-white text-xs hover:bg-red-600" @click="cancelar_placar">
        CANCELAR
      </button>
    </div>
  </div>
</template>
<style scoped></style>