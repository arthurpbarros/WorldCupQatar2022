<script>
import { wc_store } from '../../store/store';
import match from '../confront_types/match.vue';
export default {
  components: {
    match
  },
  props: ['jogos_grupo','id_grupo'],
  setup() {
    const store = wc_store();
    return {
      store
    }
  },
  data() {
    return {
      jogos: this.jogos_grupo,
      rodada_minima: 1,
      rodada_maxima: 3,
      rodada_atual: 1
    }
  },
  methods: {
    proxima_rodada() {
      if (this.rodada_atual < this.rodada_maxima) {
        this.rodada_atual += 1;
      }
    },
    rodada_anterior() {
      if (this.rodada_atual > this.rodada_minima) {
        this.rodada_atual -= 1;
      }
    },
    alterar_placar(jogo_dado) {
      if (!isNaN(parseInt(jogo_dado.placar1)) && !isNaN(parseInt(jogo_dado.placar2))) {
        this.store.alterar_jogo(jogo_dado);
      }
    },
    cancelar_placar(jogo_dado){
      this.store.cancelar_jogo(jogo_dado);
    }
  },
  computed: {
    jogos_rodada(){
      let jogos_rodada_atual = this.jogos.filter((jogo) => jogo.rodada === this.rodada_atual);
      return jogos_rodada_atual;
    }
  }
};
</script>
<template>
  <div class="w-full">
    <div class="grid grid-cols-3 gap-4 w-full mt-5">
      <div class="font-bold mx-auto" :class="(rodada_atual!==rodada_minima)?'text-black' : 'text-gray-200'" v-on:click="rodada_anterior">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </div>
      <div class="mx-auto">
        RODADA {{ rodada_atual }}
      </div>
      <div class="text-black font-bold mx-auto"  :class="(rodada_atual!==rodada_maxima)?'text-black' : 'text-gray-200'" v-on:click="proxima_rodada">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </div>
    </div>
    <div class="gap-4 flex flex-col">
      <div class="bg-white rounded-lg shadow" :class="jogo.concluido? 'shadow-primary': ''" v-for="jogo in jogos_rodada" :key="jogo.id">
        <match :jogo="jogo" @mudanca_placar="alterar_placar" @cancelar_placar="cancelar_placar"/>
      </div>
    </div>
  </div>
</template>
<style scoped></style>