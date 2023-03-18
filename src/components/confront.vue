<script>
import { wc_store } from '../store/store';
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
      let oitava_final = this.store.jogos_finais.filter((oitava) => oitava.id === this.dados_jogo.ref1)[0];
      let vencedor1 = this.store.vencedor_jogo_fases_finais(oitava_final);
      oitava_final = this.store.jogos_finais.filter((oitava) => oitava.id === this.dados_jogo.ref2)[0];
      let vencedor2 = this.store.vencedor_jogo_fases_finais(oitava_final);
      if(vencedor1 !== false && vencedor2 !== false){
        this.dados_jogo.time1 = vencedor1;
        this.dados_jogo.time2 = vencedor2;
      }
    }else if(typeof (time1) === 'object' && typeof (time2) === 'object'){
      let oitava_final = this.store.jogos_finais.filter((oitava) => oitava.id === this.dados_jogo.ref1)[0];
      let vencedor1 = this.store.vencedor_jogo_fases_finais(oitava_final);
      oitava_final = this.store.jogos_finais.filter((oitava) => oitava.id === this.dados_jogo.ref2)[0];
      let vencedor2 = this.store.vencedor_jogo_fases_finais(oitava_final);
      if(vencedor1 !== false && vencedor2 !== false){
        this.verificar_mudanca_times(vencedor1,vencedor2);
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
    verificar_mudanca_times(vencedor1,vencedor2){
      if(vencedor1.sigla !== this.dados_jogo.time1.sigla || vencedor2.sigla !== this.dados_jogo.time2.sigla){
        this.dados_jogo.time1 = vencedor1;
        this.dados_jogo.time2 = vencedor2;
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
