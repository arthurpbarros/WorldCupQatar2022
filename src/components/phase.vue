<script>
import { wc_store } from '../store/store';
import confront from './confront.vue';
export default {
  components: {
    confront
  },
  setup() {
    const store = wc_store();
    return {
      store
    }
  },
  props: ['fase','jogos_fase','store'],
  data() {
    return {
      jogos_finais: this.store.jogos_finais.filter((jogo) => jogo.fase === this.fase)
    }
  },
  mounted(){
    console.log("oitavas renderizada");
  },
  methods: {
    alterar_placar(jogo_dado) {
      if (!isNaN(parseInt(jogo_dado.placar1)) && !isNaN(parseInt(jogo_dado.placar2))) {
        this.store.alterar_jogo(jogo_dado);
      }
    },
    cancelar_placar(jogo_dado) {
      this.store.cancelar_jogo(jogo_dado);
    }
  },
};
</script>
<template>
  <div class="w-full">
    <div class="flex flex-col justify-center gap-4 w-full min-h-screen tall:mt-8">
      <div class="bg-white rounded-lg shadow-lg" :class="jogo.concluido ? 'border border-red-800' : ''"
        v-for="jogo in jogos_finais" :key="jogo.id">
        <div>
          <confront :jogo="jogo"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>