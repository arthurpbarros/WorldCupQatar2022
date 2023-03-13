<script>
import { wc_store } from '../store/store';
import confront16 from './confront_of_16.vue';
export default {
  components: {
    confront16
  },
  setup() {
    const store = wc_store();
    return {
      store
    }
  },
  emits: ['mudanca_placar', 'cancelar_placar'],
  props: ['fase','jogos_fase'],
  data() {
    return {
      jogos_finais: this.store.jogos_finais.filter(jf => jf.fase === this.fase)
    }
  },
  methods: {
    alterar_placar(dados_jogo) {
      if (!isNaN(parseInt(dados_jogo.placar1)) && !isNaN(parseInt(dados_jogo.placar2))) {
        this.store.alterar_jogo_fases_finais(dados_jogo);
      }
    },
    cancelar_placar(dados_jogo) {
      this.store.cancelar_jogo_fases_finais(dados_jogo);
    }
  },
  beforeUpdate(){
    console.log("oitavas atualizada");
  }
};
</script>
<template>
  <div class="w-full">
    <div class="flex flex-col justify-center gap-4 w-full min-h-screen tall:mt-8">
      <div class="bg-white rounded-lg shadow-lg" :class="jogo.concluido ? 'border border-red-800' : ''"
        v-for="jogo in jogos_finais">
        <div>
          <confront16 :jogo="jogo" @mudanca_placar="alterar_placar" @cancelar_placar="cancelar_placar" :key="'oitavas'+jogo.id"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>