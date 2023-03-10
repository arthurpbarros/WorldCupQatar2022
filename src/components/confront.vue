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
    console.log("confronto renderizado");
    if(typeof(this.dados_jogo.time1) == 'string'){
      let time1 = this.dados_jogo.time1;
      let elementos = time1.split('');
      let grupoID = elementos[0];
      let lugar = parseInt(elementos[1]);
      const grupo = this.store.grupos.filter((g) => g.id === grupoID)[0];
      this.dados_jogo.time1 = grupo.times[lugar];

      console.log(grupo,lugar,grupo.times[lugar]);

      elementos = this.dados_jogo.time2.split('');
      grupoID = elementos[0];
      lugar = parseInt(elementos[1]);
      const grupo2 = this.store.grupos.filter((g) => g.id === grupoID)[0];
      this.dados_jogo.time2 = grupo2.times[lugar];
    }else{
      console.log("objeto");
      console.log(this.store.grupos[0].times[0],this.store.grupos[1].times[1])

      for(let grupo of this.store.grupos){
        for(let time of grupo.times){
          if(time.sigla === this.dados_jogo.time1.sigla){
            const time_esc = (this.store.grupos.filter((g)=> g.id === grupo.id)[0]).times[0];
            console.log(grupo.id);
            this.dados_jogo.time1 = time_esc;
          }
        }
      }

      for(let grupo of this.store.grupos){
        for(let time of grupo.times){
          if(time.sigla === this.dados_jogo.time2.sigla){
            console.log(grupo.id);
            this.dados_jogo.time2 = this.store.grupos.filter((g)=> g.id === grupo.id)[0].times[1];
          }
        }
      }
    }
  }
}
</script>
<template>
  <div class="text-center flex flex-row mt-3">
    <p class="w-1/3">{{ dados_jogo.time1.nome }}</p>
    <div class="w-1/3">
      <input
        type="number"
        min="0"
        max="20"
        class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
        v-model="dados_jogo.placar1"
      />
      <span class="w-1/5"> X </span>
      <input
        type="number"
        min="0"
        max="20"
        class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
        v-model="dados_jogo.placar2"
      />
    </div>
    <p class="w-1/3">{{ dados_jogo.time2.nome }}</p>
  </div>

  <div class="text-center my-2 text-xs flex flex-col">
    <div class="font-bold">{{ dados_jogo.data }} às {{ dados_jogo.hora }}</div>
    <div>{{ dados_jogo.local.nome }}</div>
    <div v-if="dados_jogo.concluido">
      <button
        class="bg-red-700 rounded p-2 text-white text-xs hover:bg-red-600"
        @click="cancelar_placar"
      >
        CANCELAR
      </button>
    </div>
  </div>
</template>
<style scoped></style>
